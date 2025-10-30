import express from "express";
import giangvienController from "../controllers/giangvien.controller.js";

const giangvienRouter = express.Router();

giangvienRouter.get("/", giangvienController.findAll);
giangvienRouter.get("/:id", giangvienController.findOne);

export default giangvienRouter;
