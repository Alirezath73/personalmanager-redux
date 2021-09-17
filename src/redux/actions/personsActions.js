import { handleClearPerson } from "./personActions";

export const handleCreatePerson = () => {
  return async (dispatch, getState) => {
    const persons = [...getState().persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getState().person,
    };

    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);

      await dispatch(handleClearPerson());
      await dispatch({ type: "CREATE_PERSON", payload: persons });
    }
  };
};

export const handleDeletePerson = (id) => {
  return async (dispatch, getState) => {
    const persons = [...getState().persons];
    const filteredPersons = persons.filter((p) => p.id !== id);

    await dispatch({ type: "DELETE_PERSON", payload: filteredPersons });
  };
};

export const handleUpdatePerson = (id, event) => {
  return async (dispatch, getState) => {
    const allPersons = [...getState().persons];

    const personIndex = allPersons.findIndex((p) => p.id === id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;

    const persons = allPersons;

    persons[personIndex] = person;

    await dispatch({ type: "UPDATE_PERSON", payload: persons });
  };
};
