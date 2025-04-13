import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" })); // this will extract the body portion of an incoming request and parse it into a JSON object
app.use(cookieParser()); // this will parse the cookies in the incoming request and make them available in req.cookies
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port  ${PORT}`);
  connectDB();
});
