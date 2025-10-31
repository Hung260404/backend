import { Router } from "express";
import tkbController from "../controllers/thoikhoabieu.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", verifyToken, tkbController.getAll);
router.get("/:id", verifyToken, tkbController.getById);
router.post("/", verifyToken, tkbController.create);
router.put("/:id", verifyToken, tkbController.update);
router.delete("/:id", verifyToken, tkbController.remove);
router.get("/class/:classId", verifyToken, tkbController.getByClass);
router.get("/student/:maSV", verifyToken, tkbController.getByStudent);
export default router;
