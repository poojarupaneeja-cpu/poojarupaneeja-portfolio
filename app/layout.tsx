import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pooja Rupaneeja | Content Writer & Strategist',
  description: 'Interactive portfolio showcasing content writing, brand strategy, and creative work',
  keywords: ['content writing', 'copywriting', 'brand strategy', 'SEO', 'social media'],
  openGraph: {
    title: 'Pooja Rupaneeja | Content Writer & Strategist',
    description: 'Interactive portfolio showcasing content writing, brand strategy, and creative work',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Georgia:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
