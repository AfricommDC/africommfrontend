import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Whoweare from './components/Navigation/Whoweare';
import OurModel from './components/Navigation/OurModel';


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/our-model" element={<OurModel />} />
      </Routes>
    </>
  )
}

export default App
