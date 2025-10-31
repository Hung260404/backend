import { Router } from "express";
import lopController from "../controllers/lop.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", verifyToken, lopController.getAll);
router.get("/:id", verifyToken, lopController.getById);
router.post("/", verifyToken, lopController.create);
router.put("/:id", verifyToken, lopController.update);
router.delete("/:id", verifyToken, lopController.remove);
export default router;
