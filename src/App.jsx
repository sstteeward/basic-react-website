import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Content from './Content'

function App() {

  return (
    <>
    <header>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/content">Content </Link>
    </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/content' element={<Content />} />
    </Routes>
    </>
  )
};

export default App;
