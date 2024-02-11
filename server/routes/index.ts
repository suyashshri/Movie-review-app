import express from "express";
import movieRouter from "./movie";

const router = express.Router();

router.use("/movies", movieRouter);

// Handles any requests that don't match the ones above
router.get("*", (req, res) => {
  res.send("<h1>Wrong route!</h1>");
});

export default router;
