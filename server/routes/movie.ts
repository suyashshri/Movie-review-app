import express, { Request, Response } from "express";
import db from "../db/index";

const router = express.Router();

//Get all movie
router.get("/", async (req: Request, res: Response) => {
  try {
    const results = await db.query("SELECT * FROM movies");
    res.status(200).json({
      message: "Movies retrieved successfully!",
      length: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a particular movie
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const results = await db.query("SELECT * FROM movies where id=$1", [id]);
    res.status(200).json({
      message: "Movie retrieved Successfully!",
      data: results.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//Add movie
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, genres, imdb, year } = req.body;
    const results = await db.query(
      "INSERT INTO movies (title,genres,imdb,year) VALUES ($1,$2,$3,$4) returning *",
      [title, genres, imdb, year]
    );
    res.status(200).json({
      message: "Movie Inserted Successfully!",
    });
  } catch (err) {
    console.log(err);
  }
});

//Update movie
router.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
});

//delete movie
router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
});

export default router;
