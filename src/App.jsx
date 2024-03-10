 
import React, {useState} from 'react'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Experience from './components/mainpage/Experience';
import Lux from './components/mainpage/Luxury';
import ZigZag from './components/mainpage/ZigZag'
import Prod from './components/mainpage/Products';
import Comments from './components/mainpage/Comments';
import Touch from './components/mainpage/Touch'
import Mind from './components/mainpage/Mind';
import Footer from './components/mainpage/Footer';
import { AiOutlineArrowUp } from 'react-icons/ai';

function App() {

  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return (
    <div className='container'>
      <Experience />
      {/* <ZigZag/> */}

      <Lux />
      <Prod />
      <Comments/>
      <Touch/>
      <Mind/>
      <div className="ttt" style={{ display: visible ? 'block' : 'none' }}>
            <button>
              <AiOutlineArrowUp style={{ fontSize: '250%' }} onClick={scrollToTop} />
            </button>
          </div>
      <Footer/>
    </div>
  )
}

export default App
