import Image from 'next/image'
import HeroSection from './components/heroSection/HeroSection'
import Header from './components/header/Header'
import Slider from './components/marquee/Marqueee'
import Form from './components/form/Formm'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJEOKqWq6dZfAZYpexMPBf6OVUGHlaHA0",
  authDomain: "silkdev-coming-soon.firebaseapp.com",
  projectId: "silkdev-coming-soon",
  storageBucket: "silkdev-coming-soon.appspot.com",
  messagingSenderId: "889994104678",
  appId: "1:889994104678:web:c18ad4e35a83bde6b742a7",
  measurementId: "G-EVY97VQ3P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
