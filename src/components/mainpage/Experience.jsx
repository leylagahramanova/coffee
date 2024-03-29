import React from 'react'
import Navbar from '../../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
function Experience() {
  return (
    <>
          <section className="section"
      ><Router>    <Navbar /></Router>
    
        <div className='experience'>
    <h1>Experience the Finest<br></br> Artisanal Coffee Roasting</h1>
    <p>"Indulge in the Perfect Cup of Perfection"</p>
    <button><a>SHOP NOW</a></button>
  </div>
  </section>
  <div className='description'>
        <div className='white'>
          <p>Non-Volatile Environment Temperatures in Nordic Coffee Roasting Style</p>
          <div className='cups'></div>
        </div>
        <div className='black'>
          <p>Our commitment to excellence begins with the selection of the most extraordinary coffee beans from exclusive plantations around the globe.</p>
        </div>
      </div>
  </>

  )
}

export default Experience