"use client"
import './globals.css'
import { Provider } from 'react-redux'
import { store } from './store'
import Navbar from '@/components/Navbar'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style jsx global>{`
        html {
          font-family: ${comfortaa.style.fontFamily};
        }
      `}</style>
      <body>
        <Provider store={store}>
      <Navbar/>
          {children}
          </Provider>
      </body>
    </html>
  )
}
