import express from "express";
import articelRouter from "./article.router";

const rootRouter = express.Router();
rootRouter.use("/article", articelRouter);

export default rootRouter;
