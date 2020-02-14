import React, { useContext, useState } from "react"
import GameContext from "../stateHandling/gameContext"

const PlayerName = ({ player }) => {
  console.log("props", player)
  // const { state, dispatch } = useContext(GameContext)
  const [name, setName] = useState("")
  const { state, dispatch } = useContext(GameContext)
  console.log("state", state.players[player])
  return (
    <form
      action="POST"
      // onSubmit={e => {
      //   e.preventDefault()
      //   dispatch({ type: "setPlayerName", player: props.player, name })
      // }}
    >
      {/* //todo remove hardcoded names */}
      <h4>{player}</h4>
      <label>
        Name:
        <input
          type="text"
          value={state.players[player]}
          onChange={e => {
            e.preventDefault()
            dispatch({ type: "setPlayerName", player, name: e.target.value })
          }}
          // onBlur={e =>
          //   dispatch({ type: "setPlayerName", player: props.player, name })
          // }
        />
      </label>
      <button
        onClick={() => {
          dispatch({ type: "setPlayerName", player })
        }}
      >
        Clear
      </button>
    </form>
  )
}

export default PlayerName
