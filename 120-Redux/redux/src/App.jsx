import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>count = {count}</Navbar>

      
    </>
  )
}

export default App
