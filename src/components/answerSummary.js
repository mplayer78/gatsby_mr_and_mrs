import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"
import SummaryQuestion from "./summaryQuestion"

const AnswerSummary = props => {
  const { state, dispatch } = useContext(GameContext)
  const rightAnswerCount = state.questions.filter(v => v.player1 === v.player2)
    .length
  const rightAnswerPercent = Math.floor(
    (rightAnswerCount / state.noOfQuestions) * 100
  )

  return (
    <div className="answerSummary">
      <h1>
        You scored {rightAnswerCount} out of {state.noOfQuestions}
      </h1>
      <h2>
        A{" "}
        {rightAnswerPercent > 75
          ? "Brilliant"
          : rightAnswerPercent > 50
          ? "So-So"
          : "Rubbish"}{" "}
        {rightAnswerPercent}%
      </h2>
      <SummaryQuestion />
    </div>
  )
}

export default AnswerSummary
