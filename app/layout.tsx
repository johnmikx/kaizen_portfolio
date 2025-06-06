import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Mike Asuncion | Portfolio',
  description: 'Personal website showcasing the work and projects of John Mike Asuncion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}