import React, { useState } from "react";

const Multiple = () => {
  const questions = [
    {
      question: "select the mumber divisible by 2?",
      options: [2, 3, 4, 5, 6, 7],
      answers: [2, 4, 6],
    },
  ];

  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (option) => {
    const updatedAnswers = [...userAnswers];
    if (updatedAnswers.includes(option)) {
      updatedAnswers.splice(updatedAnswers.indexOf(option), 1);
    } else {
      updatedAnswers.push(option);
    }
    setUserAnswers(updatedAnswers);
  };
  const handleCheckQuestion = () => {
    console.log("handle checked");
    userAnswers.map((ans,index)=>{
      if (questions[0].answers.includes(ans)) {
        alert("Right Answer");
        console.log(ans)
      }
      else{
        alert("Wrong answer")
      }
    })
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h1>Answer</h1>
        </div>
      ) : (
        <div>
          <h1>Multiple choice question</h1>
          <p>{questions[0].question}</p>
          <ul>
            {questions[0].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={userAnswers.includes(option) ? "selected" : ""}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckQuestion}
            disabled={userAnswers.length === 0}
          >
            check
          </button>
        </div>
      )}
    </div>
  );
};

export default Multiple;
