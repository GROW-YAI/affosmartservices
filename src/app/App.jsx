import AboutInnovator from '../components/About/AboutInnovator'
import AboutProduct from '../components/About/AboutProduct'
import ContactForm from '../components/ContactForm'
import FarmlandsVideo from '../components/Farmers/FarmlandsVideo'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductShowCase from '../components/Products/ProductShowCase'


const App = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <AboutProduct />
        <AboutInnovator />
        <FarmlandsVideo/>
        <ProductShowCase />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
