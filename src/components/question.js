import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"

const Question = () => {
  const { state, dispatch } = useContext(GameContext)
  return (
    <div>
      <h2>Hey from question</h2>
      <span>
        {["him", "her"].map(v => (
          <button key={v} onClick={e => console.log(e.target.value)}>
            {v}
          </button>
        ))}
      </span>
    </div>
  )
}

export default Question
