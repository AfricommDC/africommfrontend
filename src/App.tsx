import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Whoweare from './components/Navigation/Whoweare';
import OurModel from './components/Navigation/OurModel';
import ContactUs from './components/Navigation/ContactUs';
import Volunteer from './components/Footerheadline/Volunteer';
import Donations from './components/Navigation/Donations';
import SexualHealth from './components/Navigation/CommunityImpact/SexualHealth';
import ChildrenSafety from './components/Navigation/CommunityImpact/ChildrenSafety';



function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/our-model" element={<OurModel />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donations" element={<Donations />} />

        <Route path="/sexual-health-reproductive-rights" element={<SexualHealth />} />
        <Route path="/childrens-online-safety" element={<ChildrenSafety />} />
      </Routes>
    </>
  )
}

export default App
