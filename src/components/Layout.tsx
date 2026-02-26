import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  fullWidth?: boolean
}

export default function Layout({ children, fullWidth = false }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      {fullWidth ? (
        children
      ) : (
        <div className="w-full max-w-6xl mx-auto px-6">
          {children}
        </div>
      )}
    </div>
  )
}
