"use client"

import type React from "react"
import { JSX, useEffect, useState } from "react"

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([])

  useEffect(() => {
    const colors = ["#ff0000", "#ff69b4", "#ff1493", "#ff00ff", "#ff6b6b"]
    const pieces = []

    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `-20px`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
      }

      pieces.push(<div key={i} className="confetti-piece" style={style} />)
    }

    setConfetti(pieces)
  }, [])

  return <div className="confetti-container">{confetti}</div>
}

export default Confetti

