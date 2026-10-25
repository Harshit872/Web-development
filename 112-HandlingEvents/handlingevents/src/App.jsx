import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Harshit")



  const handleClick = ()=>{
    alert("Hey i am clicked")
  }
  const handleMouseOver = ()=>{
    alert("Hey i am mouse over")
  }
  const handleChange = (e)=>{
    setname(e.target.value)
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div> */}
      <input type="text" value={name} onChange = {handleChange}  />
      <input type="text" value={name} onChange = {handleChange}  />

    </>
  )
}

export default App
