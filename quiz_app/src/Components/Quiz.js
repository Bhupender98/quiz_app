import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "Choose the correct option?",
      options: ["True", "False"],
      answer: "True",
    },
  ];

  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const handleAnswerSelection = (option) => {
    setUserAnswer(option);
  };

  const handleCheckAns = () => {
    if (userAnswer == "") {
      alert("select an option");
    } else if (userAnswer == questions[0].answer) {
      alert("right answer");
    } else {
      alert("Wrong Answer");
    }
  };
  return (
    <div>
      {showResult ? (
        <div>
          <h1>Quiz Result</h1>
        </div>
      ) : (
        <div>
          <h1>Quiz</h1>
          <p>{questions[0].question}</p>
          <ul>
            {questions[0].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerSelection(option)}>
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleCheckAns}>Check</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
