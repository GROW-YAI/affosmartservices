import AboutProduct from '../components/About/AboutProduct'
import Navbar from '../components/Navbar'

const App = () => {

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Navbar />
      <AboutProduct />
    </div>
  )
}

export default App
