import authService from "../services/auth.service.js";

const authController = {
  register: async (req, res) => {
    try {
      const result = await authService.register(req.body);
      res
        .status(201)
        .json({ success: true, message: "Đăng ký thành công", data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { TenDangNhap, MatKhau } = req.body;

      const result = await authService.login(TenDangNhap, MatKhau);
      if (!result) {
        return res
          .status(401)
          .json({ success: false, message: "Tên đăng nhập hoặc mật khẩu sai" });
      }

      res.json({
        success: true,
        message: "Đăng nhập thành công",
        data: result,
      });
    } catch (err) {
      res.status(401).json({ success: false, message: err.message });
    }
  },

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
