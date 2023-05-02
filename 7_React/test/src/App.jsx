import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// This is a Component
function WelcomeMsg({children, myprop, bob}) {
  return (
    <div>
      <h1>{children}</h1>
      <hr />
      <h1>{myprop}</h1>
      <hr />
      <h1>{bob}</h1>
    </div>
  )
  
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  return (
    <div className="App">
      <div>
        <WelcomeMsg myprop={"props"} bob={"bob"}>This is children props</WelcomeMsg>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setName((name) => name === "John" ? "Alex" : "John")}>
          Name is {name}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App




// import { useState } from 'react'

// const Counter = ({ count, setCount }) => {
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <Counter setCount={setCount} count={count} />
//     </div>
//   )
// }

// export default App