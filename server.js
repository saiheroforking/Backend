
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully!"
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Sai" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
  ]);
});

export default app;
