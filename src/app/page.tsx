import Image from 'next/image'
import HeroSection from './components/heroSection/HeroSection'
import Header from './components/header/Header'
import Slider from './components/marquee/Marqueee'
import Form from './components/form/Formm'


export default function Home() {
  return (
    <main>
      <Slider/>
      <Header />
      <HeroSection />
      <Form/>
      
    </main>
  )
}
