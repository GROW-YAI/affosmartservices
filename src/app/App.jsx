import AboutInnovator from '../components/About/AboutInnovator'
import AboutProduct from '../components/About/AboutProduct'
import ContactForm from '../components/ContactForm'
import FarmlandsVideo from '../components/Farmers/FarmlandsVideo'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductShowCase from '../components/Products/ProductShowCase'
import WhatsAppFloating from '../components/whatsapp/WhatsAppFloating'


const App = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <AboutProduct />
        <ProductShowCase />
        <FarmlandsVideo/>
        <AboutInnovator />
        <ContactForm />
        <Footer />
      </div>
        {/* Floating chat (place at the end so it overlays page) */}
      <WhatsAppFloating/>
    </div>
  )
}

export default App
