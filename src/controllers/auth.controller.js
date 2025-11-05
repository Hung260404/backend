import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import prisma from "../common/prisma/init.prisma.js";

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// Hàm kiểm tra giá trị giới tính hợp lệ
function formatGioiTinh(value) {
  if (!value) return null;
  value = value.toLowerCase();
  if (value === "nam") return "Nam";
  if (value === "nữ" || value === "nu") return "Nữ";
  return null;
}

const authController = {
  // --- REGISTER ---
  register: async (req, res, next) => {
    try {
      const { TenDangNhap, MatKhau, HoTen, GioiTinh, NgaySinh, DiaChi, MaLop } =
        req.body;

      if (!TenDangNhap || !MatKhau || !HoTen || !MaLop) {
        return res
          .status(400)
          .json({ success: false, message: "Thiếu thông tin đăng ký" });
      }

      const exists = await prisma.tAIKHOAN.findUnique({
        where: { TenDangNhap },
      });
      if (exists) {
        return res
          .status(400)
          .json({ success: false, message: "Tên đăng nhập đã tồn tại" });
      }

      const hashedPassword = await bcrypt.hash(MatKhau, 10);

      const newSV = await prisma.sINHVIEN.create({
        data: {
          MaSV: TenDangNhap,
          HoTen,
          GioiTinh: formatGioiTinh(GioiTinh),
          NgaySinh: NgaySinh ? new Date(NgaySinh) : null,
          DiaChi,
          MaLop,
        },
      });

      await prisma.tAIKHOAN.create({
        data: {
          TenDangNhap,
          MatKhau: hashedPassword,
          LoaiTaiKhoan: "SinhVien",
          MaSV: newSV.MaSV,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Đăng ký thành công",
      });
    } catch (err) {
      next(err);
    }
  },

  // --- LOGIN ---
  login: async (req, res, next) => {
    try {
      const { TenDangNhap, MatKhau } = req.body;

      if (!TenDangNhap || !MatKhau) {
        return res.status(400).json({
          success: false,
          message: "Thiếu tên đăng nhập hoặc mật khẩu",
        });
      }

      const user = await prisma.tAIKHOAN.findUnique({
        where: { TenDangNhap },
        include: {
          SINHVIEN: { include: { LOP: true } },
          GIANGVIEN: true,
        },
      });

      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "Tài khoản không tồn tại" });

      const isMatch = await bcrypt.compare(MatKhau, user.MatKhau);
      if (!isMatch)
        return res
          .status(401)
          .json({ success: false, message: "Mật khẩu sai" });

      // ✅ Tạo token
      const accessToken = jwt.sign(
        {
          TenDangNhap: user.TenDangNhap,
          LoaiTaiKhoan: user.LoaiTaiKhoan,
          MaSV: user.MaSV,
          MaGV: user.MaGV,
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        { TenDangNhap: user.TenDangNhap },
        REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );

      return res.json({
        success: true,
        message: "Đăng nhập thành công",
        accessToken,
        refreshToken,
        data: {
          TenDangNhap: user.TenDangNhap,
          LoaiTaiKhoan: user.LoaiTaiKhoan,
          SinhVien: user.SINHVIEN
            ? {
                MaSV: user.SINHVIEN.MaSV,
                HoTen: user.SINHVIEN.HoTen,
                MaLop: user.SINHVIEN.MaLop,
                TenLop: user.SINHVIEN.LOP?.TenLop || null,
              }
            : null,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};

export default authController;
