import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

type PageLayoutProps = {
  title: string
  children: ReactNode
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <header className="border-b border-gray-800 bg-dark-section">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white uppercase tracking-tight hover:text-accent transition-colors">
            Jæren Multiservice
          </Link>
          <Link
            to="/#befaring"
            className="text-accent font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-section"
          >
            Få befaring
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <div className="border-l-4 border-accent pl-6 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              {title}
            </h1>
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
