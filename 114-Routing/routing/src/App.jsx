import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import "./components/navbar";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import login from "./components/login";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <login />,
    },
  ]);
  return (
    <>
      <div>hehehehhehe</div>
      <Navbar />
    </>
  );
}

export default App;
