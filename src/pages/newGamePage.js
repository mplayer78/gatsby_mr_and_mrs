import React, { useState, useReducer, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Question from "../components/question"
import Setup from "../components/setup"
import GameContext from "../stateHandling/gameContext"
import { gameReducer } from "../stateHandling/reducer"
import { initialState } from "../stateHandling/initialState"

const SetupComponent = styled.div`
  display: ${({ visible }) => (visible ? "contents" : "none")};
`

const NewGamePage = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const questionCount = useStaticQuery(graphql`
    query {
      allQuestionsJson {
        nodes {
          id
          question
          options
        }
      }
    }
  `).allQuestionsJson.nodes
  // fetch all the questions from source then write them into state
  useEffect(() => {
    dispatch({ type: "writeQuestionsToPage", questionCount })
  }, [questionCount])

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Layout>
        <SetupComponent visible={state.setupVisible}>
          Hello from setup component
          <Setup />
        </SetupComponent>
        {/* todo current player should be on context with differing themes */}
        <SetupComponent visible={state.gameVisible}>
          <Question />
          {/* <button onClick={() => handleGo()}>Back to Setup</button> */}
        </SetupComponent>
      </Layout>
    </GameContext.Provider>
  )
}

export default NewGamePage
