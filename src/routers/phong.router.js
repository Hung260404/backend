import { Router } from "express";
import phongController from "../controllers/phong.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", verifyToken, phongController.getAll);
router.get("/:id", verifyToken, phongController.getById);
router.post("/", verifyToken, phongController.create);
router.put("/:id", verifyToken, phongController.update);
router.delete("/:id", verifyToken, phongController.remove);
export default router;
