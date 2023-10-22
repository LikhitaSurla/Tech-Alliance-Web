import {useState} from "react";
import {questions} from "./ques.js"
import './style.css'
import Gamepage from "./components/Gamepage.jsx"

import "./index.css"
import Answer from "./components/Answer.jsx";
// karthik

const Game=()=>{

    const[start,setStart]=useState(false);
    // const[score,setScore]=useState(0);
    
    const startQuizBtn=()=>{    
        setStart(true)
    }





if(start===false){
return(
    <>
       <div className="modal" id="quizModal">
      <div className="modal-content">
        <h2>Test your Brain</h2>
        <p>Are Youuu Reaaadddyyy🔥?</p>
        <button onClick={startQuizBtn} id="startQuizBtn" >Start Quiz</button>
        {/* {startQuizBtn  && <Questionpage />} */}


      </div>
    </div>
    </>
)
}
else{
    return(
<>
<div className="app">
      <div className="main">
        <h1>Quiz</h1>
        <div className="scores">
          <p id="attempts">Score :</p>

          <p id="highscore">highScore : </p>
        </div>
      </div>
      </div>
{questions.map((c,idx)=><Gamepage c={c} key={idx} questionNum={idx+1}/>)}
{/* <Answer score={score}/> */}

</>
    )

}

}

export {Game}