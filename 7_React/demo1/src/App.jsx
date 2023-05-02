import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ValueButton({value, count, setCount}) {
  return (
    <button onClick={() => setCount(count + value)}>
      {(value<0?"":"+") + value}
    </button>
  )
}

function ResetButton({count, setCount}) {
  return (
    <button onClick={() => setCount(0)}>
      Reset
    </button>
  )
}

function SaveButton({saved, setSaved, count}) {
  return (
    <button onClick={() => setSaved([...saved, count])}>
      Save
    </button>
  )
}

function SavedNumbers({saved}) {
  return (
    <div>
      <h3>Saved numbers</h3>
      <ul>
        <li>yoo</li>
        {saved.map(el => {
          return (
          <li>
            {el}
          </li>
          )})}
      </ul> 
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [saved, setSaved] = useState([])

  return (
    <div className="App">
      <h1>Counter</h1>

      <h2>{count}</h2>

      <div className="card">
        <ValueButton count={count} setCount={setCount} value={1}/>
        <ValueButton count={count} setCount={setCount} value={10}/>
        <ValueButton count={count} setCount={setCount} value={100}/>
        <ValueButton count={count} setCount={setCount} value={1000}/>
        <br/>
        <ValueButton count={count} setCount={setCount} value={-1}/>
        <ValueButton count={count} setCount={setCount} value={-10}/>
        <ValueButton count={count} setCount={setCount} value={-100}/>
        <ValueButton count={count} setCount={setCount} value={-1000}/>
      </div>
      <div>
        <ResetButton count={count} setCount={setCount}/>
        <SaveButton saved={saved} setSaved={setSaved} count={count}/>
      </div>
      <SavedNumbers saved={saved}/>
    </div>
  )
}

export default App
