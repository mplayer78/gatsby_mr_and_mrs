import React, { useReducer } from "react"
import GameContext from "../stateHandling/gameContext"
import Setup from "../components/setup"
import { initialSetupState } from "../stateHandling/initialState"
import { gameReducer } from "../stateHandling/reducer"
import Layout from "../components/layout"

const SetupPage = ({ data }) => {
  const [state, dispatch] = useReducer(gameReducer, initialSetupState)
  return (
    <Layout>
      <GameContext.Provider value={{ state, dispatch }}>
        <Setup {...data} />
      </GameContext.Provider>
    </Layout>
  )
}

export const getQuestionIds = graphql`
  query {
    game {
      allQuestions {
        data {
          _id
        }
      }
    }
  }
`

export default SetupPage
