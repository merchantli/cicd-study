import type { FC } from "react";
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {
  value: string;
}

const App: FC<Props> = ({ value }) => {
  const [count, setCount] = useState(0)
  console.log(123, '增加console')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((counter) => counter + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <p role="props">{value}</p>
      </header>
    </div>
  )
}

export default App
