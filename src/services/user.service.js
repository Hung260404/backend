// src/services/user.service.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getMe = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      full_name: true,
      phone: true,
      avatar_url: true,
      role: true,
    },
  });

  if (!user) throw { status: 404, message: "Không tìm thấy người dùng" };
  return user;
};

export const updateProfile = async (userId, data) => {
  return prisma.users.update({
    where: { id: userId },
    data: {
      full_name: data.full_name,
      phone: data.phone,
      avatar_url: data.avatar_url,
    },
  });
};

export const uploadKYC = async (userId) => {
  return prisma.providers.update({
    where: { user_id: userId },
    data: { kyc_status: "PENDING" },
  });
};
