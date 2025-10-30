import express from "express";
import giangvienRouter from "../thoiKhoaBieu/src/routers/giangvien.router";

const app = express();

app.use(express.json());

app.use("/api/giangvien", giangvienRouter);

const PORT = 3069;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});
