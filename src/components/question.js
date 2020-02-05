import React from "react"

const handleClick = e => {}
const Question = ({ current: { id, question, options } }) => {
  return (
    <div>
      <h2>{question}</h2>
      <span>
        {options.map(v => (
          <button key={v} onClick={e => handleClick(e.target.value)}>
            {v}
          </button>
        ))}
      </span>
    </div>
  )
}

export default Question
