import React from "react"
import styled from "styled-components"

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
export default SliderDisplayInput
