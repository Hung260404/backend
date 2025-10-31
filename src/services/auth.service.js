import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import prisma from "../common/prisma/init.prisma.js";

dotenv.config();

const authService = {
  // --- Đăng ký tài khoản ---
  register: async (data) => {
    const {
      TenDangNhap,
      MatKhau,
      LoaiTaiKhoan = "SinhVien",
      MaSV,
      MaGV,
    } = data;

    if (!TenDangNhap || !MatKhau)
      throw new Error("Thiếu tên đăng nhập hoặc mật khẩu");

    const existing = await prisma.tAIKHOAN.findUnique({
      where: { TenDangNhap },
    });

    if (existing) throw new Error("Tên đăng nhập đã tồn tại");

    // ❌ Không mã hóa nữa — lưu trực tiếp mật khẩu
    const created = await prisma.tAIKHOAN.create({
      data: {
        TenDangNhap,
        MatKhau, // <-- Lưu thẳng mật khẩu
        LoaiTaiKhoan,
        MaSV: MaSV || null,
        MaGV: MaGV || null,
      },
    });

    return {
      TenDangNhap: created.TenDangNhap,
      LoaiTaiKhoan: created.LoaiTaiKhoan,
      MaSV: created.MaSV,
      MaGV: created.MaGV,
    };
  },

  // --- Đăng nhập ---
  login: async (TenDangNhap, MatKhau) => {
    const account = await prisma.tAIKHOAN.findUnique({
      where: { TenDangNhap },
    });

    if (!account) throw new Error("Tài khoản không tồn tại");

    // ❌ Không dùng bcrypt nữa, chỉ so sánh trực tiếp
    if (MatKhau !== account.MatKhau) throw new Error("Sai mật khẩu");

    // Lấy thông tin người dùng
    let profile = null;
    if (account.MaSV) {
      profile = await prisma.sINHVIEN.findUnique({
        where: { MaSV: account.MaSV },
      });
    } else if (account.MaGV) {
      profile = await prisma.gIANGVIEN.findUnique({
        where: { MaGV: account.MaGV },
      });
    }

    // Tạo token
    const accessToken = jwt.sign(
      {
        TenDangNhap: account.TenDangNhap,
        LoaiTaiKhoan: account.LoaiTaiKhoan,
        MaSV: account.MaSV,
        MaGV: account.MaGV,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { TenDangNhap: account.TenDangNhap },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    return {
      accessToken,
      refreshToken,
      user: {
        TenDangNhap: account.TenDangNhap,
        LoaiTaiKhoan: account.LoaiTaiKhoan,
        MaSV: account.MaSV,
        MaGV: account.MaGV,
        profile,
      },
    };
  },

  // --- Làm mới Access Token ---
  refreshAccessToken: async (refreshToken) => {
    if (!refreshToken) throw new Error("Thiếu refresh token");

    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      const user = await prisma.tAIKHOAN.findUnique({
        where: { TenDangNhap: decoded.TenDangNhap },
      });
      if (!user) throw new Error("Tài khoản không tồn tại");

      const newAccess = jwt.sign(
        {
          TenDangNhap: user.TenDangNhap,
          LoaiTaiKhoan: user.LoaiTaiKhoan,
          MaSV: user.MaSV,
          MaGV: user.MaGV,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      return { accessToken: newAccess };
    } catch {
      throw new Error("Refresh token không hợp lệ");
    }
  },
};

export default authService;
