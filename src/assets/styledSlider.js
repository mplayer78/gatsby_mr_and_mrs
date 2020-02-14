import React from "react"
import styled from "styled-components"

const StyledSlider = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  /* width: 100%; */
  background: transparent;
  margin: 20px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &:-ms-track {
    width: 100%;
    cursor: pointer;
  }
  background: transparent;
  border-color: transparent;
  color: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.grey_600};
    background: ${props => props.theme.grey_100};
    cursor: pointer;
    margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    box-shadow: 0px 2px 0px ${props => props.theme.grey_900},
      0px 2px 5px ${props => props.theme.grey_900},
      inset 0px -2px 5px ${props => props.theme.grey_900};
  }
  &::-moz-range-thumb {
    box-shadow: 0px 2px 0px ${props => props.theme.grey_900},
      0px 2px 5px ${props => props.theme.grey_900};
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    box-shadow: inset 0px 2px 0px ${props => props.theme.grey_900},
      inset 0px 2px 5px ${props => props.theme.grey_900};
    background: solid 2px ${props => props.theme.grey_100};
    border-radius: 200px;
    border: 2px solid ${props => props.theme.grey_600};
    padding-left: -10px;
    padding-right: -10px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.grey_200};
  }

  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 0px 2px 0px ${props => props.theme.grey_900},
      0px 2px 5px ${props => props.theme.grey_900};
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
`

export default StyledSlider
