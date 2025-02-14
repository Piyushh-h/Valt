"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Calendar, Plus } from "lucide-react"

const initialMemories = [
  {
    id: 1,
    title: "When we Met ",
    image: "/assets/anshika1.jpg" , 
    description:
      "Still remember the butterflies in my stomach when I came to visit you that day. The moment I saw you, time just stood still. You looked so beautiful, and that shy smile of yours... I couldn't help but steal glances at you. Something about you felt different, special. Looking back now, that nervous first meeting was the start of something amazing.",
  },
  {
    id: 2,
    title: "Our First Date",
    image: "/assets/anshika4.jpg",
    description:
        "You always said I never took you on dates, and you were right. After all those fights and me being stubborn, I finally realized what I was missing. That evening was worth every wait - seeing your face light up made me wonder why I hadn't done this sooner. Now I understand why you wanted this so much. It wasn't just about the date, it was about making time for us, creating memories together."  },
  
]

export default function Memories() {
  const [memories, setMemories] = useState(initialMemories)
  const [selectedMemory, setSelectedMemory] = useState(memories[0])
  const [isAddingMemory, setIsAddingMemory] = useState(false)
  const [newMemory, setNewMemory] = useState({ title: "", date: "", description: "" })

  const handleAddMemory = (e: React.FormEvent) => {
    e.preventDefault()
    const memory = {
      id: memories.length + 1,
      ...newMemory,
      image: "/placeholder.svg",
    }
    setMemories([...memories, memory])
    setNewMemory({ title: "", date: "", description: "" })
    setIsAddingMemory(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-greatVibes text-center font-bold text-red-600 mb-12"
        >
          Our Love Story
        </motion.h1>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 max-w-6xl mx-auto">
          {/* Timeline Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedMemory(memory)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 transform hover:scale-102 
                    ${selectedMemory.id === memory.id ? "bg-red-100 shadow-lg" : "bg-white shadow hover:shadow-md"}`}
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="text-red-500" size={24} />
                    <div>
                      <h3 className="font-greatVibes text-2xl text-red-600">{memory.title}</h3>
                    </div>
                  </div>
                </button>
                {index < memories.length - 1 && <div className="absolute left-7 top-full h-4 w-0.5 bg-red-200" />}
              </motion.div>
            ))}

            <motion.button
              onClick={() => setIsAddingMemory(true)}
              className="w-full mt-4 p-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus size={20} />
              <span>Add New Memory</span>
            </motion.button>
          </motion.div>

          {/* Memory Details Section */}
          <AnimatePresence mode="wait">
            {isAddingMemory ? (
              <motion.form
                key="form"
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleAddMemory}
              >
                <h2 className="text-3xl font-greatVibes text-red-600 mb-6">Add New Memory</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      placeholder="Give your memory a title..."
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all"
                      value={newMemory.title}
                      onChange={(e) => setNewMemory({ ...newMemory, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all"
                      value={newMemory.date}
                      onChange={(e) => setNewMemory({ ...newMemory, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      placeholder="Tell your story..."
                      className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all"
                      value={newMemory.description}
                      onChange={(e) => setNewMemory({ ...newMemory, description: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsAddingMemory(false)}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Save Memory
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="memory"
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-greatVibes text-red-600 mb-6">{selectedMemory.title}</h2>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src={selectedMemory.image || "/placeholder.svg"}
                    alt={selectedMemory.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{selectedMemory.description}</p>
                <div className="flex items-center justify-between">
                  <Heart className="text-red-500 animate-pulse" size={24} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

