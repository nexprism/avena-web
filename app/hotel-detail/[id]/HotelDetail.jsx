"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import Tick from "../../../public/Images/available.png";

import { FreeMode, Pagination } from "swiper/modules";
import { Breadcrumbs } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DatePicker, Space } from "antd";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const { RangePicker } = DatePicker;
import LocationOnIcon from "@mui/icons-material/LocationOn";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { AppLoading } from "@/components/Loader";
gsap.registerPlugin(ScrollTrigger);

const HotelDetail = ({ propId, base_url, IMAGE_URL }) => {
  const [rating, setRating] = useState(0);

  const [data, setData] = useState();
  const [imageArr, setImagesArr] = useState([]);
  const [guests, setGuests] = useState(1);
  const [selectedDates, setSelectedDates] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableDates, setDisableDates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [age, setAge] = useState("");

  const BookingOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };
  const handleChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".desPara",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".desPara",
          start: " 100%",
          end: "top 80%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".desPara",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".desPara",
          start: " 100%",
          end: "top 80%",
          scrub: 1,
        },
      }
    );
  }, []);

  const handleDateChange = (dates) => {
    console.log("called", dates);
    const formattedDisableDates = disableDates?.map((date) => moment(date).format("YYYY-MM-DD"));

    if (dates?.[0] && dates?.[1]) {
      const startDate = dates[0].startOf("day").format("YYYY-MM-DD");
      const endDate = dates[1].startOf("day").format("YYYY-MM-DD");

      let currentDate = moment(startDate);
      while (currentDate.isSameOrBefore(endDate)) {
        const formattedCurrentDate = currentDate.format("YYYY-MM-DD");

        if (formattedDisableDates?.includes(formattedCurrentDate)) {
          toast.error("Please choose a different date, as the selected date is unavailable.");
          setSelectedDates([]);
          return;
        } else {
          currentDate = currentDate.add(1, "day");
        }
      }
    } else {
      setSelectedDates([]);
    }

    setSelectedDates(dates); // Update selectedDates on date change
  };

  useEffect(() => {
    const url = `${base_url}/api/v1/property/${propId}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setImagesArr([
          ...data.data.entrancePicture,
          ...data.data.bedroomPicture,
          ...data.data.livingRoomPicture,
          ...data.data.kitchenPicture,
          ...data.data.bathroomPicture,
          ...data.data.gym,
          ...data.data.others,
        ]);
        // make an array of dates from bookings checkin and checkout and middle
        const bookings = data.data.bookings;
        if (bookings) {
          const dateArray = [];
          const unavailableDates = bookings.map((booking) => {
            const startDate = new Date(booking.checkin);
            const endDate = new Date(booking.checkout);
            for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
              dateArray.push(new Date(date));
            }
            return dateArray;
          });

          setDisableDates(...unavailableDates);
        }
      })
      .catch((error) => { });
  }, [propId, base_url]);

  const disableDate = (current) => {
    if (!current) return false; // Ensure current is valid

    return disableDates?.some((dd) => current.date() === dd.getDate() && current.month() === dd.getMonth() && current.year() === dd.getFullYear());
  };

  function handleClick(event) {
    event.preventDefault();
    alert("Please select date");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (name === "" || email === "" || message === "" || rating === 0) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(`${base_url}/api/v1/rating`, {
        method: "POST",
        body: JSON.stringify({ userName: name, email, description: message, stars: rating, status: "pending", vendor: data.vendor._id, property: data._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data2 = await response.json();

      // Clear the form fields after a successful submission
      setName("");
      setEmail("");
      setMessage("");
      setRating(0);
      toast.success("Review submitted successfully");
      event.target.reset();
    } catch (error) {
      // Handle the error here
    }
  }

  return (
    <>
      <div role="presentation" onClick={handleClick} className="mt-24 lg:ml-11 ml-3">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/">
            Explore
          </Link>
          <Typography color="text.primary">Property</Typography>
        </Breadcrumbs>
      </div>

      <div className="min-h-[70vh] flex flex-col items-center w-full mt-4 ">
        {loader ? <AppLoading /> : null}
        <div className="wrapper  w-[95%]  overflow-hidden">
          <div className="image !h-[40vh] lg:!h-[70vh] w-[100%]  swiper3 overflow-hidden">
            <Swiper slidesPerView={"auto"} spaceBetween={15} freeMode={true} modules={[FreeMode, Pagination]} className="mySwiper">
              {imageArr.map((item) => (
                <SwiperSlide key={item.id}>
                  <Image src={`${IMAGE_URL}/${item}`} alt="" fill />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="heading w-full h-16 bg-[#F5F7FC] text-black flex items-center pl-4 md:pl-12">
            Description
          </div> */}

          <div className="content-wrapper justify-between relative w-[100%] min-h-[200vh] flex">
            <div className="left w-[100%] lg:w-[70%] bg-white p-3 pt-8 pl-4  md:pl-12">
              <div className="hotel-name text-3xl mb-6">{data?.propertyName}</div>
              <div className="flex gap-3">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={4}
                  // onChange={(event, newValue) => {
                  //   setRating(newValue);
                  // }}
                  />
                </Box>
                <span>{"(4.5)"}</span>
              </div>
              <h4 className="text-sm">
                <LocationOnIcon className="scale-75 mb-1" />
                {data?.city}
              </h4>
              <div className="description">
                <div className="hotel-desc text-md mt-12 w-[100%] md:w-[95%] ">
                  <h4 className="text-xl font-primaryMedium mb-2">Description</h4>
                  <p className="desPara">{data?.propertyDescription}</p>
                  <h4 className="text-md font-primaryMedium mb-2 mt-8">House Rules</h4>
                  <div className="">
                    <ul className="grid grid-cols-1 gap-4">
                      {data?.houseRules.map((item, index) => (
                        <li key={index} className="text-sm">
                          <ArrowForwardOutlinedIcon className="scale-[0.6] -mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="services">
                    <h4 className="text-xl font-primaryMedium mb-2 mt-10">Services</h4>
                    <div className="">
                      <ul className="grid grid-cols-3 gap-4">
                        {data?.service.map((item, index) => (
                          <li key={index} className="min-w-32 flex items-center gap-3 mb-4">
                            <Image className="h-10 w-10" src={Tick} alt="" />
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="Amenities">
                    <h4 className="text-xl font-primaryMedium mb-2 mt-10">Amenities</h4>
                    <div className="">
                      <ul className="grid grid-cols-3 gap-4">
                        {data?.amenity.map((item, index) => (
                          <li key={index} className="min-w-32 flex items-center gap-3 mb-4">
                            <Image className="h-10 w-10" src={Tick} alt="" />
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="map  overflow-hidden mt-14 mb-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28036.387018906134!2d77.0901998!3d28.5532914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1721858689923!5m2!1sen!2sin"
                      width="747"
                      height="439"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <form className="review-section min-h-[90vh] w-full border-2 border-black border-opacity-10 outline-none rounded-lg p-5 shadow-lg" onSubmit={handleSubmit}>
                    <div className="heading flex items-center text-2xl font-primaryMedium h-16 w-full border-b-2 border-black border-opacity-10 ">Write a Review</div>
                    <div className="flex  flex-wrap mt-8 ">
                      {/* <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Service</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box> */}
                      {/* <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Location</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box> */}
                      {/* <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Value for Money</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box> */}
                      {/* <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Clenliness</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box> */}
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Rating</Typography>
                        <Rating
                          name="simple-controlled"
                          value={rating}
                          onChange={(event, newValue) => {
                            setRating(newValue);
                          }}
                        />
                      </Box>
                    </div>
                    <div className="input-details mt-10">
                      <div className="top sm:flex sm:w-full sm:justify-between gap-4">
                        <span className="w-full">
                          <h4>Name</h4>
                          <input type="text" className="border-2 w-full  border-black border-opacity-20 outline-none p-4 pl rounded-lg" onChange={(e) => setName(e.target.value)} />
                        </span>
                        <span className="w-full">
                          <h4>Email</h4>
                          <input type="email" className="border-2 w-full border-black border-opacity-20 outline-none p-4 pl rounded-lg" onChange={(e) => setEmail(e.target.value)} />
                        </span>
                      </div>
                      <div className="bottom w-full mt-12">
                        <h3>Message</h3>
                        <textarea
                          name="postContent"
                          rows={6}
                          cols={40}
                          className="w-full resize-none border-2  border-black border-opacity-20 outline-none p-4 pl rounded-lg"
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>{" "}
                    <button type="submit" className="p-3 pl-10 pr-10  mt-14 text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                      Save Rating
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="right hidden lg:flex flex-col items-center mt-6 sticky top-20 max-h-[440px] w-[25%]">
              <div className="lg:flex flex-col items-center text-center min-w-[290px] max-w-[360px] min-h-[200px] px-[27px] max-h-[500px] bg-white border-2 border-opacity-10 border-black rounded-md shadow-xl">
                <h4 className="font-primaryMedium uppercase text-lg mb-8 mt-2">Your Reservation</h4>
                <Space direction="vertical" className="w-full flex justify-center items-center space-y-4">
                  <Space size={8} className=" space-x-2">
                    <RangePicker
                      disabledDate={disableDate}
                      placeholder={["Check-in", "Check-out"]}
                      className="w-full h-14 border-[1.5px] border-black border-opacity-25 rounded"
                      onChange={handleDateChange}
                      value={Array.isArray(selectedDates) && selectedDates.length === 2 ? selectedDates : []}
                    />
                  </Space>
                </Space>

                <div className="w-full mt-5 px-[2px]">
                  {/* <FormControl sx={{ minWidth: 120, width: "100%", marginBottom: "20px" }}>
                    <InputLabel id="rooms-select-label">Rooms</InputLabel>
                    <Select labelId="rooms-select-label" value={rooms} label="Rooms" onChange={handleRoomsChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                    </Select>
                  </FormControl> */}

                  <FormControl sx={{ minWidth: 120, width: "100%", marginBottom: "20px" }}>
                    <InputLabel id="guests-select-label">Guests</InputLabel>
                    <Select labelId="guests-select-label" value={guests} label="Guests" onChange={handleGuestsChange}>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              {selectedDates?.length !== 2 ? (
                <div
                  className="py-[18px] px-6 w-[86%] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] mt-4 rounded-md font-primaryMedium grid place-items-center cursor-pointer"
                  onClick={handleClick}
                >
                  Book Now
                </div>
              ) : (
                <Link href={`/check-out/${guests}${selectedDates.length > 0 ? `/${selectedDates[0].format("YYYY-MM-DD")}/${selectedDates[1].format("YYYY-MM-DD")}` : ""}/${propId}`}>
                  <span className="py-[18px] px-6 w-[86%] text-sm whitespace-nowrap min-w-[300px] bg-[#5D0E41] text-white transition-all hover:bg-[#000] mt-4 rounded-md font-primaryMedium grid place-items-center" onClick={() => setLoader(true)}>
                    Book Now
                  </span>
                </Link>
              )}
            </div>

            <div className="phone-checkOut h-16 w-[95%] lg:hidden pt-2 fixed z-50 bottom-2 bg-transparent rounded-lg">
              <div className="bottom h-1/2 w-full flex items-center justify-center gap-5 pr-2 mt-3">
                <div>
                  {/* <button className="p-[10px] px-8 w-full text-sm border-2 border-black border-opacity-35 text-black transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                    Inquiry
                  </button> */}
                </div>
                <div>
                  <button onClick={BookingOpen} className="min-w-[300px] py-5  w-full text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                    Book Now
                  </button>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)" }}
                  className={`absolute min-h-[200px] w-full left-1/2 translate-x-[-50%] duration-300 transition-all  bg-white z-[60] p-4 ${isOpen ? "opacity-100 bottom-[-1%]" : " opacity-0 bottom-[-500%]"
                    }`}
                >
                  <div className="top p-2 mt-8 h-1/2 max-h-44 w-full flex items-end ">
                    <CloseIcon onClick={BookingOpen} className="absolute top-3 right-3" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        gap="15px"
                        width="100%"
                      // height="44px"
                      >
                        {/*                      
                        <RangePicker
                          disabledDate={disableDate}
                          placeholder={["Check-in", "Check-out"]}
                          className="w-full h-14 border-[1.5px] border-black border-opacity-25 rounded"
                          onChange={handleDateChange}
                          value={Array.isArray(selectedDates) && selectedDates.length === 2 ? selectedDates : []}
                        /> */}

                        {/* <RangePicker
                          disabledDate={disableDate}
                          placeholder={["Check-in", "Check-out"]}
                          className="ant-calendar-range ant-calendar-range-part w-full h-14 border-[1.5px] border-black border-opacity-25 rounded sm:h-12 sm:text-sm sm:placeholder:text-xs md:h-14 md:text-base md:placeholder:text-sm lg:h-16 lg:text-lg lg:placeholder:text-base"
                          onChange={handleDateChange}
                          value={Array.isArray(selectedDates) && selectedDates.length === 2 ? selectedDates : []}
                        /> */}

                        <RangePicker
                          disabledDate={disableDate}
                          placeholder={["Check-in", "Check-out"]}
                          className="w-full h-14 border-[1.5px] border-black border-opacity-25 rounded"
                          onChange={handleDateChange}
                          value={Array.isArray(selectedDates) && selectedDates.length === 2 ? selectedDates : []}
                          dropdownClassName="custom-calendar"
                        />
                      </Box>
                    </LocalizationProvider>
                  </div>
                  <div className="flex w-full mt-2 mb-8 xl:px-4">
                    {/* <FormControl sx={{ m: 1, minWidth: 120, width: "95%" }}>
                      <InputLabel id="demo-select-small-label">
                        Rooms
                      </InputLabel>
                      <Select value={age} label="Rooms" onChange={handleChange}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                        <MenuItem value={30}>3</MenuItem>
                        <MenuItem value={40}>4</MenuItem>
                      </Select>
                    </FormControl> */}

                    <FormControl sx={{ m: 1, minWidth: 120, width: "95%" }}>
                      <InputLabel id="demo-select-small-label-2">Guests</InputLabel>
                      <Select value={guests} label="Rooms" onChange={handleGuestsChange}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="h-16 w-full bg-transparent flex justify-center items-center px-2 rounded-md  border-black border-opacity-25 ">
                    {/* <span className="text-xl font-primaryMedium">₹150,000</span> */}
                    <span className="text-xl font-primaryMedium">
                      {/* <Link to="/check-out">
                        <button className="py-[14px] px-10  text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                          Book Now
                        </button>
                      </Link> */}
                      {selectedDates?.length !== 2 ? (
                        <div className="py-[14px] px-10  text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium cursor-pointer" onClick={handleClick}>
                          Book Now
                        </div>
                      ) : (
                        <Link href={`/check-out/${guests}${selectedDates.length > 0 ? `/${selectedDates[0].format("YYYY-MM-DD")}/${selectedDates[1].format("YYYY-MM-DD")}` : ""}/${propId}`}>
                          <span className="py-[18px] px-6 w-full  text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] mt-4 rounded-md font-primaryMedium grid place-items-center" onClick={() => setLoader(true)}>
                            Book Now
                          </span>
                        </Link>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HotelDetail;
