import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function Quotes() {  
  return (
    <>
    <Swiper pagination={{
  "dynamicBullets": true
    }} className="mySwiper">
  <SwiperSlide className="Slider">It will lead to a paradox, from which one day useful consequences will be drawn.<br /><div className="Signature">---Gottfried Wilhelm Leibniz</div></SwiperSlide>
  <SwiperSlide className="Slider">La Mathématique est l’art de donner le même nom à des choses différentes.<br /><div className="Signature">---Henri Poincaré</div></SwiperSlide>
  </Swiper>
    </>
  )
}