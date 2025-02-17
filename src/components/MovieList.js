import React from "react";

import MovieListItem from "./MovieListItem";
import MovieListFooter from "./MovieListFooter";
import { useSelector } from "react-redux";
import { store } from "../store/store";

const MovieList = (props) => {
  const filmListe = useSelector((store) => store.liste);
  console.log("Bu obje MovieList.js ten geliyor:", filmListe);
  return (
    <div className="flex-1">
      <div className="overflow-hidden bg-white rounded-md shadow mb-4 sm:min-h-[400px]">
        <table className="table-auto border-collapse text-left w-full">
          <thead>
            <tr className="border-zinc-200 border-b">
              <th className="pl-4">İsim</th>
              <th>Yönetmen</th>
              <th>Tür</th>

              <th>Metascore</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {filmListe.movies.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      </div>

      <MovieListFooter totalMovies={filmListe.movies.length} />
    </div>
  );
};

export default MovieList;
