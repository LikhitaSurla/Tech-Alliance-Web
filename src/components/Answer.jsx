import React ,{useState}from 'react';
export default function Answer({c},idx) {
    const{text,correct}=c
    const [myStyle,setMyStyle] = useState('white')
    const [myColor,setMyColor] = useState('black')
    let count=0;
    const func=(c)=>{
        if(correct===true){
            setMyStyle('green')
            setMyColor('white')
            // setScore(score)
        }
        else{
            setMyStyle('maroon')
            setMyColor('white')
        }
        count++;
        if(count%2!=0 ){
          defaultColor()
        }
        console.log(count)
    }
     const defaultColor=()=>{
      if(myStyle==='green' ){
        setMyColor('black')
        setMyStyle('white')
      }
      else if(myStyle==='maroon'){
        setMyColor('black')
        setMyStyle('white')
      }
    }
  
  return (
  <>
  <div className='options'>
    <button className='btn' style = {{backgroundColor:myStyle,color:myColor}} key={idx} onClick={func} >{text}</button>
    </div>
  </>
  )
}