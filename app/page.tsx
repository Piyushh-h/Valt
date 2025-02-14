"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import Confetti from "./components/Confetti"

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const nextValentine = new Date(now.getFullYear(), 1, 14)
      if (now > nextValentine) nextValentine.setFullYear(nextValentine.getFullYear() + 1)
      const difference = nextValentine.getTime() - now.getTime()

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(((difference / 1000) * 60 * 60) % 24),
        minutes: Math.floor(((difference / 1000) * 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {showConfetti && <Confetti />}
      <h1 className="text-4xl md:text-6xl font-greatVibes font-bold text-red-600 mb-8 animate-bounce">
        Happy Valentine&apos;s Day, My Love!
      </h1>
      <p className="text-xl md:text-2xl font-roboto text-pink-700 mb-8 max-w-2xl animate-fade-in">
        Every moment with you is a treasure, every smile a gift. You are my heart, my soul, my everything.
      </p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-roboto font-bold py-2 px-4 rounded-full transition-colors duration-300 mb-8"
        onClick={() => setShowConfetti(true)}
      >
        Click for a Surprise!
      </button>
      <div className="flex justify-center items-center mb-8">
        <Heart className="text-red-500 animate-pulse" size={100} />
      </div>
      <div className="text-lg font-roboto text-red-700 animate-float mb-8">
        <p>Countdown to our next Valentine&apos;s Day:</p>
        <p>
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </p>
      </div>
      <p className="text-lg font-greatVibes text-red-700 animate-float">With all my love, Bubbz</p>
    </main>
  )
}

