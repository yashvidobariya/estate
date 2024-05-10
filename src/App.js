import logo from './logo.svg';
import './App.css';
import Header from './Main/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import statement
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Press from './Component/Press';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Footer from './Main/Footer';
import Details from './Component/Details';
import Pressdet from './Component/Pressdet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Press" element={<Press />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/portfolio/details/:id" element={<Details />} />
          <Route path="/press/details/:id" element={<Pressdet />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
