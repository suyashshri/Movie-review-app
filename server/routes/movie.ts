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
      data: results.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
});

//Update movie
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { title, genres, imdb, year } = req.body;
    const id = req.params.id;
    const results = await db.query(
      "UPDATE movies SET title =$1, genres = $2, imdb= $3, year = $4 where id = $5 returning *",
      [title, genres, imdb, year, id]
    );
    res.status(200).json({
      message: "Movie Updated Successfully!",
      data: results.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//delete movie
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const results = await db.query(
      "DELETE from movies where id = $1 returning *",
      [id]
    );
    res.status(200).json({
      message: "Movie Deleted Successfully!",
    });
  } catch (err) {
    console.log(err);
  }
});

export default router;
