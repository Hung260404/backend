// src/routers/auth.router.js
import express from "express";
import {
  changePassword,
  forgotPassword,
  login,
  logout,
  oauth,
  refreshToken,
  register,
  resetPassword,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/oauth", oauth);
router.post("/refresh-token", refreshToken);
router.post("/logout", authMiddleware, logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/change-password", authMiddleware, changePassword);

export default router;
