import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import { useDispatch, useSelector } from "react-redux";
import { handleShowPersons } from "./redux/actions/showPersonsActions";

const App = () => {
  const showPersons = useSelector((state) => state.showPersons);
  const dispatch = useDispatch();

  let person = null;

  if (showPersons) {
    person = <Persons />;
  }

  return (
    <div className="rtl text-center">
      <Header
        appTitle="مدیریت کننده اشخاص"
      />

      <NewPerson />

      <Button
        onClick={() => dispatch(handleShowPersons())}
        variant={showPersons ? "info" : "danger"}
      >
        نمایش اشخاص
      </Button>

      {person}
    </div>
  );
};
export default App;
