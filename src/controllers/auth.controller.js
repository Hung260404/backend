import authService from "../services/auth.service.js";

const authController = {
  // --- Đăng ký ---
  register: async (req, res) => {
    try {
      const result = await authService.register(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  // --- Đăng nhập ---
  login: async (req, res) => {
    try {
      const { TenDangNhap, MatKhau } = req.body;
      const result = await authService.login(TenDangNhap, MatKhau);
      res.json({ success: true, data: result });
    } catch (err) {
      res.status(401).json({ success: false, message: err.message });
    }
  },

  // --- Làm mới token ---
  refreshToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      const result = await authService.refreshAccessToken(refreshToken);
      res.json({ success: true, data: result });
    } catch (err) {
      res.status(403).json({ success: false, message: err.message });
    }
  },
};

export default authController;
