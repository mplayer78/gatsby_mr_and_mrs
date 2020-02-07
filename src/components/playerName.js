import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"

const PlayerName = props => {
  const { state, dispatch } = useContext(GameContext)
  return (
    <form action="POST">
      <h4>Player {props.player}</h4>
      <label>
        Name:
        <input type="text" />
      </label>
      <button type="submit">Done</button>
    </form>
  )
}

export default PlayerName
