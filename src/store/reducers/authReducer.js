const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    id: "",
    name: "",
  },
  established: true, //change to false when we add google
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "auth/setUser":
      // extremely explicit
      const newState = {
        user: payload,
        authenticated: true,
        established: state.established,
      };

      return newState;
    case "auth/unsetUser":
      return {
        // warning shallow copy
        ...initialState,
      };
    default:
      return state;
  }
};
