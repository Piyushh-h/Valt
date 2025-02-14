"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const questions = [
  { id: 1, question: "What's my favorite color?", options: ["Red", "Blue", "Green", "Black"], answer: "Black" },
  {
    id: 2,
    question: "Where was our first date?",
    options: ["Park", "Restaurant", "Movies", "Beach"],
    answer: "Restaurant",
  },
  { id: 3, question: "What's my favorite food?", options: ["Pizza", "Sushi", "Pasta", "Tacos"], answer: "Pizza" },
  
  {
    id: 5,
    question: "What's my dream Car?",
    options: ["BMW", "Porsche", "Mercedes", "Bentley"],
    answer: "Porsche",
  },
]

export default function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-greatVibes font-bold text-red-600 mb-8 animate-fade-in">Love Quiz</h1>
      {!showResult ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
        >
          <h2 className="text-2xl font-greatVibes font-bold mb-4">{questions[currentQuestion].question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className="bg-pink-100 hover:bg-pink-200 text-pink-800 font-roboto font-bold py-2 px-4 rounded transition-colors duration-300"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-greatVibes font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl font-roboto mb-4">
            Your score: {score} out of {questions.length}
          </p>
          <p className="text-pink-700 font-roboto mb-4">
            {score === questions.length
              ? "Perfect score! You know me so well!"
              : "Great effort! Let's keep learning about each other."}
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-roboto font-bold py-2 px-4 rounded transition-colors duration-300"
            onClick={resetQuiz}
          >
            Try Again
          </button>
        </motion.div>
      )}
    </main>
  )
}

