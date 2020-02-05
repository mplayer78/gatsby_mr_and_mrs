import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Question from "../components/question"
import shuffleAndSelect from "../utils/shuffleAndSelect"
import Setup from "../components/setup"

const SetupComponent = styled.div`
  display: ${({ visible }) => (visible ? "contents" : "none")};
`

const NewGamePage = () => {
  const [player, setPlayer] = useState("player1")
  const [gameOn, setGameOn] = useState(false)
  const [questionNo, setQuestionNo] = useState(1)
  const [setupVisible, setSetupVisible] = useState(true)
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
  const [noOfQuestions, setNoOfQuestions] = useState(questionCount.length)
  const [questions, setQuestions] = useState([])

  const handleGo = () => {
    setSetupVisible(!setupVisible)
    setQuestions(shuffleAndSelect(noOfQuestions, questionCount))
  }

  // todo create a useReducer & useContext combo
  return (
    <Layout>
      <SetupComponent visible={setupVisible}>
        <Setup
          questionCount={[...questionCount]}
          handleGo={handleGo}
          setNoOfQuestions={setNoOfQuestions}
        />
      </SetupComponent>
      {/* todo game state should be on context */}
      {/* todo current player should be on context with differing themes */}
      <SetupComponent visible={!setupVisible}>
        <Question current={questions[questionNo - 1]} />
        <button onClick={() => handleGo()}>Back to Setup</button>
      </SetupComponent>
    </Layout>
  )
}

export default NewGamePage
