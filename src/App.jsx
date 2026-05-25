
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
