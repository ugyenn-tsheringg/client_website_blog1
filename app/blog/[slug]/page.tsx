import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReadingProgress } from "@/components/reading-progress"
import { BackToTop } from "@/components/back-to-top"
import Link from "next/link"

export async function generateStaticParams() {
  return [
    { slug: 'finding-beauty-in-everyday-moments' },
    { slug: 'summer-adventures' },
    { slug: 'midnight-thoughts' },
    { slug: 'art-of-letting-go' },
    { slug: 'coffee-shop-chronicles' },
    { slug: 'whispers-of-heart' }
  ]
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Sample post data - in a real app this would come from a CMS or database
  const post = {
    id: 1,
    title: "Finding Beauty in Everyday Moments",
    content: `
      <p>Sometimes the most profound experiences come from the simplest observations. Today, as I sat by my window with a cup of coffee, I watched the morning light dance across the walls of my room. There was something magical about that moment—the way the shadows shifted, the warmth of the sun on my face, the quiet hum of the world waking up.</p>

      <p>We often rush through our days, chasing deadlines and dreams, forgetting to pause and appreciate the small miracles that surround us. The laughter of children playing in the distance, the way leaves rustle in the wind, the smile of a stranger on the street—these moments are gifts, waiting to be unwrapped by those who take the time to notice.</p>

      <h2>The Art of Mindful Living</h2>

      <p>Mindfulness isn't just a buzzword or a meditation technique; it's a way of being present in your own life. It's about recognizing that this moment, right now, is the only one we truly have. The past is a memory, the future is a possibility, but the present is where life actually happens.</p>

      <p>I've learned that beauty isn't always found in grand gestures or extraordinary events. More often, it's hidden in the ordinary—in the steam rising from your morning tea, in the way your pet looks at you with unconditional love, in the satisfaction of completing a small task.</p>

      <h2>Cultivating Gratitude</h2>

      <p>Gratitude has become my daily practice. Not the forced kind that feels like homework, but the genuine appreciation that bubbles up when you really pay attention to your life. I keep a small notebook where I jot down three things that brought me joy each day. Some days it's big things—a promotion, a call from an old friend, a beautiful sunset. Other days it's smaller—the perfect temperature of my shower, finding a good parking spot, or the way my favorite song came on the radio at just the right moment.</p>

      <p>This practice has changed how I see the world. Instead of focusing on what's missing or what's wrong, I find myself naturally noticing what's working, what's beautiful, what's worth celebrating.</p>

      <h2>The Ripple Effect</h2>

      <p>When we learn to find beauty in everyday moments, something interesting happens—we start to create more of those moments for others. A genuine compliment, a patient response when someone is struggling, a moment of real listening—these small acts of kindness ripple outward in ways we may never fully know.</p>

      <p>So here's my invitation to you: tomorrow morning, before you check your phone or rush into your day, take five minutes to just be. Look around. Notice something beautiful. Feel grateful for something small. Let yourself be present in your own life.</p>

      <p>Because the truth is, life isn't waiting for us to achieve our biggest dreams to become beautiful. It's beautiful right now, in this moment, in ways both big and small. We just have to remember to look.</p>
    `,
    category: "reflections",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/tokyo-tower-surrounded-by-beautiful-pink-cherry-bl.png",
    author: "Your Name",
  }

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
      <ReadingProgress />
      <Header />

      <main className="flex-1">
        {/* Post Content */}
        <article className="container mx-auto px-6 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 animate-fade-in">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">Post</span>
          </nav>
          {/* Post Header */}
          <header className="mb-12 animate-fade-in-up">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{getCategoryIcon(post.category)}</span>
              <span
                className={`text-sm font-semibold uppercase tracking-wide px-3 py-1 border rounded-full ${getCategoryColor(post.category)}`}
              >
                {post.category}
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">{post.title}</h1>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm">✍️</span>
                </div>
                <span>By {post.author}</span>
              </div>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">1.2k views</span>
            </div>


          </header>

          {/* Post Content */}
          <div
            className="prose prose-invert prose-xl max-w-none animate-fade-in-up text-justify"
            style={{ animationDelay: "0.2s" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post Navigation */}
          <nav className="mt-16 pt-8 border-t border-gray-800 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <Link
                href="/blog/previous-post"
                className="group flex items-center gap-4 p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">←</div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Previous Post</div>
                  <div className="font-semibold">The Art of Letting Go</div>
                </div>
              </Link>

              <Link
                href="/blog/next-post"
                className="group flex items-center gap-4 p-6 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 md:flex-row-reverse"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">→</div>
                <div className="md:text-right">
                  <div className="text-sm text-gray-400 mb-1">Next Post</div>
                  <div className="font-semibold">Summer Adventures</div>
                </div>
              </Link>
            </div>
          </nav>

          {/* Related Posts */}
          <section className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/related-1" className="group">
                <article className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/beautiful-japanese-sushi-rolls-on-wooden-board--fr.png"
                      alt="Related post"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span>💭</span>
                      <span className="text-sm font-semibold text-pink-400">REFLECTIONS</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Mindful Mornings</h3>
                    <p className="text-gray-400 text-sm">
                      How starting your day with intention can transform your entire life...
                    </p>
                  </div>
                </article>
              </Link>

              <Link href="/blog/related-2" className="group">
                <article className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/person-in-traditional-japanese-kimono-holding-red-.png"
                      alt="Related post"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span>🎭</span>
                      <span className="text-sm font-semibold text-purple-400">POETRY</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Seasons of Change</h3>
                    <p className="text-gray-400 text-sm">
                      A collection of verses about growth, transformation, and new beginnings...
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <BackToTop />
      <Footer />
    </div>
  )
}