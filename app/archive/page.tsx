"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const archiveData = [
    {
      year: "2024",
      posts: [
        {
          month: "January",
          count: 8,
          posts: [
            { title: "Finding Beauty in Everyday Moments", category: "reflections", date: "Jan 15" },
            { title: "Summer Adventures and Life Lessons", category: "stories", date: "Jan 12" },
            { title: "Midnight Thoughts on Growing Up", category: "poetry", date: "Jan 10" },
            { title: "The Art of Letting Go", category: "reflections", date: "Jan 8" },
            { title: "Coffee Shop Chronicles", category: "stories", date: "Jan 5" },
            { title: "Whispers of the Heart", category: "poetry", date: "Jan 3" },
          ],
        },
        {
          month: "February",
          count: 6,
          posts: [
            { title: "Spring Awakening", category: "poetry", date: "Feb 28" },
            { title: "Lessons from Failure", category: "reflections", date: "Feb 25" },
            { title: "Road Trip Memories", category: "stories", date: "Feb 20" },
            { title: "On Friendship and Distance", category: "reflections", date: "Feb 15" },
          ],
        },
        {
          month: "March",
          count: 4,
          posts: [
            { title: "New Beginnings", category: "reflections", date: "Mar 30" },
            { title: "City Lights and Dreams", category: "poetry", date: "Mar 25" },
          ],
        },
      ],
    },
    {
      year: "2023",
      posts: [
        {
          month: "December",
          count: 5,
          posts: [
            { title: "Year-End Reflections", category: "reflections", date: "Dec 31" },
            { title: "Winter Solitude", category: "poetry", date: "Dec 20" },
          ],
        },
        {
          month: "November",
          count: 7,
          posts: [
            { title: "Gratitude in Small Things", category: "reflections", date: "Nov 28" },
            { title: "Autumn Stories", category: "stories", date: "Nov 15" },
          ],
        },
      ],
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "reflections":
        return "💭"
      case "stories":
        return "📖"
      case "poetry":
        return "🎭"
      default:
        return "✨"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "reflections":
        return "text-pink-400"
      case "stories":
        return "text-blue-400"
      case "poetry":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold animate-pulse-glow">ARCHIVE</h1>
          <p className="text-xl text-gray-300 mt-4">Explore all posts organized by date and category</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'all' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              All Posts
            </button>
            <button 
              onClick={() => setSelectedCategory('reflections')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'reflections' ? 'bg-pink-400 text-black' : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black'
              }`}
            >
              💭 Reflections
            </button>
            <button 
              onClick={() => setSelectedCategory('stories')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'stories' ? 'bg-blue-400 text-black' : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
              }`}
            >
              📖 Stories
            </button>
            <button 
              onClick={() => setSelectedCategory('poetry')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'poetry' ? 'bg-purple-400 text-black' : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black'
              }`}
            >
              🎭 Poetry
            </button>
          </div>

          {/* Archive by Year */}
          <div className="space-y-12">
            {archiveData.map((yearData, yearIndex) => (
              <div
                key={yearData.year}
                className="animate-slide-in-up"
                style={{ animationDelay: `${yearIndex * 0.2}s` }}
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-4xl">📅</span>
                  {yearData.year}
                  <span className="text-lg text-gray-400 font-normal">
                    ({yearData.posts.reduce((total, month) => total + month.count, 0)} posts)
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {yearData.posts.map((monthData, monthIndex) => (
                    <div
                      key={monthData.month}
                      className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 hover:scale-105 transition-all duration-300 animate-bounce-in"
                      style={{ animationDelay: `${yearIndex * 0.2 + monthIndex * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{monthData.month}</h3>
                        <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">{monthData.count} posts</span>
                      </div>

                      <div className="space-y-3">
                        {monthData.posts
                          .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
                          .slice(0, 3)
                          .map((post, postIndex) => (
                          <div
                            key={postIndex}
                            className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-lg flex-shrink-0 mt-0.5">{getCategoryIcon(post.category)}</span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm leading-tight mb-1 truncate">{post.title}</h4>
                              <div className="flex items-center justify-between text-xs">
                                <span className={`font-medium ${getCategoryColor(post.category)}`}>
                                  {post.category.toUpperCase()}
                                </span>
                                <span className="text-gray-500">{post.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}

                        {monthData.count > 3 && (
                          <button className="w-full text-sm text-gray-400 hover:text-white transition-colors duration-200 py-2">
                            View all {monthData.count} posts →
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Archive Stats */}
          <div className="mt-16 bg-gray-900/50 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">Archive Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="animate-bounce-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl mb-2">📝</div>
                <div className="text-2xl font-bold text-white">24</div>
                <div className="text-sm text-gray-400">Total Posts</div>
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl mb-2">💭</div>
                <div className="text-2xl font-bold text-pink-400">8</div>
                <div className="text-sm text-gray-400">Reflections</div>
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl mb-2">📖</div>
                <div className="text-2xl font-bold text-blue-400">10</div>
                <div className="text-sm text-gray-400">Stories</div>
              </div>
              <div className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl mb-2">🎭</div>
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-sm text-gray-400">Poetry</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
