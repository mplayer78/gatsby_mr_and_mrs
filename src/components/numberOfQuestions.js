import React, { useContext } from "react"
import GameContext from "../stateHandling/gameContext"
import styled from "styled-components"
import StyledSlider from "../assets/styledSlider"
import StyledInput from "../assets/sliderDisplayInput"

const SliderDisplayInput = styled.input.attrs({
  type: "input",
})`
  background: solid 2px ${props => props.theme.grey_100};
  box-shadow: inset 0px 2px 0px ${props => props.theme.grey_900},
    inset 0px 2px 5px ${props => props.theme.grey_900};
  border: 2px solid ${props => props.theme.grey_600};
  border-radius: 300px;
  text-align: center;
  font-size: 1.7rem;
`

const NumberOfQuestions = ({ noOfQuestions }) => {
  const { state, dispatch } = useContext(GameContext)
  console.log("ctx", state)
  return (
    <form
      action="post"
      onSubmit={e => {
        e.preventDefault()
        // dispatch({ type: "startGame" })
      }}
    >
      <label>
        Number of Questions:
        <div
          className="sliderContainer"
          style={{ display: "grid", gridTemplateColumns: "1fr 3rem" }}
        >
          <StyledSlider
            min={1}
            max={noOfQuestions}
            value={state.noOfQuestions}
            onChange={e => {
              e.preventDefault()
              dispatch({
                type: "setNoQuestions",
                noOfQuestions: e.target.value,
              })
            }}
          />
          <StyledInput
            type="text"
            value={state.noOfQuestions}
            onChange={e => {
              e.preventDefault()
              dispatch({
                type: "setNoQuestions",
                noOfQuestions: e.target.value,
              })
            }}
          />
        </div>
      </label>
    </form>
  )
}

export default NumberOfQuestions
