import React from "react"

import SEO from "../components/seo"
import PlayerName from "../components/playerName"
import NumberOfQuestions from "../components/numberOfQuestions"
import GameContext from "../stateHandling/gameContext"

const Setup = props => {
  return (
    <div>
      Hey from setup
      <SEO title="NewGame" />
      <h1>New Game</h1>
      <PlayerName player={1} />
      <PlayerName player={2} />
      {/* questionCount should be on context */}
      <NumberOfQuestions />
      <button onClick={e => console.log("props", props)}>Go!</button>
    </div>
  )
}

export default Setup
