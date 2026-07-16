import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Whoweare from './components/Navigation/Whoweare';


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/who-we-are" element={<Whoweare />} />
      </Routes>
    </>
  )
}

export default App
