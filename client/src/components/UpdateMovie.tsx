import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import MovieFinder from "../api/MovieFinder";

const UpdateMovie = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const response = await MovieFinder.get(`/${id}`);
      const movie = response.data.data;
      console.log(movie);

      setTitle(movie[0].title);
      setGenre(movie[0].genres);
      setRating(movie[0].imdb);
      setYear(movie[0].year);
    };
    fetchdata();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updatedMovie = await MovieFinder.put(`/${id}`, {
      title,
      genres: genre,
      imdb: Number(rating),
      year: Number(year),
    });
    navigate("/movie");
  };

  return (
    <div>
      <form className="flex flex-col mx-96">
        <div className="grid gap-6 my-4 md:grid-cols-1">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
            >
              Title
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
              Genre
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
              IMDB Rating
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
              Year
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
          className="my-8 ml-72 mr-72 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
