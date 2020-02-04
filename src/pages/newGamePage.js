import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayerName from "../components/playerName"
import NumberOfQuestions from "../components/numberOfQuestions"

const SetupComponent = styled.div`
  display: ${({ visible }) => (visible ? "contents" : "none")};
`

const NewGamePage = () => {
  const [player, setPlayer] = useState("player1")
  const [gameOn, setGameOn] = useState(false)
  const [setupVisible, setSetupVisible] = useState(true)
  const questionCount = useStaticQuery(graphql`
    query {
      allQuestionsJson {
        nodes {
          id
        }
      }
    }
  `).allQuestionsJson.nodes.map(val => val.id)

  const handleGo = () => setSetupVisible(!setupVisible)

  console.log(questionCount)
  return (
    <Layout>
      <SetupComponent visible={setupVisible}>
        <SEO title="NewGame" />
        <h1>New Game</h1>
        <PlayerName player={1} />
        <PlayerName player={2} />
        <NumberOfQuestions
          questionCount={questionCount.length}
          handleSubmit={handleGo}
        />
        <button onClick={() => handleGo()}>Go!</button>
      </SetupComponent>
      <SetupComponent visible={!setupVisible}>
        Game On
        <button onClick={() => handleGo()}>Back to Setup</button>
      </SetupComponent>
    </Layout>
  )
}

export default NewGamePage
