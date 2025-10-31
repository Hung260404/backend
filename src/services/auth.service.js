import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";
const REFRESH_SECRET = process.env.REFRESH_SECRET || "refresh_secret";

const authService = {
  // Đăng ký tài khoản mới
  register: async ({ TenDangNhap, MatKhau, LoaiTaiKhoan, MaSV, MaGV }) => {
    const existing = await prisma.tAIKHOAN.findUnique({
      where: { TenDangNhap },
    });
    if (existing) throw new Error("Tên đăng nhập đã tồn tại");

    const user = await prisma.tAIKHOAN.create({
      data: {
        TenDangNhap,
        MatKhau, // ⚠ Không mã hóa, lưu trực tiếp
        LoaiTaiKhoan,
        MaSV,
        MaGV,
      },
    });
    return user;
  },

  // Đăng nhập
  login: async (TenDangNhap, MatKhau) => {
    const user = await prisma.tAIKHOAN.findUnique({ where: { TenDangNhap } });
    if (!user) throw new Error("Tên đăng nhập không tồn tại");

    // So sánh trực tiếp
    if (user.MatKhau !== MatKhau) throw new Error("Sai mật khẩu");

    // Tạo token
    const accessToken = jwt.sign(
      { TenDangNhap: user.TenDangNhap, LoaiTaiKhoan: user.LoaiTaiKhoan },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { TenDangNhap: user.TenDangNhap },
      REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    return { user, accessToken, refreshToken };
  },

  // Làm mới token
  refreshAccessToken: async (refreshToken) => {
    try {
      const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
      const accessToken = jwt.sign(
        { TenDangNhap: decoded.TenDangNhap },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      return { accessToken };
    } catch (err) {
      throw new Error("Refresh token không hợp lệ hoặc đã hết hạn");
    }
  },
};

export default authService;
