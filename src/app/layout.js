import { Inter } from 'next/font/google'
import './globals.css'
import './globalicons.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeContextprovider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev_Blog',
  description: 'Blog app created using nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextprovider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  <div className="children">
                    {children}
                  </div>
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextprovider>
        </AuthProvider>
      </body>
    </html>
  )
}
