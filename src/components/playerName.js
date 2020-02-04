import React from "react"

const PlayerName = props => {
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
