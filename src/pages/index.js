import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { gql } from "apollo-boost"
import styled from "styled-components"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { useQuery, useMutation } from "react-apollo"
import TattooImage from "../components/tattooImage"
import LinkButton from "../assets/linkButton"

// data is on the static site api so will be used on build
const IndexPage = props => {
  const [productId, setProductId] = useState(null)
  // const { loading, data } = useQuery(GET_REVIEWS, {
  //   variables: {
  //     productId,
  //   },
  //   skip: !productId,
  // })
  // const [addQuestion, { data: mutationData, error }] = useMutation(ADD_QUESTION)
  // const allProducts = staticData.fauna.allProducts.data || []
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <div style={{ width: "600px" }}>
        <Img fixed={props.data.file.childImageSharp.fixed} />
      </div>
      <LinkButton to="/setupPage">Start Game</LinkButton>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "mr_mrs_tattoo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 600) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

// const GET_REVIEWS = gql`
//   query GetReviews($productId: ID!) {
//     findProductByID(id: $productId) {
//       reviews {
//         data {
//           _id
//           username
//           text
//         }
//       }
//     }
//   }
// `

// const ADD_REVIEW = gql`
//   mutation AddReview($productId: ID!, $username: String!, $text: String!) {
//     createReview(
//       data: {
//         product: { connect: $productId }
//         username: $username
//         text: $text
//       }
//     ) {
//       _id
//     }
//   }
// `

// const ADD_QUESTION = gql`
//   mutation newQuestion($data: QuestionInput!) {
//     createQuestion(data: $data) {
//       _id
//     }
//   }
// `

export default IndexPage
