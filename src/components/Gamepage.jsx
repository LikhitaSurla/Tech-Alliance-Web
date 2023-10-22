import React, { useState } from 'react';
import '../style.css';
import Answer from './Answer';
 
 export default function Gamepage({c,questionNum}) {
    const{question,answers}=c;
// checkout
   return (
<>
<div className='question'>
    {questionNum} :{question}</div>
    {answers.map((c,idx)=><Answer key={idx} c={c} />
)}


</>   )
 }
 