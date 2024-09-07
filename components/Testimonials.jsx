"use client";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const label = { inputProps: { "aria-label": "Helpful" } };

const Testimonials = () => {
  const quotes = [
    {
      text: "My stay was nothing short of exceptional, as the booking process was seamlessly integrated into the website, and the hotel provided a level of comfort and service that truly exceeded all my expectations.",
      img: "/Images/person.png",
      name: "Aarav Patel",
    },
    {
      text: "From the moment I booked my stay through the user-friendly website, I was impressed with the hotel's outstanding service and attention to detail, ensuring a memorable and comfortable experience",
      img: "/Images/person.png",
      name: "Ananya Singh",
    },
    {
      text: "From the instant I made my reservation on the easy-to-navigate website, I was struck by the hotel's exceptional service and meticulous attention to detail, which made for a memorable and comfortable stay.",
      img: "/Images/person.png",
      name: "Bhuvan",
    },
    {
      text: "The attentive staff and comfortable accommodations greatly enhanced my stay, providing a level of service that was both welcoming and thoroughly enjoyable.",
      img: "/Images/person.png",
      name: "Isha Gupta",
    },
    {
      text: "With its high standards of service and exceptional comfort, the hotel ensured a stay that was both relaxing and memorable, exceeding all my expectations.",
      img: "/Images/person.png",
      name: "Vihaan Rao",
    },
    {
      text: "The superb service and luxurious accommodations provided by the hotel ensured a highly satisfying visit, making my stay a truly enjoyable and comfortable experience.",
      img: "/Images/person.png",
      name: "Arjun Mehta",
    },
  ];

  <style>
    img{

    }
  
  </style>

  let data = [...quotes];
  return (
    <div className="testimonial-section pb-12 flex justify-center text-white pt-12 min-h-[70vh] w-full bg-[#1C2534]">
      <div className="w-[85%]">
        <h1 className="text-[40px] md:text-[64px]  font-primaryBold tracking-tight border-b-2 border-white border-opacity-20 pb-2  leading-[44px] md:leading-[70px]  mb-20 sm:mb-20 md:w-[60%]">
          What Our <br /> Customers Say
        </h1>
        <div className="customers min-h-[50%] flex items-center  ">
          <div className="wrapper flex gap-10 swiper2">
            <Swiper
              slidesPerView='auto'
              navigation={true}
              spaceBetween={30}
              freeMode={true}
              modules={[Navigation]}
              mousewheel={{ releaseOnEdges: true }}
              className="mySwiper"
              touchEventsTarget="container"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="box h-72 w-[95%] sm:w-full p-4 bg-[#263042]">
                    <div className="text h-[75%] w-full border-b-[0.7px] border-solid border-gray-300 border-opacity-35 pt-14 ">
                      <p className=" text-sm opacity-[0.8]">{item.text}</p>
                    </div>

                    <div className="text h-[25%] flex items-center pt-4 justify-between">
                      <div className="flex gap-4 items-center">
                        <div className="image h-8 w-8 rounded-full overflow-hidden">
                          <Image className="h-full w-full object-cover" width={20} height={20}  src={item.img} alt="" />
                        </div>
                        <p className="name text-xs font-primaryLight">{item.name}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <Checkbox {...label} icon={<FavoriteBorder className="text-white opacity-[0.8]" />} checkedIcon={<Favorite />} />
                        <p className="text-xs opacity-[0.7]">Helpful</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
