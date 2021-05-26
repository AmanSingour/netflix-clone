export const userReducer = (
  state = { loggedIn: false, user: null },
  action
) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };

    case "USER_LOGOUT":
      return {
        ...state,
        user: null,
        loggedIn: false,
      };

    default:
      return state;
  }
};
