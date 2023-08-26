import Image from 'next/image'
import HeroSection from './components/heroSection/HeroSection'
import Header from './components/header/Header'
import SubMsg from './components/subMsg/SubMsg'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SubMsg />
    </main>
  )
}
