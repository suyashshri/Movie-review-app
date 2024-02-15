import { useContext, useState } from "react";
import MovieFinder from "../api/MovieFinder";
import { MoviesContext } from "../context/MovieContext";

const AddMovie = () => {
  const { addMovies } = useContext(MoviesContext);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await MovieFinder.post("/", {
        title,
        genres: genre,
        imdb: Number(rating),
        year: Number(year),
      });
      addMovies(response.data.data);
      setTitle("");
      setGenre("");
      setRating("");
      setYear("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="flex flex-col justify-around items-center">
        <div className="grid gap-6 my-4 md:grid-cols-4">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
            >
              Movie Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Movie Genre
            </label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              id="genre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Genre"
              required
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Movie IMDB Rating
            </label>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rating"
              required
            />
          </div>
          <div>
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Release Year
            </label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Year"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="my-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
