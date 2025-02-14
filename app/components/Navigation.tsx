"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Gift, Calendar, GamepadIcon, Mail, Menu, X } from "lucide-react"
import React from "react"

const navItems = [
  { href: "/", icon: <Heart size={16} />, text: "Home" },
  { href: "/memories", icon: <Calendar size={16} />, text: "Our Story" },
  { href: "/love-letter", icon: <Mail size={16} />, text: "Love Letter" },
  { href: "/gifts", icon: <Gift size={16} />, text: "Virtual Gifts" },
  { href: "/quiz", icon: <GamepadIcon size={16} />, text: "Love Quiz" },
  { href: "/card-creator", icon: <Mail size={16} />, text: "Card Creator" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-red-50/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-300"
          >
            <Heart className="w-6 h-6" />
            <span className="font-greatVibes text-2xl">My Valentine</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  className="group relative px-4 py-2 text-red-600 hover:text-red-700 transition-all duration-300"
                >
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span className="font-roboto text-sm">{item.text}</span>
                  </motion.div>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
                {index < navItems.length - 1 && <span className="h-4 w-px bg-red-200" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-red-600 hover:text-red-700 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-red-50 border-t border-red-100"
          >
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-100/50 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="font-roboto">{item.text}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

