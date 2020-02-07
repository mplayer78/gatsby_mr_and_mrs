import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"

const SummaryQuestion = props => {
  const { state, dispatch } = useContext(GameContext)
  console.log("state", state)
  const currentQuestion = state.questions[state.questionNo - 1]
  console.log("currentQuestion", currentQuestion)
  if (currentQuestion) {
    return (
      <div className="summaryQuestion">
        <h2>Question {state.questionNo}</h2>
        <h2>The question was:</h2>
        <h2>{currentQuestion.question}</h2>
        <h2>He answered {currentQuestion.player1}</h2>
        <h2>She answered {currentQuestion.player2}</h2>
        <h2>
          That was a{" "}
          {currentQuestion.player1 === currentQuestion.player2
            ? "match"
            : "miss"}
        </h2>
        <button
          onClick={() => dispatch({ type: "decPage" })}
          disabled={state.questionNo < 2}
        >
          Prev
        </button>
        <button
          onClick={() => dispatch({ type: "incPage" })}
          disabled={state.questionNo > state.noOfQuestions - 1}
        >
          Next
        </button>
      </div>
    )
  }
  return <p>There may be troubles ahead...</p>
}

export default SummaryQuestion
