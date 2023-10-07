import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import "./Hero1.css";

function Hero1() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component is mounted
  }, []);

  return (
    <div className="block hero1 my-auto" style={{ backgroundImage: 'url(https://c0.wallpaperflare.com/preview/245/481/204/bakery-signage-at-night.jpg)' }}>
      <div className="container-fluid text-center">
        <h1 className="display-2 text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0" style={{color:"orangered"}}>
          Fusion Delights
        </h1>
        <p className="lead text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600">
         Enjoy the food !!
        </p>
        <div className="lines" data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100">
          <div className="line"></div>
          <a href="#menu" className="btn-text lead d-inline-block text-white border-top border-bottom mt-4 pt-1 pb-1"
            style={{marginLeft:"2%"}}
            >
            View Today's Menu
          </a>
          <div className="line"></div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default Hero1;
