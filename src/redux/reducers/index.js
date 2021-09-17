import { combineReducers } from "redux";

import { personReducer } from "./personReducer";
import { personsReducer } from "./personsReducer";
import { showPersonsReducer } from "./showPersonsReducer";

export const reducers = combineReducers({
  showPersons: showPersonsReducer,
  person: personReducer,
  persons: personsReducer,
});
