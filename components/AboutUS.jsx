"use client";
import { useState, useEffect, useRef } from "react";
import aboutus from ".././public/Images/aboutUS.png";
import hotel from ".././public/Images/real-estate.svg";
import person from ".././public/Images/person.png";
import map from ".././public/Images/map.png";
import Image from "next/image";

const WhychooseUs = () => {
  const [hotels, setHotels] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [cities, setCities] = useState(0);
  const headingRef = useRef(null);

  const animateValue = (start, end, duration, setValue) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(0, 450, 2000, setHotels);
          animateValue(0, 4, 2000, setCustomers);
          animateValue(0, 300, 2000, setCities);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
  }, []);

  return (
    <div className="min-h-[50vh]  flex justify-center items-center mb-8">
      <div className="wrapper h-1/2 w-[95%] sm:w-[90%] md:w-[85%] md:flex">
        <div className="left md:w-[70%] md:pt-20 lg:pt-32  lg:pl-16">
          <h1 ref={headingRef} className="text-4xl font-primaryBold mb-4">
            Welcome to <span className="text-[#5D0E41] text-[38px]">AVENA</span>
          </h1>
          <p className="opacity-[0.8] mb-4 lg:w-[85%]">
          &quot;Welcome to Avena, your premier destination for booking the perfect stay. Explore our diverse range of accommodations including Apartments, Hotels, Villas, Resorts, Lodges, and Guest Houses tailored to your every need.&quot;
          </p>
          <div className="flex md:mt-14  items-center flex-wrap md:justify-start gap-2 sm:gap-6">
            <div className="h-24 w-28 sm:h-40 sm:w-40  flex flex-col items-center justify-center border-double border-[4px] border-black border-opacity-[0.16] rounded-md">
              <Image src={hotel} alt="" className="scale-[0.6] sm:scale-[0.8] -mb-5 sm:-mb-3 -mt-8 sm:-mt-2  w-[85px]" />
              <h4 className="font-primaryBold sm:text-3xl sm:mt-4">{hotels}+</h4>
              <p className="opacity-[0.8] text-xs font-primaryRegular sm:text-md">Total Properties</p>
            </div>
            <div className="h-24 w-28 sm:h-40 sm:w-40  flex flex-col items-center justify-center border-double border-[4px] border-black border-opacity-[0.16] rounded-md">
              <Image src={map} alt="" className="scale-[0.6] sm:scale-[0.8] -mb-5 sm:-mb-3 -mt-8 sm:-mt-2  " />
              <h4 className="font-primaryBold sm:text-3xl sm:mt-2">{cities}+</h4>
              <p className="opacity-[0.8] text-xs font-primaryRegular md:text-md">Total Locations</p>
            </div>
            <div className="h-24 w-28 sm:h-40 sm:w-40  flex flex-col items-center justify-center border-double border-[4px] border-black border-opacity-[0.16] rounded-md">
              <Image src={person} alt="" className="scale-[0.6] sm:scale-[0.8] -mb-5 sm:-mb-3 -mt-8 sm:-mt-2 " />
              <h4 className="font-primaryBold sm:text-3xl sm:mt-2">{customers}Lakhs+</h4>
              <p className="opacity-[0.8] text-xs font-primaryRegular md:text-md">Total Customers</p>
            </div>

            {/* <div className="stat-box h-40 w-40 md:h-32 md:w-32 border-black rounded-xl flex justify-center border-opacity-[0.16] items-center flex-col border-double border-[4px]">
              <img src={person} alt="" />
              <h3 className="count text-4xl md:text-3xl font-primaryMedium">
                {customers}+
              </h3>
              <p className="opacity-[0.8] font-primaryRegular md:text-xs">
                Total Customers
              </p>
            </div>

            <div className="stat-box h-40 w-40 md:h-32 md:w-32 border-black rounded-xl flex justify-center border-opacity-[0.16] items-center flex-col border-double border-[4px]">
              <img src={map} alt="" />
              <h3 className="count text-4xl md:text-3xl font-primaryMedium">
                {cities}+
              </h3>
              <p className="opacity-[0.8] font-primaryRegular md:text-xs">
                Total Cities
              </p>
            </div> */}
          </div>

          <button className="p-3 pl-10 pr-10 mt-6 bg-[#5D0E41] text-white transition-all hover:bg-[#000] font-Barlow rounded-md">Explore More</button>
        </div>

        <div className="right mt-14 flex shrink-0 justify-center md:w-[40%]">
          <Image className="max-h-[400px] object-cover shrink-0 lg:max-h-[700px]" src={aboutus} alt="resort" />
        </div>
      </div>
    </div>
  );
};

export default WhychooseUs;
