import React from 'react';

import "../../App.css";
import "./Hero2.css";

function Hero2({subTitle}) {
  return (
    <div className="block hero2 my-auto" style={{ backgroundImage: 'url(https://c0.wallpaperflare.com/preview/245/481/204/bakery-signage-at-night.jpg)' }}>
    <div className="container-fluid2 text-center">
    <h1 className="display-2 text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0" style={{color:"orangered"}}>
      Fusion Delights
    </h1>
    <p className="lead text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="600" style={{color:"white"}}>
      {subTitle ? subTitle : "We are closed for the moment, but we will still deliver food at your place!"}
    </p>
    </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default Hero2;
