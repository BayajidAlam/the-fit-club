import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
const Hero = () => {
  return (
      <div className="hero">
          <div className="left-h">
            <Header/>

          {/* the best add  */}
            <div className="the-best-ad">
              <div></div>
              <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>
          
          </div>
          <div className="right-h">
            right side
          </div>
      </div>
  )
}

export default Hero