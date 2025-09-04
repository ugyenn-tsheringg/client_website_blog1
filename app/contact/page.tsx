import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 flex">
        <div className="flex-1 bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 flex items-center justify-center p-8 animate-fade-in-left">
          <div className="max-w-md text-black animate-slide-in-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">Let's Connect</h1>
            <div className="space-y-4 text-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p>Share your thoughts, stories, and feedback</p>
              <p>I'd love to hear from you and connect</p>
              <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📧</span>
                </div>
                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📱</span>
                </div>
                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black flex items-center justify-center p-8 animate-fade-in-right">
          <div className="w-full max-w-md">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
              <p className="text-gray-400 mb-8">Send me a message and I'll get back to you soon</p>

              <form className="space-y-6">
                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-purple-500/20 hover:border-gray-600 transition-all duration-300"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-purple-500/20 hover:border-gray-600 transition-all duration-300"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-purple-500/20 hover:border-gray-600 transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="feedback">Feedback on a post</option>
                    <option value="collaboration">Collaboration inquiry</option>
                    <option value="question">General question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me what's on your mind..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-purple-500/20 hover:border-gray-600 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Send Message
                </button>

                <div className="text-center text-sm text-gray-400 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                  I typically respond within 24-48 hours
                </div>

                <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  <p className="text-sm text-gray-400 mb-2">Or connect with me on social media:</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-200"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-200"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-300 hover:scale-110 transition-all duration-200"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
