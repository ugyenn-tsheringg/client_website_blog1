import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Hello, I'm a <br className="hidden lg:block" />
                Storyteller
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Welcome to my corner of the internet, where thoughts become words, experiences transform into stories,
                and emotions find their voice through poetry.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-pink-900/30 border border-pink-400 rounded-full text-pink-400 text-sm">
                  💭 Reflective Writer
                </span>
                <span className="px-4 py-2 bg-blue-900/30 border border-blue-400 rounded-full text-blue-400 text-sm">
                  📖 Story Enthusiast
                </span>
                <span className="px-4 py-2 bg-purple-900/30 border border-purple-400 rounded-full text-purple-400 text-sm">
                  🎭 Poetry Lover
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                <img
                  src="/person-in-traditional-japanese-kimono-holding-red-.png"
                  alt="About me illustration"
                  className="max-w-full h-auto rounded-3xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center animate-fade-in">My Story</h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 animate-slide-in-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Writing has always been my way of making sense of the world. What started as scribbled thoughts in
                  notebook margins has evolved into this space where I share the moments, insights, and emotions that
                  shape who I am.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe that our individual experiences, when shared authentically, become universal truths that
                  connect us all. Through reflections on daily life, stories from my journey, and poetry that captures
                  fleeting emotions, I hope to create a bridge between my world and yours.
                </p>
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <p className="text-lg text-gray-300 leading-relaxed">
                  This blog is more than just a collection of posts—it's a living diary of growth, discovery, and the
                  beautiful messiness of being human. Whether you're here for the stories that make you laugh, the
                  reflections that make you think, or the poetry that makes you feel, I'm grateful you've chosen to be
                  part of this journey.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not writing, you'll find me exploring new places, having deep conversations with friends, or
                  simply sitting quietly with a cup of coffee, observing the world around me.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Philosophy Section */}
        <section className="bg-gray-900/50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 animate-fade-in">My Writing Philosophy</h2>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="animate-bounce-in" style={{ animationDelay: "0.1s" }}>
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold mb-4">Authentic Growth</h3>
                  <p className="text-gray-400">
                    I write about real experiences, honest struggles, and genuine moments of joy. Growth isn't always
                    pretty, but it's always worth sharing.
                  </p>
                </div>

                <div className="animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                  <div className="text-4xl mb-4">🌊</div>
                  <h3 className="text-xl font-bold mb-4">Emotional Depth</h3>
                  <p className="text-gray-400">
                    Every piece I write aims to touch something deeper—to move beyond surface-level observations and
                    dive into the emotions that make us human.
                  </p>
                </div>

                <div className="animate-bounce-in" style={{ animationDelay: "0.3s" }}>
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-4">Connection</h3>
                  <p className="text-gray-400">
                    The best writing creates bridges between people. I hope my words help you feel less alone in your
                    own journey and more connected to the shared human experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center animate-fade-in">A Few Fun Facts</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-slide-in-left">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">☕</span>
                  Coffee Ritual
                </h3>
                <p className="text-gray-400">
                  I write best in the early morning with a cup of coffee and soft music playing. There's something
                  magical about those quiet hours when the world is still waking up.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-slide-in-right">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  Reading List
                </h3>
                <p className="text-gray-400">
                  I'm always reading at least three books at once—usually a novel, a poetry collection, and something
                  non-fiction. Current favorites include works by Ocean Vuong and Rupi Kaur.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-slide-in-left">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎵</span>
                  Music & Words
                </h3>
                <p className="text-gray-400">
                  Music deeply influences my writing. I create different playlists for different types of pieces— upbeat
                  songs for stories, mellow tunes for reflections, and instrumental music for poetry.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-slide-in-right">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  Wanderlust
                </h3>
                <p className="text-gray-400">
                  Traveling feeds my creativity. Some of my best stories come from unexpected conversations with
                  strangers, quiet moments in new places, and the perspective that comes from stepping outside your
                  comfort zone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="bg-gray-900/50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 animate-fade-in">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
              I love hearing from readers! Whether you want to share your thoughts on a post, suggest a topic, or just
              say hello, I'd love to connect with you.
            </p>

            <div className="flex flex-wrap justify-center gap-6 animate-bounce-in">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300"
              >
                Send a Message
              </a>
              <a
                href="#"
                className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-black hover:scale-105 transition-all duration-300"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
