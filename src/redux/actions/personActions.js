export const handleSetPerson = (event) => {
  return async (dispatch, getSate) => {
    const data = event.target.value;

    await dispatch({ type: "SET_PERSON", payload: data });
  };
};

export const handleClearPerson = () => {
  return async (dispatch, getSate) => {
    await dispatch({ type: "CLEAR_PERSON", payload: "" });
  };
};
