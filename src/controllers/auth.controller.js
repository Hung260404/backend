import bcrypt from "bcryptjs";
import prisma from "../common/prisma/init.prisma.js";

// Hàm kiểm tra giá trị giới tính hợp lệ
function formatGioiTinh(value) {
  if (!value) return null;
  value = value.toLowerCase();
  if (value === "nam") return "Nam";
  if (value === "nữ" || value === "nu") return "N_";
  return null;
}

const authController = {
  // --- REGISTER ---
  register: async (req, res, next) => {
    try {
      const { TenDangNhap, MatKhau, HoTen, GioiTinh, NgaySinh, DiaChi, MaLop } =
        req.body;

      // Validate thông tin
      if (!TenDangNhap || !MatKhau || !HoTen || !MaLop) {
        return res
          .status(400)
          .json({ success: false, message: "Thiếu thông tin đăng ký" });
      }

      // Kiểm tra xem TenDangNhap đã tồn tại chưa
      const exists = await prisma.tAIKHOAN.findUnique({
        where: { TenDangNhap },
      });
      if (exists) {
        return res
          .status(400)
          .json({ success: false, message: "Tên đăng nhập đã tồn tại" });
      }

      // Hash mật khẩu
      const hashedPassword = await bcrypt.hash(MatKhau, 10);

      // Tạo sinh viên
      const newSV = await prisma.sINHVIEN.create({
        data: {
          MaSV: TenDangNhap, // Dùng TenDangNhap làm MaSV
          HoTen,
          GioiTinh: formatGioiTinh(GioiTinh),
          NgaySinh: NgaySinh ? new Date(NgaySinh) : null,
          DiaChi,
          MaLop,
        },
      });

      // Tạo tài khoản
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
        data: {
          TenDangNhap,
          MatKhau,
          HoTen,
          MaSV: newSV.MaSV,
        },
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

      // Lấy tài khoản cùng thông tin sinh viên + lớp
      const user = await prisma.tAIKHOAN.findUnique({
        where: { TenDangNhap },
        include: {
          SINHVIEN: {
            include: {
              LOP: true, // join bảng lớp
            },
          },
          GIANGVIEN: true, // nếu cần
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

      // Trả dữ liệu kèm thông tin lớp
      return res.json({
        success: true,
        data: {
          TenDangNhap: user.TenDangNhap,
          LoaiTaiKhoan: user.LoaiTaiKhoan,
          MaSV: user.MaSV,
          MaGV: user.MaGV,
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
