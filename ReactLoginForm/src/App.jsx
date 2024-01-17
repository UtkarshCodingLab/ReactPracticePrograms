import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  function showUsername(val)
  {
    setusername(val.target.value)
  }
  function showPassword(val)
  {
    setpassword(val.target.value)
  }
  return (
    <>
    <form>
      <label>Username</label><input type="text" onChange={showUsername}></input><br></br>
      <label>Password</label><input type="password" onChange={showPassword}></input><br></br>
      <button>Submit</button><br></br>
      <h3>Username is {username}</h3>
      <h3>Password is {password}</h3>
    </form>
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
