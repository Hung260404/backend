import { Router } from "express";
import tkbController from "../controllers/thoikhoabieu.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", tkbController.getAll);
router.get("/:id", tkbController.getById);
router.post("/", verifyToken, tkbController.create);
router.put("/:id", verifyToken, tkbController.update);
router.delete("/:id", verifyToken, tkbController.remove);
router.get("/class/:classId", tkbController.getByClass);
router.get("/student/:maSV", tkbController.getByStudent);
export default router;
