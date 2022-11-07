const initialState = {
  user: {},
  established: true, //change to false when we add google
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "auth/setUser":
      // exteremely explicit
      const newState = {
        user: {
          name: payload.name,
          surname: payload.surname,
        },
        authenticated: true,
        established: state.established,
      };

      //   const { name, surname } = payload;
      //   return {
      //     ...state,
      //     user: {
      //       name,
      //       surname,
      //     },
      //     authenticated: true,
      //   };
      return newState;
    default:
      return state;
  }
};
