import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Bali's Movie Recommendations | Personal Curated Film Collection",
  description: "Discover exceptional films curated by Bali across different moods and genres. From heartwarming stories to mind-bending thrillers, find your next favorite movie.",
  keywords: "movie recommendations, film curation, movie reviews, cinema, bollywood, hollywood, tamil movies",
  authors: [{ name: "Bali" }],
  creator: "Bali",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  openGraph: {
    title: "Bali's Movie Recommendations",
    description: "Personal curated collection of exceptional films across different moods and genres",
    type: "website",
    locale: "en_US",
    siteName: "Bali's Movie Recommendations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali's Movie Recommendations",
    description: "Personal curated collection of exceptional films across different moods and genres",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}