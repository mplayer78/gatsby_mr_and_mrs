import React, { useContext, useState } from "react"
import GameContext from "../stateHandling/gameContext"

const PlayerName = props => {
  const { state, dispatch } = useContext(GameContext)
  const [name, setName] = useState("")
  return (
    <form
      action="POST"
      onSubmit={e => {
        e.preventDefault()
        dispatch({ type: "setPlayerName", player: props.player, name })
      }}
    >
      {/* //todo remove hardcoded names */}
      <h4>{props.player}</h4>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => {
            e.preventDefault()
            setName(e.target.value)
          }}
          onBlur={e =>
            dispatch({ type: "setPlayerName", player: props.player, name })
          }
        />
      </label>
      <button
        onClick={() => {
          setName("")
          dispatch({ type: "setPlayerName", player: props.player, name: "" })
        }}
      >
        Clear
      </button>
    </form>
  )
}

export default PlayerName
