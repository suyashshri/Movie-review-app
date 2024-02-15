import express from "express";
import mainRouter from "../routes/index";
import cors from "cors";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
// parse request body as JSON
app.use(express.json());
app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
