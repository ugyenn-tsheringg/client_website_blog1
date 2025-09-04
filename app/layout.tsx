import type React from "react"
import type { Metadata } from "next"
import { Outfit, Sacramento } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sacramento",
})

export const metadata: Metadata = {
  title: "Personal Blog - Stories & Reflections",
  description: "A personal space for sharing thoughts, experiences, and creative expressions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${outfit.variable} ${sacramento.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
