import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


const Hero =()=>{
    return(
        <div className="hero">
        <Swiper className="mySwiper">
            <SwiperSlide>
                <div className="card">
                    <div className="teksHero">
                        <h1>Real Gaming Takes <br />the Stages</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus maxime reprehenderit iure, molestiae omnis debitis voluptatibus quae consectetur voluptatum.</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card2">
                    <div className="teksHero">
                        <h1>A Man Chooses, <br />a slave obeys</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deleniti. Eius mollitia excepturi cupiditate reiciendis repudiandae, nobis sunt hic quibusdam.</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
        </div>
    )
}

export default Hero