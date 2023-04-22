import React, { useState } from "react";

const FreeChoiceQue = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "5 + 4",
    },
  ]);
  const [userAnswer, setUserAnswer] = useState("");

  const handleCheckAns = () => {
    let num = eval(questions[0].question);
    if(num == userAnswer){
       alert("correct answer")
    }
    else{
        alert("wrong answer")
    }
  };
  const handleChangeAnswer = (e) => {
    // console.log(e.target.value);
    setUserAnswer(e.target.value)
  };
  return (
    <div>
      <h3>Free Choice</h3>
      <h1>{questions[0].question} = ?</h1>
      <input
        type="number"
        value={userAnswer}
        onChange={handleChangeAnswer}
      />
      <button onClick={handleCheckAns}>Check Ans</button>
    </div>
  );
};

export default FreeChoiceQue;
