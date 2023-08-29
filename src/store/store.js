import { legacy_createStore as createStore } from "redux";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

function reducer() {
  return {
    liste: initialState,
    deneme: "Bu bir deneme",
  };
}

export const store = createStore(reducer);
