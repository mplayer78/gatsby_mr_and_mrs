import React, { useState } from "react"

const NumberOfQuestions = props => {
  const [noOfQuestions, setNoOfQuestions] = useState(10)

  const handleChange = e => setNoOfQuestions(e.target.value)

  const handleSubmit = () => props.handleSubmit()

  return (
    <form onSubmit={() => handleSubmit()}>
      <label htmlFor="">
        Number of Questions
        <input
          type="range"
          min="1"
          max={props.questionCount}
          value={noOfQuestions}
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          value={noOfQuestions}
          onChange={e => handleChange(e)}
        />
      </label>
    </form>
  )
}

export default NumberOfQuestions
