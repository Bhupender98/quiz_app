import React from "react";
import QuizApp from "./Components/Quiz";
import Multiple from "./Components/Multiple";
import Sorting from "./Components/Sorting";
import FreeChoiceQue from "./Components/FreeChoiceQue";

const App = () => {
  return (
    <div>
      <QuizApp />
      <Multiple />
      <Sorting />
      <FreeChoiceQue />
    </div>
  );
};

export default App;
