import type { Metadata } from "next"
import { Great_Vibes, Roboto } from "next/font/google"
import "./globals.css"
import type React from "react"
import Navigation from "./components/Navigation"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
})

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "My Valentine",
  description: "A special Valentine's Day experience for my love",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${roboto.variable}`}>
      <body className={`${roboto.className} bg-pink-50`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

