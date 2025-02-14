"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function CardCreator() {
  const [message, setMessage] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("#FFB6C1")
  const [textColor, setTextColor] = useState("#000000")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-greatVibes font-bold text-red-600 mb-8 animate-fade-in">
        Create Your Valentine &apos;s Card
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="flex-1">
          <textarea
            className="w-full h-40 p-2 border rounded-lg mb-4 font-roboto"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="mb-4">
            <label className="block mb-2 font-roboto">Background Color:</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-roboto">Text Color:</label>
            <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full" />
          </div>
        </div>
        <motion.div
          className="flex-1 rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundColor }}
          animate={{ backgroundColor }}
        >
          <div className="p-8 h-full flex flex-col items-center justify-center">
            <Heart className="text-red-500 mb-4" size={48} />
            <motion.p
              className="text-center text-lg font-greatVibes"
              style={{ color: textColor }}
              animate={{ color: textColor }}
            >
              {message || "Your message will appear here"}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

