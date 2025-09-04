import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RotatingBanner } from "@/components/rotating-banner"
import { BackToTop } from "@/components/back-to-top"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <RotatingBanner />

      <main className="flex-1">
        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">
            <div className="flex justify-center p-4 order-1 lg:order-2">
              <img
                src="/3d-isometric-japanese-cultural-scene-with-ramen-bo.png"
                alt="Creative writing illustration"
                className="w-4/5 hover:scale-105 transition-transform duration-500 animate-float m-0"
              />
            </div>
            
            <div className="space-y-8 animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-5xl font-black text-white relative tracking-wider" style={{textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000, 10px 10px 0 #000, 12px 12px 0 #000, 14px 14px 0 #000, 16px 16px 20px rgba(0,0,0,0.9)', WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
                Stories, <br className="hidden lg:block" />
                Reflections & <br className="hidden lg:block" />
                Poetry for the Soul
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                A personal space for sharing thoughts, experiences, and creative expressions that resonate with young
                hearts and minds.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Link href="/blog">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 transform" suppressHydrationWarning>
                    START READING
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-5xl font-black text-white relative tracking-wider" style={{textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000, 10px 10px 0 #000, 12px 12px 0 #000, 14px 14px 0 #000, 16px 16px 20px rgba(0,0,0,0.9)', WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>WRITING STYLES</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Reflections Card - Tokyo Tower with Cherry Blossoms */}
              <div className="relative h-96 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-left group">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/tokyo-tower-surrounded-by-beautiful-pink-cherry-bl.png")',
                  }}
                />
                {/* Soft fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text content positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-wide">REFLECTIONS</h3>
                  <p className="text-base opacity-90 font-light">deep thoughts on life and growth</p>
                </div>
              </div>

              {/* Stories Card - Sushi on Wooden Board */}
              <div className="relative h-96 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up group">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/beautiful-japanese-sushi-rolls-on-wooden-board--fr.png")',
                  }}
                />
                {/* Soft fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text content positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-wide">STORIES</h3>
                  <p className="text-base opacity-90 font-light">personal experiences and adventures</p>
                </div>
              </div>

              {/* Poetry Card - Woman in Kimono with Red Umbrella */}
              <div className="relative h-96 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-right group">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/person-in-traditional-japanese-kimono-holding-red-.png")',
                  }}
                />
                {/* Soft fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text content positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-wide">POETRY</h3>
                  <p className="text-base opacity-90 font-light">creative expressions and emotions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto h-full">
            <div className="grid lg:grid-cols-5 gap-12 items-stretch h-full">
            <div className="lg:col-span-2 relative animate-fade-in-left h-full">
              <Link href="/blog/finding-beauty-in-everyday-moments">
                <div
                  className="rounded-3xl overflow-hidden w-full h-full hover:shadow-2xl transition-all duration-300 relative flex items-end cursor-pointer"
                  style={{
                    backgroundImage: 'url("/cozy-reading-nook-with-warm-lighting-books-and-co.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark translucent overlay */}
                  <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-all duration-300" />

                  {/* Text positioned at bottom-left using flexbox */}
                  <div className="relative z-10 p-8 text-white">
                    <h3 className="text-4xl font-bold mb-2">FEATURED POST</h3>
                    <p className="text-xl opacity-90">Finding Beauty in Everyday Moments</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right side - Recent posts grid */}
            <div className="lg:col-span-3 animate-fade-in-right h-full flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold mb-12">RECENT POSTS</h2>

              <div className="grid grid-cols-2 gap-4 flex-1">
                {/* Recent Post 1 - Reflection */}
                <Link href="/blog?category=reflections">
                  <div className="bg-gray-900 rounded-2xl p-4 flex items-center gap-4 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer animate-bounce-in">
                    <div className="text-pink-400 hover:text-pink-600 text-3xl hover:scale-125 transition-all duration-200">
                      💭
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">REFLECTION</h4>
                      <p className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300">
                        On Growing Up
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Recent Post 2 - Story */}
                <Link href="/blog?category=stories">
                  <div
                    className="bg-gray-900 rounded-2xl p-4 flex items-center gap-4 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer animate-bounce-in"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="text-blue-400 hover:text-blue-600 text-3xl hover:scale-125 transition-all duration-200">
                      📖
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">STORY</h4>
                      <p className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300">
                        Summer Adventures
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Recent Post 3 - Poetry */}
                <Link href="/blog?category=poetry">
                  <div
                    className="bg-gray-900 rounded-2xl p-4 flex items-center gap-4 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer animate-bounce-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="text-purple-400 hover:text-purple-600 text-3xl hover:scale-125 transition-all duration-200">
                      🎭
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">POETRY</h4>
                      <p className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300">
                        Midnight Thoughts
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Recent Post 4 - Archive */}
                <Link href="/archive">
                  <div
                    className="bg-gray-900 rounded-2xl p-4 flex items-center gap-4 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer animate-bounce-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="text-yellow-400 hover:text-yellow-600 text-3xl hover:scale-125 transition-all duration-200">
                      📚
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">ARCHIVE</h4>
                      <p className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300">
                        All Posts
                      </p>
                    </div>
                  </div>
                </Link>

                {/* View All Posts - spans 2 columns */}
                <Link
                  href="/blog"
                  className="col-span-2 bg-gray-700 rounded-2xl p-6 text-center hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer animate-bounce-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <h4 className="font-bold mb-1">VIEW ALL</h4>
                  <p className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300">POSTS</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-6 py-16">
          <NewsletterSignup />
        </section>
      </main>

      <BackToTop />
      <Footer />
    </div>
  )
}
