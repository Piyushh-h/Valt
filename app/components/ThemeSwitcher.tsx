"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Heart } from "lucide-react"

const themes = [
  { name: "light", icon: <Sun size={20} /> },
  { name: "dark", icon: <Moon size={20} /> },
  { name: "romantic", icon: <Heart size={20} /> },
]

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("light")

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.className = theme
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-50">
      <motion.div className="flex space-x-2">
        {themes.map((theme) => (
          <motion.button
            key={theme.name}
            className={`p-2 rounded-full ${currentTheme === theme.name ? "bg-red-100 dark:bg-red-800" : "bg-gray-200 dark:bg-gray-700"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleThemeChange(theme.name)}
          >
            {theme.icon}
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}

