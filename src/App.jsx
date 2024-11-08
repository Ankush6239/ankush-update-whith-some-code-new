
import Home from './pages/home'
import About from './pages/about';
import Event from './pages/our_event';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/GrantFoundation/aboutus/" element={<About />} />
    <Route path="/GrantFoundation/Our_events/" element={<Event/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
