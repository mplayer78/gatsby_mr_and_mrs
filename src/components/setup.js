import React, { useContext } from "react"
import { gql } from "apollo-boost"
import { useQuery, useMutation } from "react-apollo"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PlayerName from "../components/playerName"
import NumberOfQuestions from "../components/numberOfQuestions"
import GameContext from "../stateHandling/gameContext"
import LinkButton from "../assets/linkButton"

const Setup = ({
  game: {
    allQuestions: { data: questions },
  },
}) => {
  const [newGame, { data, loading, error }] = useMutation(NEW_GAME)
  return (
    <div>
      <SEO title="NewGame" />
      <h1>New Game</h1>
      <PlayerName player={"player1"} />
      <PlayerName player={"player2"} />
      <NumberOfQuestions noOfQuestions={questions.length} />
      <LinkButton
        to="/gamePage"
        onClick={e =>
          newGame({
            variables: {
              data: {
                players: ["Matt", "Emily"],
                questions: {
                  connect: ["257193127027147283", "257193394387812883"],
                },
              },
            },
          })
        }
      >
        Play
      </LinkButton>
    </div>
  )
}

const NEW_GAME = gql`
  mutation newGame($data: GameInput!) {
    createQuestion(data: $data) {
      _id
      questions {
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
  }
`

export default Setup
