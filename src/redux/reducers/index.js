import { TRASH_THIS_FAV } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
};
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    }
    case TRASH_THIS_FAV: {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (company) => company !== action.payload
          ),
        },
      };
    }
    default:
      return state;
  }
};
export default firstReducer;
