import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hope Foundation - Making a Difference in Our Community',
  description: 'Join us in building a brighter future through education, healthcare, and sustainable development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                Hope Foundation
              </Link>
              <div className="space-x-6">
                <Link href="/" className="text-gray-700 hover:text-primary-600">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-primary-600">About</Link>
                <Link href="/programs" className="text-gray-700 hover:text-primary-600">Programs</Link>
                <Link href="/events" className="text-gray-700 hover:text-primary-600">Events</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Hope Foundation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
