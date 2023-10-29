import { useState,useEffect } from 'react'
import Button from '@mui/material/Button';;
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios  from 'axios';
import './form.css'


export default function Form() {

  
 useEffect(()=>{
  axios.get("http://localhost:3000/posts")
  .then(res=>{setData(res.data)})

  .catch(error=>{console.log(error)});
},[]);


 function fun2(){

    axios.post("http://localhost:3000/posts",obj)
    .then(res=>{setData([...data,res.data])})
    .catch(error=>{console.log(error)})

 }

  const[Fname,setFname]=useState("")
  const[Lname,setLname]=useState("")
  const[gender,setGender]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[course,setCourse]=useState()
  const [arr,setArr]=useState([])
  const[data,setData]=useState([])



  const cfname =(e)=>
  {
    setFname(e.target.value);
    
  }
  const clname =(e)=>
  {
    setLname(e.target.value);
    
  }
  const cgender =(e)=>
  {
    setGender(e.target.value);
    
  }
  const cemail =(e)=>
  {
    setEmail(e.target.value);
  }
  const cphone =(e)=>
  {
    setPhone(e.target.value);
  }
  const ccourse=(e)=>
  {
    setCourse(e.target.value);
  }
  
  let obj={}
  function entry(fn,ln,g,e,p,c){
    obj.ofname=fn;
    obj.olname=ln;
    obj.ogender=g;
    obj.oemail=e;
    obj.ophone=p;
    obj.ocoursename=c;
    setArr([...arr,obj]);
    fun1();
    fun2();
  
  }
  function fun1(){
    setFname("");
    setLname("");
    setGender();
    setEmail("");
    setPhone();
    setCourse();

  }
  return (
    <>
    <body className="h-screen width-100% height-100% " id="imgdiv">
    <div className="grid justify-center  ">
    <div className="border border-solid border-zinc-800 mt-16 pb-5 pr-2 bg-neutral-900 mt-10 " id="formbox">
    <form id="myform">
    <div  ><h1 className="text-white font-bold center text-2xl pl-5 pt-7 " id="heading">~REGISTRATION FORM~</h1>
    </div>
    <div className="pt-4">
      <label id="fname" className="pl-7 ">FirstName: </label>
      <input type="text" id="fname1" name="Fname" placeholder="Firstname" onChange={cfname} value={Fname} autoComplete='off' className='border rounded-md border-stone-800  pl-2' required   />
    </div>
    
    <div className="pt-4">
      <label id="lname" className="pl-7 ">LastName: </label>
      <input type="text" id="lname1" name="Lname" placeholder="Lastname" onChange={clname} value={Lname} autoComplete='off' className='border rounded-md border-stone-800  pl-2' required />
    </div>
    
    
    <div className=" pl-7 pt-4">
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className='border-white'
        id="radiogroup"
        value={gender || ""}
      >
        <FormControlLabel  control={<Radio />} onChange={cgender} value="Female"  label="Female" />
        <FormControlLabel value="Male"  control={<Radio />} onChange={cgender} label="Male" />
        <FormControlLabel value="Others"  control={<Radio />} onChange={cgender} label="Other" />
      </RadioGroup>
      </FormControl>
    </div>
    <div className=" flex flex-row flex-nowrap justify-evenly pl-8 pt-4">
    <label id="email" className='text-white pt-3'>Email: </label>
      <input type="email" id="emailinput" onChange={cemail} autoComplete="off" value={email} name="useremail" placeholder="xyz@gmail.com" className='border rounded-md border-stone-800 pl-2 ' required />
    </div>
    <div className=" pl-8 pt-4">
    
        <label id="phone" className='text-white'>Phone: </label>
      <input type="number" id="phoneinput" autoComplete='off' value={phone || ""} onChange={cphone} placeholder="xxxxxxxxxx" className='border rounded-md border-stone-800 pl-2 '  required />

    </div>
    <div id="selectid" className=" pl-5 pt-4">

      <FormControl sx={{ m: 1, minWidth: 95 }} >
        <InputLabel id="demo-simple-select-autowidth-label " >Course</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={course || ""}
          onChange={ccourse}
          autoWidth
          label="course">
          <MenuItem value="">
            <em >None</em>
          </MenuItem>
          <MenuItem value="HTML-CSS" >HTML-CSS</MenuItem>
          <MenuItem value="JAVASCRIPT">JAVASCRIPT</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className=" pl-7 pt-4">
      <Button className="rounded-md border-stone-800 " id="submitbtn" variant="contained" size="small" onClick={()=>{entry(Fname,Lname,gender,email,phone,course)}}>Submit</Button>
    </div>
    </form>

    </div>
    </div>
    <div className='pt-6 ml-10 mr-10 pb-7 mt-4'>
    <div id="tablediv" >
    <TableContainer >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className='text-white border' id='tab'>
        <TableHead>
          <TableRow>
            <TableCell id="tc">S.NO</TableCell>
            <TableCell id="tc"  align="right">FirstName</TableCell>
            <TableCell id="tc" align="right">LastName</TableCell>
            <TableCell id="tc" align="right">Gender</TableCell>
            <TableCell id="tc" align="right">E-mail</TableCell>
            <TableCell id="tc" align="right">PhoneNumber</TableCell>
            <TableCell id="tc" align="right">Course</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <TableRow id={i+1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell id="tc">{i+1}</TableCell>
              <TableCell id="tc" align="right">{row.ofname}</TableCell>
              <TableCell id="tc" align="right">{row.olname}</TableCell>
              <TableCell id="tc" align="right">{row.ogender}</TableCell>
              <TableCell id="tc" align="right">{row.oemail}</TableCell>
              <TableCell id="tc" align="right">{row.ophone}</TableCell>
              <TableCell id="tc" align="right">{row.ocoursename}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </div>
    </body>

    </ >


      );
   
}
