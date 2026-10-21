import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(400)

  return (
    <>
    <div>The count is {count}</div>
    <button onClick={()=>{setCount(count-1)}}>Update Count</button>
    </>
  )
}

export default App
