import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"

const NumberOfQuestions = props => {
  const { state, dispatch } = useContext(GameContext)
  console.log("state", state)
  return (
    <form
      action="post"
      onSubmit={e => {
        e.preventDefault()
        // dispatch({ type: "startGame" })
      }}
    >
      <label>
        Number of Questions:
        <input
          type="range"
          min={1}
          max={state.allQuestions.length}
          value={state.noOfQuestions}
          onChange={e => {
            e.preventDefault()
            dispatch({ type: "setNoQuestions", noOfQuestions: e.target.value })
          }}
        />
        <input
          type="text"
          value={state.noOfQuestions}
          onChange={e => {
            e.preventDefault()
            dispatch({ type: "setNoQuestions", noOfQuestions: e.target.value })
          }}
        />
      </label>
    </form>
  )
}

export default NumberOfQuestions
