import React, { useEffect, useState, useRef } from 'react'
import './App.css'

export default function App() {
  const canvasRef = useRef(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  // height and width of canvas
  useEffect(() => {
    const context = canvasRef.current.getContext('2d')
    context.canvas.height = window.innerHeight
    context.canvas.width = window.innerWidth

    context.fillRect(x, y, 100, 100)
  }, [])

  // move the box when x or y changed
  useEffect(() => {
    const context = canvasRef.current.getContext('2d')
    context.fillRect(x, y, 100, 100)
  }, [x, y])
  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button>Up</button>
        <button>Left</button>
        <button>Down</button>
        <button onClick={() => setX((x) => x + 20)}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  )
}
