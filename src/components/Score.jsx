import React from 'react'
export default function Score(props) {
  return (
   props.state && <div className="app">
      <div className="main">
        <h1>Quiz</h1>
        <div className="scores">
          <p id="highscore">Score :{props.score} </p>
        </div>
      </div>
      </div>
  )
}
