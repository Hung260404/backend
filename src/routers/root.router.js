import { Router } from "express";
import authRouter from "./auth.router.js";
import giangvienRouter from "./giangvien.router.js";
import lopRouter from "./lop.router.js";
import monhocRouter from "./monhoc.router.js";
import phongRouter from "./phong.router.js";
import sinhvienRouter from "./sinhvien.router.js";
import thoikhoabieuRouter from "./thoikhoabieu.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/giangvien", giangvienRouter);
router.use("/sinhvien", sinhvienRouter);
router.use("/lop", lopRouter);
router.use("/monhoc", monhocRouter);
router.use("/phong", phongRouter);
router.use("/thoikhoabieu", thoikhoabieuRouter);

export default router;
