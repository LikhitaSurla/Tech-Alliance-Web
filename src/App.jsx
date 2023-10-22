import {useState} from "react";
import {questions} from "./ques.js"
import './style.css'
import Gamepage from "./components/Gamepage.jsx"
import {Stack,Button} from './Material.js'

import "./index.css"
import Answer from "./components/Answer.jsx";
import Score from './components/Score.jsx'

const Game=()=>{

    const[start,setStart]=useState(false);
    // const[score,setScore]=useState(0);
    
    const startQuizBtn=()=>{    
      setStart(true)
    }
    const [quesState,setQuesState] = useState(true)
    const [state,setState] = useState(false);
    function changeState(){
      setQuesState(false)
      setState(true)
    }

if(start===false){
return(
    <>
       <div className="modal" id="quizModal">
      <div className="modal-content">
        <h2>Test your Brain</h2>
        <p>Are Youuu Reaaadddyyy🔥?</p>
        {/* <p>Hiii</p> */}
        <button onClick={startQuizBtn} id="startQuizBtn" >Start Quiz</button>
        {/* {startQuizBtn  && <Questionpage />} */}


      </div>
    </div>
    </>
)
}
else if(quesState===true){
    return(
<>
  {questions.map((c,idx)=><Gamepage c={c} key={idx} questionNum={idx+1}/>)}
  <div>
  <Button variant="contained" onClick={changeState}>Submit</Button>
  </div>
</>
    )

}
else {
 return(
  <>
   <Score state={state}/>
  </>
 )
}

}

export {Game}