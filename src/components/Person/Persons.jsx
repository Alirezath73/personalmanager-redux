import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeletePerson,
  handleUpdatePerson,
} from "../../redux/actions/personsActions";
import Person from "./Person";

const Persons = () => {
  const persons = useSelector((state) => state.persons);

  const dispatch = useDispatch();

  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => dispatch(handleDeletePerson(person.id))}
          changed={(event) => dispatch(handleUpdatePerson(person.id, event))}
        />
      ))}
    </div>
  );
};

export default Persons;
