// server.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import errorHandler from "./src/middlewares/error.middleware.js";
import rootRouter from "./src/routers/root.router.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api", rootRouter);

// GLOBAL ERROR HANDLER
app.use(errorHandler);

const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
