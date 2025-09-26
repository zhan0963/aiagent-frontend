import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  return (
    <div className="app">
      <h1 className="title">Hello Jimmy, this is Emma.</h1>
      <h2>How should I help you today?</h2>
      <div className="input-container">
        <div className="input-wrapper">
          <button className="add-button">+</button>
          <input
            type="text"
            placeholder="Ask anything"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-box"
          />
          <div className="input-controls">
            <button className="mic-button">🎤</button>
            <button className="menu-button">☰</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App