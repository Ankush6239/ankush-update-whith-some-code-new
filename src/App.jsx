
import Home from './pages/home'
import About from './pages/about';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/GrantFoundation/aboutus/" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
