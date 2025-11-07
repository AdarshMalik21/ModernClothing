import Navbar from './components/navBar/NavBar'
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Browse from './components/pages/Browse'
import Create from './components/pages/Create'
import About from './components/pages/About'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}



export default App
