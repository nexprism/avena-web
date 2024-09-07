"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppLoading } from "./Loader";

const LocationCarousal = ({ dataType, boxTitle, marginTop, base_url, IMAGE_URL }) => {
  // console.log(IMAGE_URL, "dataType");
  const [activeIndex, setActiveIndex] = useState(0);
  const [groupedData, setGroupedData] = useState({});
  const [loader, setLoader] = useState(false)
  const swiperRef = useRef(null);
  const locations = ["delhi", "mumbai", "jaipur", "hyderabad", "kolkata", "Explore More"];
  const router = useRouter();
  const handleClick = (index) => {
    if (index === 6) {
      router.push("/explore");
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = dataType === "trending" ? `${base_url}/api/v1/trending-property` : `${base_url}/api/v1/best-rated-property`;

        const response = await fetch(url);
        const data = await response.json();
        if (data?.data[0]?.properties) {
          const properties = data?.data[0]?.properties;
          const groupedByCity = properties.reduce((acc, property) => {
            const city = property.city;
            if (!acc[city]) {
              acc[city] = [];
            }
            acc[city].push(property);
            return acc;
          }, {});

          setGroupedData(groupedByCity);
        }
      } catch (error) { }
    };

    fetchData();
  }, [base_url, dataType]);

  const filteredData = activeIndex === 0 ? Object.values(groupedData).flat() : groupedData[locations[activeIndex - 1]] || [];

  return (
    <div className={`carousal flex justify-center min-h-[60vh] ${marginTop}`}>
      <div className="content-wrapper h-full w-[95%] lg:w-[85%] p-2 overflow-hidden">
        <h1 className="text font-Barlow text-lg">{boxTitle}</h1>

        <div>
          <ul className="flex mt-4 overflow-x-auto whitespace-nowrap cursor-pointer">
            <li onClick={() => handleClick(0)} className={`mr-3 py-1 px-4 border-2 border-opacity-75 text-sm rounded ${activeIndex === 0 ? "active" : "bg-white"}`}>
              All
            </li>
            {locations.map((item, index) => (
              <li key={item} onClick={() => handleClick(index + 1)} className={`mr-3 py-1 px-4 border-2 border-opacity-75 text-sm rounded ${activeIndex === index + 1 ? "active" : "bg-white"}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        {loader && <AppLoading />}
        <div className="sliderBox mt-8 w-full h-[340px] mb-12 swiper1">
          <Swiper
            ref={swiperRef}
            slidesPerView={"auto"}
            spaceBetween={5}
            freeMode={true}
            modules={[Pagination]}
            mousewheel={{ releaseOnEdges: true }}
            className="mySwiper"
            touchEventsTarget="container"
          >
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <SwiperSlide key={item._id} className="p-1 ml-2 relative cursor-pointer">
                  <Link href={`/hotel-detail/${item._id}`}>
                    <div onClick={() => setLoader(true)}>
                      <div className="imageDiv relative h-[55%] w-full bg-red-50 rounded-[18px] overflow-hidden">
                        <Image src={`${IMAGE_URL}/${item.bedroomPicture[0]}`} width={100} height={100} alt={item.propertyName} />
                      </div>

                      <h4 className="font-Barlow text-xl ml-2">{item.propertyName}</h4>

                      <div className="location text-xs font-primaryRegular ">
                        <LocationOnIcon className="opacity-65 scale-[0.65]" />
                        {item.city.charAt(0).toUpperCase() + item.city.slice(1)}
                      </div>

                      <p className="text-sm opacity-75 ml-2 mt-4">Starting from ₹{item.price}</p>

                      <button className="flex-nowrap ml-1 absolute bottom-[6px] p-3 pl-8 pr-8 rounded-xl bg-[#702B58] text-white font-primaryRegular transition-all text-xs hover:bg-[#000]">
                        Book Now
                      </button>
                      <button className="h-10 w-10 absolute bottom-[6px] right-1 rounded-full flex justify-center items-center border-2 transition-all border-[#000] border-opacity-35 hover:bg-black hover:text-white">
                        <ArrowForwardIosIcon />
                      </button>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <div>No data available</div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LocationCarousal;
