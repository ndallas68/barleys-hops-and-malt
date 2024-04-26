import Header from './components/header'
import './App.css'
import Hero from './pages/hero'
import Specials from './pages/specials'
import About from './pages/about'
import Favorites from './pages/favorites'
import Reviews from './pages/reviews'
import MenuCard from './pages/MenuCard'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Favorites />
      <MenuCard />
      <Reviews />
      <Contact />
      <About />
      <Footer />
    </>
  )
}

export default App
