import React, { useContext } from "react"

import SEO from "../components/seo"
import PlayerName from "../components/playerName"
import NumberOfQuestions from "../components/numberOfQuestions"
import GameContext from "../stateHandling/gameContext"

const Setup = props => {
  const { state, dispatch } = useContext(GameContext)
  return (
    <div>
      <SEO title="NewGame" />
      <h1>New Game</h1>
      <PlayerName player={"player1"} />
      <PlayerName player={"player2"} />
      {/* questionCount should be on context */}
      <NumberOfQuestions />
      <button onClick={e => dispatch({ type: "startGame" })}>Go!</button>
    </div>
  )
}

export default Setup
