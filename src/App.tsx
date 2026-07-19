import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Whoweare from './components/Navigation/Whoweare';
import OurModel from './components/Navigation/OurModel';
import ContactUs from './components/Navigation/ContactUs';
import Volunteer from './components/Footerheadline/Volunteer';




function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/our-model" element={<OurModel />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </>
  )
}

export default App
