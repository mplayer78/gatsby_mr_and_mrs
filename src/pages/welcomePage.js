import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WelcomePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Mr & Mrs</h1>
    <button>
      <Link to="/newGamePage/">New Game</Link>
    </button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default WelcomePage
