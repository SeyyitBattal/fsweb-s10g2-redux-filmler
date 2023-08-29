import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";

// COMMENTLİ KISIM store.JS TE
// import movies from "../data.js";
// const initialState = {
//   movies: movies,
//   appTitle: "IMDB Movie Database",
// };

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: action.payload };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
