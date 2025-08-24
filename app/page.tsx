"use client"

import { useState } from "react"

export default function HomePage() {
  const [currentLanguage, setCurrentLanguage] = useState("nl")

  const translations = {
    nl: {
      title: "NouSSe",
      subtitle: "Innovazione alla portata di tutti",
      welcome: "Welkom bij NouSSe"
    },
    en: {
      title: "NouSSe", 
      subtitle: "Innovation within everyone's reach",
      welcome: "Welcome to NouSSe"
    }
  }

  const t = translations[currentLanguage as keyof typeof translations] || translations.nl

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-8">
            {t.title}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            {t.subtitle}
          </p>
          <p className="text-xl mb-12">
            {t.welcome}
          </p>
          
          <div className="mb-8">
            <select 
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="px-4 py-2 bg-white/20 rounded text-white"
            >
              <option value="nl">🇳🇱 Nederlands</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">AI Solutions</h3>
              <p>Proven AI methodologies for business transformation</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Education 8-88</h3>
              <p>Technology accessible for every generation</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">Innovation</h3>
              <p>Where technology becomes human</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
