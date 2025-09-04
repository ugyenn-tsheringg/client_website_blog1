import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold animate-pulse-glow">LEADERBOARD</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-8 px-6 py-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300 animate-slide-in-up">
            <div className="text-left font-semibold">Rank</div>
            <div className="text-center font-semibold">Player</div>
            <div className="text-right font-semibold">Lessons</div>
          </div>

          <div className="text-center py-16 text-gray-400 animate-fade-in">
            <div className="mb-8 text-6xl animate-float">🏆</div>
            <p className="text-lg mb-4 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              No players on the leaderboard yet.
            </p>
            <p className="text-sm mb-8 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
              Complete lessons to appear here!
            </p>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: "0.6s" }}
            >
              Start Learning
            </button>
          </div>

          <div className="space-y-2 opacity-30">
            {[
              { rank: 1, name: "Sample Player 1", lessons: 45 },
              { rank: 2, name: "Sample Player 2", lessons: 38 },
              { rank: 3, name: "Sample Player 3", lessons: 32 },
            ].map((player, index) => (
              <div
                key={player.rank}
                className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-left flex items-center gap-2">
                  <span className="text-yellow-500 font-bold">#{player.rank}</span>
                  {player.rank === 1 && <span className="text-yellow-500">👑</span>}
                </div>
                <div className="text-center">{player.name}</div>
                <div className="text-right font-semibold">{player.lessons}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
