import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json()); // this will extract the body portion of an incoming request and parse it into a JSON object

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
  connectDB();
});
