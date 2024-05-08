import Header from './components/header'
import './App.css'
import Hero from './pages/hero'
import Specials from './pages/specials'
import Reviews from './pages/reviews'
import MenuCard from './pages/MenuCard'
import Contact from './pages/contact'
import Footer from './components/footer'
import FoodCarousel from './pages/FoodCarousel'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <FoodCarousel />
      <MenuCard />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
