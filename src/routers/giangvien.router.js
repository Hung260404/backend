import { Router } from "express";
import giangvienController from "../controllers/giangvien.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", verifyToken, giangvienController.getAll);
router.get("/:id", verifyToken, giangvienController.getById);
router.post("/", verifyToken, giangvienController.create);
router.put("/:id", verifyToken, giangvienController.update);
router.delete("/:id", verifyToken, giangvienController.remove);
export default router;
