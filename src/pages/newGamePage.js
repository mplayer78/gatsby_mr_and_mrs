import React, { useState, useReducer, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Question from "../components/question"
import Setup from "../components/setup"
import GameContext from "../stateHandling/gameContext"
import { gameReducer } from "../stateHandling/reducer"
import { initialState } from "../stateHandling/initialState"
import AnswerSummary from "../components/answerSummary"

const SetupComponent = styled.div`
  display: ${({ visible }) => (visible ? "contents" : "none")};
`
export const query = graphql`
  {
    game {
      allQuestions {
        data {
          questionText
          options {
            data {
              optionText
            }
          }
        }
      }
    }
    allQuestionsJson {
      nodes {
        question
      }
    }
  }
`

const NewGamePage = props => {
  console.log("data", props)
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const [playing, setPlaying] = useState(false)
  // fetch all the questions from source then write them into state
  // useEffect(() => {
  //   dispatch({ type: "writeQuestionsToPage", questionCount })
  // }, [questionCount])

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Layout>
        <SetupComponent visible={state.setupVisible}>
          <Setup />
        </SetupComponent>
        {/* todo current player should be on context with differing themes */}
        <SetupComponent visible={state.gameVisible}>
          <Question />
        </SetupComponent>
        <SetupComponent visible={state.summaryVisible}>
          <AnswerSummary />
        </SetupComponent>
      </Layout>
    </GameContext.Provider>
  )
}

export default NewGamePage
