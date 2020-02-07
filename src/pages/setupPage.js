import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"

const SetupPage = props => {
  const { state, dispatch } = useContext(GameContext)
  console.log("state", state)
  return <div className="setup">Hi from Setup Page</div>
}

export default SetupPage
