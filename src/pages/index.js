import React from "react"
import { Link } from "gatsby"
import faunadb, { query as q } from "faunadb"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const client = new faunadb.Client({
  secret: "fnADkLTNIIACAPob5hRLEZQ7LuZJRBkEFhCflwjT",
})

// client
//   .query(q.CreateDatabase({ name: "flobble" }))
//   .then(ret => console.log("ret ", ret))

// client
//   .query(
//     q.CreateKey({
//       database: q.Database("flobble"),
//       role: "server",
//     })
//   )
//   .then(ret => console.log("ret ", ret))

// client
//   .query(q.CreateCollection({ name: "questions" }))
//   .then(ret => console.log("ret ", ret))

// client
//   .query(
//     q.CreateIndex({
//       name: "questions_by_age_rating",
//       source: q.Collection("questions"),
//       terms: [{ field: ["data", "rating"] }],
//       values: [{ field: ["data", "question"] }],
//     })
//   )
//   .then(ret => console.log("ret ", ret))

// client
//   .query(
//     q.Create(q.Collection("questions"), {
//       data: { question: "Who is the most sociable?" },
//     })
//   )
//   .then(ret => console.log("ret ", ret))

// client
//   .query(
//     q.Map(
//       [
//         "Who is the better looking?",
//         "Which one takes control in tough situations?",
//         "Who spends mor on lunch?",
//       ],
//       q.Lambda(
//         "set_questions",
//         q.Create(q.Collection("questions"), {
//           data: { question: q.Var("set_questions") },
//         })
//       )
//     )
//   )
//   .then(ret => console.log("ret ", ret))

client
  .query(q.Get(q.Ref(q.Collection("questions"), "256988804078895627")))
  .then(ret => console.log("ret ", ret))

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
