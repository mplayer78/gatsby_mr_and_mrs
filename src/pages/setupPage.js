import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"

const SetupPage = props => {
  console.log("GameContext", GameContext)
  const setupPageContext = useContext(GameContext)
  console.log("setupPageContext: ", setupPageContext)
  return <div className="setup">Hi from Setup Page</div>
}

export default SetupPage
