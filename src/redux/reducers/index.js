const initialState = {
  favourites: {
    content: [],
  },
};
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_ FAVOURITES": {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    }
    default:
      return state;
  }
};
export default firstReducer;
