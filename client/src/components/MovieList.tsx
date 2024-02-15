import { useContext, useEffect } from "react";
import MovieFinder from "../api/MovieFinder";
import { MoviesContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

// 92e237d4ee

const MovieList = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  let navigate = useNavigate();

  useEffect(() => {
    try {
      const getMovies = async () => {
        const response = await MovieFinder.get("/");
        const movies = response.data;
        setMovies(movies.data);
      };
      getMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async (id: Number) => {
    try {
      await MovieFinder.delete(`/${id}`);
      setMovies(
        movies.filter((movie) => {
          return movie.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleSortImdb = () => {
    try {
      const getMovies = async () => {
        const response = await MovieFinder.get("/sort/imdb");
        const movies = response.data;
        setMovies(movies.data);
      };
      getMovies();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSortYear = () => {
    try {
      const getMovies = async () => {
        const response = await MovieFinder.get("/sort/year");
        const movies = response.data;
        setMovies(movies.data);
      };
      getMovies();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id: Number) => {
    navigate(`/movie/${id}/update`);
  };

  return (
    <div className="mx-40 mt-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-teal-900 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Movie Title
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex gap-2 items-center">
                  <div>IMDB Rating</div>
                  <button onClick={handleSortImdb}>
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex gap-2 items-center">
                  <div>Year</div>
                  <button onClick={handleSortYear}>
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Reviews
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((movie) => {
                return (
                  <tr
                    className="dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-700"
                    key={movie.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {movie.title}
                    </th>
                    <td className="px-6 py-4">{movie.genres}</td>
                    <td className="px-6 py-4">{movie.imdb}</td>
                    <td className="px-6 py-4">{movie.year}</td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        onClick={() => handleEdit(movie.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        onClick={() => handleDelete(movie.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
