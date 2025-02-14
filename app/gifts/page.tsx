"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Gift, Flower, Candy, Music } from "lucide-react"


const gifts = [
  { id: 1, name: "Virtual Flowers", icon: <Flower size={48} /> },
  { id: 2, name: "Digital Chocolate", icon: <Candy size={48} /> },
  { id: 3, name: "Love Song Playlist", icon: <Music size={48} /> },
  { id: 4, name: "Heart-felt Message", icon: <Heart size={48} /> },
]

const playlist = [
  { title: "Can't Help Falling in Love", artist: "Elvis Presley" },
  { title: "All of Me", artist: "John Legend" },
  { title: "Perfect", artist: "Ed Sheeran" },
  { title: "Just the Way You Are", artist: "Bruno Mars" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran" },
]

const flowerBouquet = [
  { name: "Red Rose", meaning: "Love and Romance" },
  { name: "Pink Carnation", meaning: "I'll Never Forget You" },
  { name: "White Lily", meaning: "Purity and Refined Beauty" },
  { name: "Orchid", meaning: "Rare and Delicate Beauty" },
  { name: "Sunflower", meaning: "Adoration and Loyalty" },
]

const chocolateBox = [
  { name: "Dark Chocolate Truffle", flavor: "Rich and Intense" },
  { name: "Milk Chocolate Caramel", flavor: "Sweet and Creamy" },
  { name: "White Chocolate Raspberry", flavor: "Fruity and Smooth" },
  { name: "Hazelnut Praline", flavor: "Nutty and Crunchy" },
  { name: "Strawberry Cream", flavor: "Fresh and Tangy" },
]

export default function VirtualGifts() {
  const [selectedGift, setSelectedGift] = useState<number | null>(null)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-greatVibes font-bold text-red-600 mb-8 animate-fade-in">Virtual Gifts for You</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {gifts.map((gift) => (
          <motion.button
            key={gift.id}
            className={`p-4 rounded-lg transition-all duration-300 flex flex-col items-center ${
              selectedGift === gift.id ? "bg-red-200" : "bg-pink-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedGift(gift.id)}
          >
            {gift.icon}
            <span className="mt-2 text-center font-roboto">{gift.name}</span>
          </motion.button>
        ))}
      </div>
      {selectedGift && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Gift size={100} className="text-red-500 mx-auto mb-4" />
          {selectedGift === 1 && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-greatVibes font-bold text-red-600 mb-4">Your Virtual Flower Bouquet</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {flowerBouquet.map((flower, index) => (
                  <div key={index} className="text-center">

                    <p className="font-roboto font-bold">{flower.name}</p>
                    <p className="font-roboto text-sm text-gray-600">{flower.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedGift === 2 && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-greatVibes font-bold text-red-600 mb-4">Your Digital Chocolate Box</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {chocolateBox.map((chocolate, index) => (
                  <div key={index} className="text-center">
                    <p className="font-roboto font-bold">{chocolate.name}</p>
                    <p className="font-roboto text-sm text-gray-600">{chocolate.flavor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedGift === 3 && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-greatVibes font-bold text-red-600 mb-4">Our Love Song Playlist</h2>
              <ul className="text-left">
                {playlist.map((song, index) => (
                  <li key={index} className="mb-2 font-roboto">
                    <span className="font-bold">{song.title}</span> - {song.artist}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedGift === 4 && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-greatVibes font-bold text-red-600 mb-4">A Heart-felt Message</h2>
              <p className="text-xl font-roboto text-pink-700">
                My dearest, your love is the greatest gift I could ever receive. You make every day brighter, every
                laugh louder, and every moment more meaningful. I cherish you with all my heart.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </main>
  )
}

