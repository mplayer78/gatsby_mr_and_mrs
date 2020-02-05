import React from "react"

const Question = ({ current: { id, question, options } }) => {
  return (
    <div>
      <h2>{question}</h2>
      <span>
        {options.map(v => (
          <button key={v}>{v}</button>
        ))}
      </span>
    </div>
  )
}

export default Question
