import Information from './components/Information'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='wrapper bg-secondary-subtle text-white mx-auto shadow-md'>
      <Information />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}
