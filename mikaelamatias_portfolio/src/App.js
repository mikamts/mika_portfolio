import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"

function App() {
    return (
     <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    </>
  );
}

export default App;
