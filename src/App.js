import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Work = lazy(() => import('./components/Work/Work'));

const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/"> 
        <MemoizedHeader />
        <Suspense fallback={<div className="viewport-filler"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <MemoizedFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;