//import the router libraries
import { Routes, Route } from 'react-router-dom'
import './App.css'

//import the Navbar component
import Navbar from './components/Navbar';

// import the pages
import About from './pages/about';
import Home from './pages/home';
import Experience from './pages/experience';
import Activities from './pages/activities';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  )
}

export default App
