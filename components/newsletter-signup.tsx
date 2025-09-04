"use client"

import { useState } from "react"
import { Mail, Check } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-400/20 rounded-2xl p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="text-pink-400" size={24} />
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      <p className="text-gray-300 mb-4">Get notified when new stories, reflections, and poetry are published.</p>
      
      {isSubscribed ? (
        <div className="flex items-center gap-2 text-green-400 animate-bounce-in">
          <Check size={20} />
          <span>Thanks for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
            required
            suppressHydrationWarning
          />
          <button
            type="submit"
            className="px-6 py-2 bg-pink-400 text-black font-semibold rounded-lg hover:bg-pink-300 hover:scale-105 transition-all duration-300"
            suppressHydrationWarning
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}