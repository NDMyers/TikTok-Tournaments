import './globals.css'
import { Boogaloo, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const boogaloo = Boogaloo({ weight:'400', subsets: ['latin'] })

export const metadata = {
  title: 'TikTok Pets',
  description: 'A TikTok pet video tournament bracket!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
