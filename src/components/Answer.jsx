import { lightGreen } from '@mui/material/colors';
import React ,{useState}from 'react';
export default function Answer({c},idx) {
    const{text,correct}=c
    const [myStyle,setMyStyle] = useState('white')
    const [myColor,setMyColor] = useState('black')
  const [count,setCount] = useState(0);
  

  function defaultColor(){
      setMyStyle('white')
      setMyColor('black')
    } 
  function func(){
    setMyStyle('blue');
    if(count%2!=0){
      defaultColor();
    }
    setCount(count+1);
  }
  
  return (
  <>
  <div className='options'>
    <button className='btn'  style = {{backgroundColor:myStyle,color:myColor}} key={idx} onClick={func} >{text}</button>
    </div>
  </>
  )
}