import React from "react"

import SEO from "../components/seo"
import PlayerName from "../components/playerName"
import NumberOfQuestions from "../components/numberOfQuestions"

const Setup = props => {
  console.log("props", props)
  return (
    <div className="setup">
      <SEO title="NewGame" />
      <h1>New Game</h1>
      <PlayerName player={1} />
      <PlayerName player={2} />
      {/* questionCount should be on context */}
      <NumberOfQuestions
        questionCount={props.questionCount.length}
        handleSubmit={props.handleGo}
        setNoOfQuestions={props.setNoOfQuestions}
      />
      <button onClick={() => props.handleGo()}>Go!</button>
    </div>
  )
}

export default Setup
