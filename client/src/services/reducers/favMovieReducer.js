export const favReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case "ADD_FAV":
      return [action.payload, ...state];

    case "GET_FAV":
      return [...action.payload];

    case "REMOVE_FAV":
      newState = state.filter((id) => id !== action.payload);
      return [...newState];

    default:
      return state;
  }
};
