import { Router } from "express";
import monhocController from "../controllers/monhoc.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", verifyToken, monhocController.getAll);
router.get("/:id", verifyToken, monhocController.getById);
router.post("/", verifyToken, monhocController.create);
router.put("/:id", verifyToken, monhocController.update);
router.delete("/:id", verifyToken, monhocController.remove);
export default router;
