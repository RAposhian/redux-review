const initialState = {
   title: '',
   poster: '',
   rating: null,
   movies: []
}

const SET_MOVIE_INFO = 'SET_MOVIES_INFO';
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST';

export const updateMovieList = movieObj => {
   return {
      type: UPDATE_MOVIE_LIST,
      payload: movieObj
   }
}

export const setMovieInfo = (title, poster, rating) => {
   return{
      type: SET_MOVIE_INFO,
      payload: {title, poster, rating}
   }
}

export default function (state = initialState, action) {
   switch(action.type){
      case UPDATE_MOVIE_LIST:
         return {
            ...state,
            title: '',
            poster: '',
            rating: null,
            movies: [...state.movies, action.payload],
          }
      case SET_MOVIE_INFO:
         return {...state,  ...action.payload}
      default:
         return state;
   }
}