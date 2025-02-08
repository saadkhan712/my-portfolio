import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Resume } from "./pages/Resume";
import './App.css';
import { Home } from "./pages/Home";
import Navbar from './COMPONENTS/Navbar';
import Footer from './COMPONENTS/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Certificate from './pages/certificate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/saadkhan-resume' element={<Resume/>}/>
          <Route path='/about-saadkhan' element={<About/>} />
          <Route path='/certificates' element={<Certificate/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
