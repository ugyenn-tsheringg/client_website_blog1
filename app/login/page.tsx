import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 flex">
        {/* Left side - Purple gradient with content */}
        <div className="flex-1 bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 flex items-center justify-center p-8 animate-fade-in-left">
          <div className="max-w-md text-black animate-slide-in-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">Learn Japanese</h1>
            <div className="space-y-4 text-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p>Japanese Scripts, Time expressions</p>
              <p>Fun challenges & study resources</p>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex-1 bg-black flex items-center justify-center p-8 animate-fade-in-right">
          <div className="w-full max-w-md">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-2">Log In</h2>
              <p className="text-gray-400 mb-8">Enter your details to access your account</p>

              <form className="space-y-6">
                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
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

                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-purple-500/20 hover:border-gray-600 transition-all duration-300"
                  />
                </div>

                <div className="text-right animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white hover:underline transition-all duration-200"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  Log in
                </button>

                <div className="text-center text-sm text-gray-400 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-white hover:underline hover:text-purple-300 transition-colors duration-200"
                  >
                    Sign up
                  </a>
                </div>

                <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white hover:underline transition-all duration-200"
                  >
                    Forgot password?
                  </a>
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
