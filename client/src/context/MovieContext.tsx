import React, { createContext, useState } from "react";

export interface IMovie {
  id: number;
  title: string;
  genres: string;
  imdb: string;
  year: number;
}

interface MoviesContext {
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  addMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

export const MoviesContext = createContext<MoviesContext>({
  movies: [{ id: 0, title: "", genres: "", imdb: "", year: 0 }],
  setMovies: () => {},
  addMovies: () => {},
});

export const MoviesContextProvider = (props: any) => {
  const [movies, setMovies] = useState([
    { id: 0, title: "", genres: "", imdb: "", year: 0 },
  ]);

  const addMovies = (movie: any) => {
    setMovies([...movies, movie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovies, addMovies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
