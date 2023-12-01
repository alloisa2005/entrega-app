import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers/Providers'
import { Inter, Montserrat, Caveat } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  subsets: ['latin'],
  weights: [400, 500, 600, 700],
  variable: '--font-caveat'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: [400, 500, 600, 700],
  variable: '--font-montserrat'    
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Home | GamesWorld',
    template: `%s | GamesWorld`,
  },
  description: 'Video games store',
  keywords: 'nextjs, react, tailwindcss, gameWorld, videogames, ps4, ps5, xbox, nintendo',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${caveat.variable}`}> 
      <Providers>
        <Navbar />
        {children}        
        <Footer />
      </Providers>
      </body>
    </html>
  )
}
