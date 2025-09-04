import Link from "next/link"
import { Instagram, Github, Linkedin, Heart, Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white">LOGO</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A personal space for stories, reflections, and creative expressions.
            </p>
            <p className="text-gray-400 text-sm">Copyright © 2025. All Rights Reserved.</p>
          </div>

          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider">Writing</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog?category=reflections" className="text-gray-300 hover:text-white transition-colors">
                  Reflections
                </Link>
              </li>
              <li>
                <Link href="/blog?category=stories" className="text-gray-300 hover:text-white transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/blog?category=poetry" className="text-gray-300 hover:text-white transition-colors">
                  Poetry
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-gray-300 hover:text-white transition-colors">
                  Archive
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  All Posts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-gray-300 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <Coffee size={16} />
                <span className="text-sm">Buy me a coffee</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Heart size={16} />
                <span className="text-sm">Share with friends</span>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-gray-400 font-semibold mb-4 uppercase tracking-wider">Follow</h5>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
