import Header from './components/header'
import './App.css'
import Hero from './pages/hero'
import Specials from './pages/specials'
import Reviews from './pages/reviews'
import Events from './pages/events'
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
      <Events />
      <Contact />
      <Footer />
    </>
  )
}

export default App
