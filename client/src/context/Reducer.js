export const initialState = {
  building: {
    name: "test",
  },
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BUILDING":
      return {
        ...state,
        building: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
