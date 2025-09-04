"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get('category')
    if (category && ['reflections', 'stories', 'poetry'].includes(category)) {
      setSelectedCategory(category)
    }
  }, [])
  
  const blogPosts = [
    {
      id: 1,
      title: "Finding Beauty in Everyday Moments",
      excerpt: "Sometimes the most profound experiences come from the simplest observations...",
      category: "reflections",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/tokyo-tower-surrounded-by-beautiful-pink-cherry-bl.png",
    },
    {
      id: 2,
      title: "Summer Adventures and Life Lessons",
      excerpt: "This summer taught me more about myself than any classroom ever could...",
      category: "stories",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/beautiful-japanese-sushi-rolls-on-wooden-board--fr.png",
    },
    {
      id: 3,
      title: "Midnight Thoughts on Growing Up",
      excerpt: "In the quiet hours when the world sleeps, my mind wanders to who I'm becoming...",
      category: "poetry",
      date: "2024-01-10",
      readTime: "3 min read",
      image: "/person-in-traditional-japanese-kimono-holding-red-.png",
    },
    {
      id: 4,
      title: "The Art of Letting Go",
      excerpt: "Learning to release what no longer serves us is perhaps life's greatest skill...",
      category: "reflections",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/traditional-japanese-street-scene-with-person-in-k.png",
    },
    {
      id: 5,
      title: "Coffee Shop Chronicles",
      excerpt: "The stories we overhear in public spaces often mirror our own experiences...",
      category: "stories",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/tokyo-tower-surrounded-by-beautiful-pink-cherry-bl.png",
    },
    {
      id: 6,
      title: "Whispers of the Heart",
      excerpt: "A collection of verses about love, loss, and everything in between...",
      category: "poetry",
      date: "2024-01-03",
      readTime: "4 min read",
      image: "/beautiful-japanese-sushi-rolls-on-wooden-board--fr.png",
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
        return "text-pink-400 border-pink-400"
      case "stories":
        return "text-blue-400 border-blue-400"
      case "poetry":
        return "text-purple-400 border-purple-400"
      default:
        return "text-gray-400 border-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        {/* Header Section */}
        <section className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">All Posts</h1>
          <p className="text-xl text-gray-300 mb-8">Explore stories, reflections, and poetry from the heart</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </section>

        {/* Blog Posts Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
            .map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{getCategoryIcon(post.category)}</span>
                  <span className={`text-sm font-semibold uppercase tracking-wide ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Post Title */}
                <h2 className="text-xl font-bold mb-3 hover:text-gray-300 transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Post Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">{Math.floor(Math.random() * 500) + 100} views</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Load More Button */}
        <div className="text-center mt-16 animate-fade-in">
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 transform">
            Load More Posts
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
