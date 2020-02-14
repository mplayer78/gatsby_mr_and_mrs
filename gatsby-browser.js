import React from "react"
import ApolloClient, { gql } from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { ThemeProvider } from "styled-components"

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: "Bearer fnADkcIYmHACCwYZK2T_ZOrmmORopafODv4W0et5",
      },
    })
  },
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

// QUESTION AUTHOR KEY: fnADkcIYmHACCwYZK2T_ZOrmmORopafODv4W0et5
