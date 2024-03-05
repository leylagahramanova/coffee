import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experience from './components/mainpage/Experience';
import Lux from './components/mainpage/Luxury';
import Prod from './components/mainpage/Products';
import Comments from './components/mainpage/Comments';
import Touch from './components/mainpage/Touch'
import Mind from './components/mainpage/Mind';
import Footer from './components/mainpage/Footer';
function App() {

  return (
    <div className='App'>
      <Experience />


      <Lux />

      <Prod />
      <Comments/>
      <Touch/>
      <Mind/>
      <Footer/>
    </div>
  )
}

export default App
