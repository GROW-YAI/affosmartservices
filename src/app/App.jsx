import AboutInnovator from '../components/About/AboutInnovator'
import AboutProduct from '../components/About/AboutProduct'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductShowCase from '../Products/ProductShowCase'

const App = () => {

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Navbar />
      <Hero />
      <AboutProduct />
      <AboutInnovator />
      <ProductShowCase />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
