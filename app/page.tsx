import { Inter } from 'next/font/google'
import Start from './components/start/Start'
import Header from './components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Start />
    </main>
  )
}
