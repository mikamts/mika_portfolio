import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

    let component 
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/About":
            component = <About />
            break
        case "/Contact":
            component = <Contact />
            break
    }

    return (
     <>
        <Navbar />
        <div className="container">{component}</div>
    </>
  );
}

export default App;
