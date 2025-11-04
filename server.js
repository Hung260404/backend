import cors from "cors"; // <- import cors
import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./src/middlewares/error.middleware.js";
import rootRouter from "./src/routers/root.router.js";

dotenv.config();
const app = express();

app.use(express.json());

// --- Thêm CORS để cho phép tất cả origin ---
app.use(
  cors({
    origin: "*", // <- cho phép tất cả frontend
    credentials: true, // nếu gửi cookie hoặc authorization header
  })
);
// --- CORS xong ---

// mount API
app.use("/api", rootRouter);

// global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
