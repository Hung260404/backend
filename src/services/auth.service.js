// src/services/auth.service.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// =====================
// Utility generate token
// =====================
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

// =====================
// REGISTER
// =====================
export const register = async (data) => {
  const { email, password } = data;

  // 1. Check email tồn tại
  const existingUser = await prisma.users.findUnique({
    where: { email },
  });
  if (existingUser) throw { status: 400, message: "Email đã tồn tại" };

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Create user (không có name)
  const user = await prisma.users.create({
    data: {
      email,
      password: hashedPassword,
      role_id: 3, // default = User (nếu anh có role 1=admin,2=staff,3=user)
      status: 1, // 1 = active
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  // 4. Trả về response
  return {
    success: true,
    message: "Đăng ký thành công",
    user: {
      id: user.id,
      email: user.email,
      role_id: user.role_id,
      status: user.status,
    },
  };
};

// =====================
// LOGIN
// =====================
export const login = async ({ email, password }) => {
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) throw { status: 400, message: "Email không tồn tại" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw { status: 400, message: "Sai mật khẩu" };

  const { accessToken, refreshToken } = generateTokens(user);

  // Lưu refresh token vào DB
  await prisma.users.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  return {
    success: true,
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name },
  };
};

// =====================
// OAUTH (placeholder)
// =====================
export const oauthLogin = async ({ email, provider }) => {
  let user = await prisma.users.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.users.create({
      data: { email, provider },
    });
  }

  const { accessToken, refreshToken } = generateTokens(user);

  await prisma.users.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  return { accessToken, refreshToken, user };
};

// =====================
// REFRESH TOKEN
// =====================
export const refreshToken = async (token) => {
  if (!token) throw { status: 401, message: "Không có refresh token" };

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    throw { status: 403, message: "Refresh token không hợp lệ" };
  }

  const user = await prisma.users.findUnique({ where: { id: decoded.id } });
  if (!user || user.refreshToken !== token)
    throw { status: 403, message: "Refresh token không khớp" };

  const { accessToken, refreshToken } = generateTokens(user);

  await prisma.users.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  return { accessToken, refreshToken };
};

// =====================
// LOGOUT
// =====================
export const logout = async (userId) => {
  await prisma.users.update({
    where: { id: userId },
    data: { refreshToken: null },
  });

  return { success: true, message: "Đăng xuất thành công" };
};

// =====================
// FORGOT PASSWORD
// =====================
export const forgotPassword = async (email) => {
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) throw { status: 400, message: "Email không tồn tại" };

  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetExpire = new Date(Date.now() + 15 * 60 * 1000); // 15 phút

  await prisma.users.update({
    where: { email },
    data: {
      resetPasswordToken: resetToken,
      resetPasswordExpire: resetExpire,
    },
  });

  // Ở đây anh sẽ gửi email (tạm bỏ qua)
  return {
    success: true,
    message: "Đã gửi email đặt lại mật khẩu",
    resetToken,
  };
};

// =====================
// RESET PASSWORD
// =====================
export const resetPassword = async ({ token, newPassword }) => {
  const user = await prisma.users.findFirst({
    where: {
      resetPasswordToken: token,
      resetPasswordExpire: { gt: new Date() },
    },
  });

  if (!user)
    throw { status: 400, message: "Token không hợp lệ hoặc đã hết hạn" };

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.users.update({
    where: { id: user.id },
    data: {
      password: hashed,
      resetPasswordToken: null,
      resetPasswordExpire: null,
    },
  });

  return { success: true, message: "Đặt lại mật khẩu thành công" };
};

// =====================
// CHANGE PASSWORD
// =====================
export const changePassword = async (userId, oldPassword, newPassword) => {
  const user = await prisma.users.findUnique({ where: { id: userId } });

  if (!user) throw { status: 404, message: "Người dùng không tồn tại" };

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) throw { status: 400, message: "Mật khẩu cũ không đúng" };

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.users.update({
    where: { id: userId },
    data: { password: hashed },
  });

  return { success: true, message: "Đổi mật khẩu thành công" };
};
