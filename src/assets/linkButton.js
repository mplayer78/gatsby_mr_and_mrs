import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkButton = styled(Link)`
  padding: 1rem;
  font-size: 2rem;
  font-family: "K2D", sans-serif;
  border-radius: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  border: solid 2px ${props => props.theme.grey_600};
  color: ${props => props.theme.grey_900};
  background-color: ${props => props.theme.sec_col_100};
  box-sizing: border-box;
  display: block;
  margin: 4rem;
  max-width: 400px;
  -webkit-box-shadow: 5px 5px 0px ${props => props.theme.grey_900};
  -moz-box-shadow: 5px 5px 0px ${props => props.theme.grey_900};
  box-shadow: 0px 2px 0px ${props => props.theme.grey_900},
    0px 2px 5px ${props => props.theme.grey_900};
  &:hover {
    background-color: ${props => props.theme.sec_col_600};
  }
  &:active {
    box-shadow: 0px 0px 5px ${props => props.theme.grey_900};
    transform: translateY(5px);
  }
`

export default LinkButton
