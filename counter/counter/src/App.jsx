import './App.css'
import { useState } from 'react'

function App() {

  let [current,update] = useState(0);

  const addValue = ()=>{
    update( current+1);
    // update((current)=> current+1);
    // update((current)=> current+1);
    // update((current)=> current+1);
    // update((current)=> current+1);

    console.log(`value is incremented ${current}`);
  }

  const removeValue = ()=>{
    if (current>0) {
      update(current-1);
    console.log(`value is decremented ${current}`);
    }
    else{
      alert("You cant go negative")
    }
  }
  return (
    <>
      <h1>Rahul Ambhore</h1>
      <button onClick={addValue}>Add{current}</button>
      <button onClick={removeValue}>Remove{current}</button>
    </>
  )
}

export default App
