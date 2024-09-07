"use client";
import HomeSlider from "../components/HomeSlider";
import LocationCarousal from "../components/LocationCarousal";
import WhychooseUs from "../components/WhychooseUs";
import AboutUS from "../components/AboutUS";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CateSlider from "@/components/CateSlider";
import { IMAGE_URL } from "@/utils/utils";

const HomePage = ({ base_url, image_url }) => {
  const [isVisible, setIsVisible] = useState(true);
  const location = usePathname();

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const top = location === "/" ? "mt-[80px] " : "top-0";

  return (
    <div className={`${top}`}>
      <div className={`fixed h-[80px] lg:h-[50px]  z-[500] top-0 left-0 w-full bg-gradient-to-r from-blue-300 to-orange-300 p-4 shadow-lg flex justify-center items-center mb-10`}>
        <span className="text-black font-semibold text-center">
          Limited Time Offer! Book 2 Nights and Get the 2nd Night at 50% Off! Don&apos;t Miss Out - Use code: <b>AVENA50</b>
        </span>
        <div className="flex items-center">
          <button
            className="ml-2 text-gray-600 hover:text-black"
            onClick={() => {
              navigator.clipboard.writeText("VISTA50");
            }}
          >
            {/* Clipboard Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </button>
          {/* <button className="ml-4 text-gray-600 hover:text-black" onClick={closeBanner}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}
        </div>
      </div>

      <HomeSlider />
      <CateSlider />
      <LocationCarousal dataType={"trending"} marginTop={"mt-0"} boxTitle={"TRENDING THIS SEASON"} base_url={base_url} IMAGE_URL={image_url} />
      <AboutUS />
      <LocationCarousal dataType={"bestRated"} marginTop={"mt-12"} boxTitle={"BEST RATEDED LOCATION"} base_url={base_url} IMAGE_URL={image_url} />
      <WhychooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
