import React from 'react'

function Mind() {
  return (
    <div className="mind">
        <div className='mind-container'>
        <h2>COFFEE BULD YOUR<br></br>FRESH MIND</h2>
        <div className="subscribe-form">
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter Your Email"
          style={{
            width: '503px',
            height: '115px',
            border: '1px solid #000',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '54px',
            textAlign: 'center',
            borderRadius:'10px',
            backgroundColor: '#000',
          }}
        />
        <button
          style={{
            width: '365px', 
            height: '115px',
            backgroundColor: '#512615',
            border: 'none',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '54px',
            textAlign: 'center',
            color: '#FFF',
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Mind