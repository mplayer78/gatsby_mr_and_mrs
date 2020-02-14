import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"
import Layout from "./layout"

const Question = props => (
  // const { state, dispatch } = useContext(GameContext)
  // const currentQuestion = state.questions[state.questionNo - 1]
  // if (currentQuestion) {
  //   return (
  //     <div>
  //       <h2>
  //         Question {state.questionNo} of {state.noOfQuestions}
  //       </h2>
  //       <h2>
  //         Question for :
  //         {state.players[state.player].length > 0
  //           ? state.players[state.player]
  //           : state.player}
  //       </h2>
  //       <h2>{currentQuestion.question}</h2>d
  //       <span>
  //         {currentQuestion.options.map(v => (
  //           <button
  //             key={v}
  //             onClick={e => dispatch({ type: "setAnswer", answer: v })}
  //           >
  //             {v}
  //           </button>
  //         ))}
  //       </span>
  //     </div>
  //   )
  // }
  <Layout>
    <p>There may be an issue...</p>
  </Layout>
)

export default Question
