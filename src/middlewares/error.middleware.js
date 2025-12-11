// src/middlewares/error.middleware.js
const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERROR:", err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    message,
  });
};

export default errorHandler;
