export const showPersonsReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PERSONS":
      return action.payload;

    default:
      return state;
  }
};
