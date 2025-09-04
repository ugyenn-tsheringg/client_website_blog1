import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ChaptersPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        {/* Chapter 1: Hiragana */}
        <section className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-red-500 text-3xl hover:scale-125 transition-transform duration-300">⛩</div>
            <h1 className="text-3xl lg:text-4xl font-bold">Chapter 1: Hiragana</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-bold mb-2">Level {i + 1}</h3>
                <p className="text-gray-400 text-sm">Not Attempted</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 2: Katakana */}
        <section className="mb-16 animate-fade-in-left">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-3xl hover:scale-125 transition-transform duration-300">🍱</div>
            <h1 className="text-3xl lg:text-4xl font-bold">Chapter 2: Katakana</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-bold mb-2">Level {i + 1}</h3>
                <p className="text-gray-400 text-sm">Not Attempted</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 3: Kanji */}
        <section className="mb-16 animate-fade-in-right">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-red-500 text-3xl hover:scale-125 transition-transform duration-300">🏮</div>
            <h1 className="text-3xl lg:text-4xl font-bold">Chapter 3: Kanji</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-bold mb-2">Level {i + 1}</h3>
                <p className="text-gray-400 text-sm">Not Attempted</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 4: Time */}
        <section className="animate-slide-in-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-3xl hover:scale-125 transition-transform duration-300">🦉</div>
            <h1 className="text-3xl lg:text-4xl font-bold">Chapter 4: Time</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-bold mb-2">Level {i + 1}</h3>
                <p className="text-gray-400 text-sm">Not Attempted</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
