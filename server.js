
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://vercel-project-theta-seven.vercel.app"
  ]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Sai" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
  ]);
});

export default app;
