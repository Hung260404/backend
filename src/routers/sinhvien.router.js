import { Router } from "express";
import sinhvienController from "../controllers/sinhvien.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", verifyToken, sinhvienController.getAll);
router.get("/:id", verifyToken, sinhvienController.getById);
router.post("/", verifyToken, sinhvienController.create);
router.put("/:id", verifyToken, sinhvienController.update);
router.delete("/:id", verifyToken, sinhvienController.remove);
router.get("/class/:classId", verifyToken, sinhvienController.getByClass); // danh sách SV theo lớp
export default router;
