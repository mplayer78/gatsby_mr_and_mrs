/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"
import GameContext from "../stateHandling/gameContext"
import { theme } from "../layouts/themes"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.grey_100};
    color: ${props => props.theme.grey_900};
    font-family: "K2D", sans-serif;
  }
`

const Layout = ({ children }) => {
  console.log("GameContext", GameContext)
  const context = useContext(GameContext)

  console.log("context", context)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            margin: `auto auto`,
            maxWidth: 960,
            height: `100vh`,
            padding: `0 1.0875rem 1.45rem`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <main
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </main>
          <footer></footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
