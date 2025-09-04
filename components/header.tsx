"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isSearchOpen && !target.closest('.search-container') && !target.closest('.search-button')) {
        setIsSearchOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSearchOpen])

  const blogPosts = [
    { title: "Finding Beauty in Everyday Moments", category: "reflections", slug: "finding-beauty-in-everyday-moments" },
    { title: "Summer Adventures and Life Lessons", category: "stories", slug: "summer-adventures" },
    { title: "Midnight Thoughts on Growing Up", category: "poetry", slug: "midnight-thoughts" },
    { title: "The Art of Letting Go", category: "reflections", slug: "art-of-letting-go" },
    { title: "Coffee Shop Chronicles", category: "stories", slug: "coffee-shop-chronicles" },
    { title: "Whispers of the Heart", category: "poetry", slug: "whispers-of-heart" },
  ]

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <header className="border-b border-white/20 bg-black/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold">LOGO</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`hover:scale-105 transition-all duration-300 font-bold ${
                pathname === '/' ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300 hover:text-white'
              }`}>
                HOME
              </Link>
              <Link href="/blog" className={`hover:scale-105 transition-all duration-300 font-bold ${
                pathname === '/blog' || pathname.startsWith('/blog/') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300 hover:text-white'
              }`}>
                BLOG
              </Link>
              <Link href="/about" className={`hover:scale-105 transition-all duration-300 font-bold ${
                pathname.startsWith('/about') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300 hover:text-white'
              }`}>
                ABOUT
              </Link>
              <Link href="/archive" className={`hover:scale-105 transition-all duration-300 font-bold ${
                pathname.startsWith('/archive') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300 hover:text-white'
              }`}>
                ARCHIVE
              </Link>
              <Link href="/contact" className={`hover:scale-105 transition-all duration-300 font-bold ${
                pathname.startsWith('/contact') ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300 hover:text-white'
              }`}>
                CONTACT
              </Link>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2 search-button"
                aria-label="Search"
                suppressHydrationWarning
              >
                <Search size={20} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-white search-button" aria-label="Search" suppressHydrationWarning>
                <Search size={20} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden">
          <div className="flex flex-col h-full">
            {/* Header space */}
            <div className="h-20"></div>

            {/* Menu content */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-8">
                <Link
                  href="/blog"
                  className={`flex items-center gap-4 text-lg hover:text-gray-300 transition-colors ${
                    pathname.startsWith('/blog') ? 'text-white border-b-2 border-white pb-1' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  Blog
                </Link>

                <Link
                  href="/about"
                  className={`flex items-center gap-4 text-lg hover:text-gray-300 transition-colors ${
                    pathname.startsWith('/about') ? 'text-white border-b-2 border-white pb-1' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  About
                </Link>

                <Link
                  href="/archive"
                  className={`flex items-center gap-4 text-lg hover:text-gray-300 transition-colors ${
                    pathname.startsWith('/archive') ? 'text-white border-b-2 border-white pb-1' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  Archive
                </Link>

                <Link
                  href="/contact"
                  className={`flex items-center gap-4 text-lg hover:text-gray-300 transition-colors ${
                    pathname.startsWith('/contact') ? 'text-white border-b-2 border-white pb-1' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="fixed top-20 right-6 w-96 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50 animate-fade-in-up search-container">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 text-sm"
                autoFocus
              />
            </div>
            
            {searchQuery && (
              <div className="mt-3 space-y-1 max-h-64 overflow-y-auto">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={`/blog/${post.slug}`}
                      onClick={() => {
                        setIsSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                    >
                      <span className="text-sm">
                        {post.category === 'reflections' ? '💭' : post.category === 'stories' ? '📖' : '🎭'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm truncate group-hover:text-gray-100">{post.title}</h4>
                        <p className="text-xs text-gray-400 capitalize">{post.category}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-3 text-sm">No posts found</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
