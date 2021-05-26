export const noteReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case "ADD_NOTE":
      return [action.payload, ...state];

    case "REMOVE_NOTE":
      newState = [...state];
      newState.splice(action.payload, 1);
      return [...newState];

    default:
      return state;
  }
};
