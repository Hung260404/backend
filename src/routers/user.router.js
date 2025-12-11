// src/routers/user.router.js
import express from "express";
import {
  getMe,
  updateProfile,
  uploadKYC,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", authMiddleware, getMe);
router.put("/profile", authMiddleware, updateProfile);
router.post("/kyc", authMiddleware, uploadKYC);

export default router;
