import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Taka - Platform',
  description: 'Premium B2B Management Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Sidebar />
        <div className="main-content">
          <Header />
          <main className="p-8 bg-neutral min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
