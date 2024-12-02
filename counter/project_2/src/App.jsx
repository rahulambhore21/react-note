import { useState,useCallback,useEffect } from 'react'

function App() {
  
let [length,setLength] = useState(7);
let [numberAllowed,setNumberAllowed] = useState(false);
let [charAllowed,setCharAllowed] = useState(false);
let [password,setPassword] = useState("");
const passwordGenerator = useCallback(()=>{
  let pass ="";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str += "1203456789";
  if(charAllowed) str += "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  for(let i = 1; i <= length; i++){

    let char = Math.floor(Math.random()*str.length+1);

    pass += str.charAt(char);
  }

  setPassword(pass);
  
},[length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
 <div className='translate-y-1/2 mx-auto w-3/4 bg-slate-700 rounded-lg w-auto p-7'>
  <h1>Password generator</h1>
 <div className='flex m-2 p-3 '>
  <input type="text" placeholder='password' className='flex-1 outline-none border-none rounded-md bg-white p-3 text-black' value={password} />
  <button className='p-2 bg-orange-700' >Copy</button>
 </div>
 <div className='flex m-2 p-2 justify-around '>
  <input type="range" min={6} max={100} value={length} onChange={(e)=>{
    setLength(e.target.value);
  }} />
  <label >Length {length}</label>
  <input type="checkbox" defaultChecked ={numberAllowed}
  id='numberInput' onChange={()=>{
    setNumberAllowed((prev)=>!prev);
  }} />
  <label >Number</label>
  <input type="checkbox" defaultChecked ={charAllowed}
  id='numberInput' onChange={()=>{
    setCharAllowed((prev)=>!prev);
  }} />
  <label >character</label>
 </div>
 </div>
    </>
  )
}

export default App
