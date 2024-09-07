import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "../public/style.css";
import Image from "next/image";
import Link from "next/link";

const CateSlider = () => {
  const imgArray = [
    { src: "/Images/locationImg/1.png", city: "amaravati" },
    { src: "/Images/locationImg/2.png", city: "itanagar" },
    { src: "/Images/locationImg/3.png", city: "dispur" },
    { src: "/Images/locationImg/4.png", city: "patna" },
    { src: "/Images/locationImg/5.png", city: "raipur" },
    { src: "/Images/locationImg/6.png", city: "goa" },
    { src: "/Images/locationImg/7.png", city: "gandhinagar" },
    { src: "/Images/locationImg/8.png", city: "chandigarh" },
    { src: "/Images/locationImg/9.png", city: "shimla" },
    { src: "/Images/locationImg/10.png", city: "ranchi" },
    { src: "/Images/locationImg/11.png", city: "bengaluru" },
    { src: "/Images/locationImg/12.png", city: "thiruvananthapuram " },
    { src: "/Images/locationImg/13.png", city: "bhopal" },
    { src: "/Images/locationImg/14.png", city: "mumbai" },
    { src: "/Images/locationImg/15.png", city: "imphal" },
    { src: "/Images/locationImg/16.png", city: "shillong" },
    { src: "/Images/locationImg/17.png", city: "aizawl" },
    { src: "/Images/locationImg/18.png", city: "kohima" },
    { src: "/Images/locationImg/19.png", city: "bhubaneswar" },
    { src: "/Images/locationImg/20.png", city: "chandigarh " },
    { src: "/Images/locationImg/21.png", city: "jaipur" },
    { src: "/Images/locationImg/22.png", city: "gangtok" },
    { src: "/Images/locationImg/23.png", city: "chennai" },
    { src: "/Images/locationImg/24.png", city: "hyderabad" },
    { src: "/Images/locationImg/25.png", city: "agartala" },
    { src: "/Images/locationImg/26.png", city: "lucknow" },
    { src: "/Images/locationImg/27.png", city: "dehradun " },
    { src: "/Images/locationImg/28.png", city: "kolkata" },
  ];

  return (
    <div className="w-full flex justify-center min-h-[60vh] mt-56 lg:mt-6">
      <div className="cate-wrapper h-full w-[95%] lg:w-[85%] p-2 overflow-hidden">
        <h1 className="text font-Barlow text-lg uppercase mb-4">Pick your Destination</h1>
        <div className="sliderBox mt-8 w-full h-[340px] mb-12 swiper4">
          <Swiper
            slidesPerView="auto"
            grid={{
              rows: 2,
            }}
            navigation={true}
            spaceBetween={10}
            modules={[Grid, Navigation]}
            className="mySwiper"
          >
            {imgArray.map((img, index) => (
              <SwiperSlide key={index}>
                <Link href={`/explore?city=${img.city}`}>
                  <Image fill className="object-contain cursor-pointer" src={img.src} alt={`Image ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CateSlider;
