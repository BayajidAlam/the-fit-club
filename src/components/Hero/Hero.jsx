import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      {/* left side */}
      <div className="left-h">
        <Header />

        {/* the best add  */}
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* hero heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures  */}
        <div className="figures">
            <div>
              <span>+140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+978</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+50</span>
              <span>FITNESS PROGRAMS</span>
            </div>
        </div>
        {/* hero buttons  */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
