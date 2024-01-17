import { useState, useEffect, React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("Ram")

  useEffect( ()=> {console.log("Component Mounted")},[data])
  //var LevelValue = 10;
  function updateLevel()
  {
    setCount(count +5)
  }
  function updateData(){
    setData("Sita")
  }
  return (
    <>
    {/*
    <h1>I am on Level {LevelValue}</h1>
  */}
    <h1>I am on Level {count}</h1>
    <button onClick={updateLevel}>Click Me</button>
    <button onClick={updateData}>Update Data</button>
      {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
