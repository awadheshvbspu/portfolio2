import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio'
import {Route,Routes} from 'react-router-dom'
import Contact from './pages/contact/Contact';
import Themes from './component/Themes'

function App() {
  return (
    <>
  <Navbar/>
  <Themes/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='portfolio' element={<Portfolio/>} />
      <Route path='contact' element={<Contact/>}/>
    </Routes>

    </>
  );
}

export default App;
