export const handleShowPersons = () => {
  return async (dispatch, getState) => {
    const data = getState().showPersons;

    await dispatch({ type: "SHOW_PERSONS", payload: !data });
  };
};
