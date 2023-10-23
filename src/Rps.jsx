import { useState,useEffect } from "react";
import {Rock,Paper,Scissor} from "./images.js";
import   "./RPS.css"


const Rps=()=>{
    const [count,setCount]=useState(0);
    const [sount,setSount]=useState(0);
    const [hiscore,setHiScore]=useState(0);

    const [userMove,setuserMove]=useState();
    const [computerMove,setComputerMove]=useState();
    const obj={
        rock:"scissor",
        paper:"rock",
        scissor:"paper",

    }
    useEffect(()=>{
        computersMove()
    })
    function greater()
    {
        if(hiscore<count)
        {
            setHiScore(count)
        }
    }
    function reset()
    {
        greater()
        setCount(0);
        setSount(0);
        
    }
    function comparing (choice)
    {
        setuserMove(choice)
        console.log(computerMove,userMove)
        if(obj[choice]==computerMove)
        {
            console.log('you win')
            setCount(count+1)
            
        }
        else if (choice==computerMove)
        {
            console.log("you tied")
            
        }
        else{
            console.log("you lose")
            setSount(sount+1)
        }
        
    
    }
    const setRock=()=>{
        
        comparing("rock")
        computersMove();

    }
    const setPaper=()=>{
        
        comparing("paper")
        computersMove();
    }
    const setScissor=()=>{
        
        comparing("scissor")
        computersMove();
    }
    const computersMove=()=>{
        const randomNumber=Math.random();
        if(randomNumber >=0 && randomNumber<1/3 )
    {    
        setComputerMove("rock")
    }
else if( randomNumber >=1/3 && randomNumber<2/3)
    {
        setComputerMove("paper");
    }
else if( randomNumber >=2/3 && randomNumber<1)
    {
        setComputerMove("scissor");
    }  
    
     }
    return(
       
            <>
            <div className="process">
        
    <h3> Rock - Paper - Sciccors</h3>
    <button onClick={setRock} className="move-button"><img src={Rock} className="move-icon"></img></button>
    <button onClick={setPaper} className="move-button"><img src={Paper} className="move-icon"></img></button>

    <button onClick={setScissor} className="move-button"><img src={Scissor} className="move-icon"></img></button>
    <button onClick={()=>reset()}>restart </button>
    <p> my score : {count} computer score : {sount}  </p>
 <p> high score : {hiscore}</p>

  
   <p> usermove : {userMove}, Computer : {computerMove}</p>
   

  
</div>
    
 
            </>
    )  ;          
         
}
export default Rps
    

