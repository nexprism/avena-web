"use client";
import { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import wifi from "../../public/Images/wifi.png";
import sofa from "../../public/Images/sofa.png";
import ac from "../../public/Images/ac.png";
import bathtub from "../../public/Images/bathtub.png";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import Breadcrumbs from "@mui/material/Breadcrumbs";

import { CircularProgress } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { da } from "date-fns/locale";
import { useRouter, useSearchParams } from "next/navigation";

const Explore = ({ base_url, IMAGE_URL }) => {
  const [starValue] = useState(4.3);
  const [showAll, setShowAll] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  const [open, setOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);
  const [data, setData] = useState([]);
  const [minprice, setMinPrice] = useState(0);
  const [maxprice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  const city = searchParams.get("city");
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");
  const adults = searchParams.get("adults");
  const children = searchParams.get("children");
  const infants = searchParams.get("infants");

  useEffect(() => {
    setLoading(true);
    fetch(`${base_url}/api/v1/filter-options`)
      .then((response) => response.json())
      .then((data) => {
        // const filterOptions = data.data.map((option) => option.name);
        setFilterOptions(data.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [base_url]);

  function handleClick(event) {
    event.preventDefault();
  }

  const handleToggle = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const toggleOptions = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(option)) {
        newSelected.delete(option);
      } else {
        newSelected.add(option);
      }
      return newSelected;
    });
  };

  const clearFilters = () => {
    setSelectedOptions(new Set());
    setSelectedValue("");
  };

  const displayedOptions = showAll ? filterOptions : filterOptions.slice(0, 6);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value === "1") {
      setMinPrice(0);
      setMaxPrice(10000);
    } else if (value === "2") {
      setMinPrice(10000);
      setMaxPrice(20000);
    } else if (value === "3") {
      setMinPrice(20000);
      setMaxPrice(35000);
    } else if (value === "4") {
      setMinPrice(35000);
      setMaxPrice(50000);
    } else if (value === "5") {
      setMinPrice(50000);
      setMaxPrice(50000);
    }
  };

  useEffect(() => {
    setLoading(true);
    const myfilter = Array.from(selectedOptions);
    fetch(
      `${base_url}/api/v1/explore?minPrice=${minprice}&maxPrice=${maxprice}&filter=${myfilter}&city=${city}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}`
    )
      .then((response) => response.json())
      .then((data) => {
        // const filterOptions = data.data.map((option) => option.name);
        setData(data.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [maxprice, minprice, selectedOptions, base_url, city, checkin, checkout, adults, children, infants]);

  return (
    <>
      <div role="presentation" onClick={handleClick} className="mt-24 ml-11">
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">Home</Link>
          <Link href="/">Explore</Link>
          <Typography color="text.primary">Search</Typography>
        </Breadcrumbs>
      </div>

      <div className="min-h-[100vh] flex flex-col lg:flex-row lg:gap-6  w-full md:p-3">
        <div className="filter-section h-20 max-w-2xl overflow-hidden flex items-center gap-4 pl-2 lg:hidden !text-black">
          <div className="p-1 bg-white shadow-lg rounded-md hover:bg-black text-[#702B58] transition-all">
            <TuneIcon onClick={toggleOptions} className="scale-[1.05]" />
            {open === true && (
              <div className="options z-[10001] fixed flex flex-col items-center top-0 left-0 sm:top-[50%] overscroll-y-auto sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] min-h-[100vh] w-screen lg:min-w-[540px] xl:hidden max-w-[700px] bg-white overflow-auto">
                <div onClick={toggleOptions} className="opt-top flex items-center h-14 w-full ">
                  <ArrowBackIosNewOutlinedIcon className="text-black ml-2" />
                </div>
                <div className="w-[85%] flex flex-col items-center max-h-[calc(100vh-3.5rem)] overflow-y-auto">
                  {/* <div className="range flex flex-col items-center w-[100%] mt-6">
                    <h3 className="text-2xl font-fontMedium text-black lg:self-start lg:ml-2 lg:text-[16px]">Price Range</h3>
                    <Box sx={{ width: 230 }}>
                      <Slider
                        getAriaLabel={() => "Price range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={1000}
                        max={500000}
                        getAriaValueText={valuetext}
                        valueLabelFormat={(value) => `₹${value}`} // Optional: format value label
                        sx={{
                          color: "#5D0E41", // Slider track color
                          "& .MuiSlider-thumb": {
                            backgroundColor: "#5D0E41", // Thumb color
                          },
                          "& .MuiSlider-rail": {
                            color: "#5D0E41", // Rail color
                          },
                        }}
                      />
                    </Box>
                    <div className="border-b-2 border-black pb-4 border-opacity-15">
                      <div className="flex gap-5 w-full justify-center mt-2">
                        <div className="min-amount p-2 pl-8 pr-8 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">₹ Min</div>
                        <div className="max-amount p-2 pl-8 pr-8 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">₹ Max</div>
                      </div>
                      <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[100%] rounded-md border-[1.5px] border-opacity-50 bg-[#5D0E41] text-white hover:bg-black border-black font-primaryRegular transition-all text-xs ">
                        Apply
                      </button>
                    </div>
                  </div> */}

                  {/* <div className="rooms w-[100%] mt-3 border-b-2 border-black pb-4 border-opacity-15">
                    <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">Rooms</h3>
                    <div className="flex justify-between text-sm items-center pl-2">
                      No. of Rooms
                      <div className="flex justify-between gap-1">
                        <span className="p-2 pl-4 pr-4 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer" onClick={decrementRooms}>
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">{rooms.toString().padStart(2, "0")}</span>
                        <span className="p-2 pl-4 pr-4 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer" onClick={incrementRooms}>
                          +
                        </span>
                      </div>
                    </div>
                  </div> */}

                  <div className="CheckBox w-[100%] mt-3 border-b-2 border-black pb-4 border-opacity-15">
                    <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">Top Filters</h3>
                    <FormGroup className="ml-3">
                      {displayedOptions.map((option) => (
                        <FormControlLabel
                          key={option._id}
                          className="-mb-3"
                          control={<Checkbox checked={selectedOptions.has(option._id)} onChange={() => handleCheckboxChange(option._id)} />}
                          label={option.name}
                        />
                      ))}
                    </FormGroup>
                    <div className="flex pl-10 mt-3">
                      <button className="hover:underline hover:text-[#5D0E41] transition-all" onClick={handleToggle}>
                        {showAll ? "See less" : "See more"}
                      </button>
                    </div>
                  </div>

                  <div className="CheckBox w-[100%] mt-3">
                    <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">Price Per Night</h3>
                    <FormControl>
                      <RadioGroup
                        className="!flex-col"
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="price-range"
                        value={selectedValue} // Bind the value of RadioGroup to state
                        onChange={handleRadioChange} // Handle change events
                      >
                        <FormControlLabel className="!-mb-3 !ml-1" value="1" control={<Radio />} label="Under ₹ 10,000" />
                        <FormControlLabel className="!-mb-3 !ml-1" value="2" control={<Radio />} label="₹ 10,000 - ₹ 20,000" />
                        <FormControlLabel className="!-mb-3 !ml-1" value="3" control={<Radio />} label="₹ 20,000 - ₹ 35,000" />
                        <FormControlLabel className="!-mb-3 !ml-1" value="4" control={<Radio />} label="₹ 35,000 - ₹ 50,000" />
                        <FormControlLabel className="!-mb-3 !ml-1" value="5" control={<Radio />} label="More than ₹ 50,000" />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className="flex justify-between w-full gap-2">
                    <button
                      className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[100%] rounded-md border-[1.5px] border-opacity-50 text-black border-black hover:text-white font-primaryRegular transition-all text-xs hover:bg-[#000]"
                      onClick={clearFilters}
                    >
                      Remove
                    </button>
                    <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[100%] rounded-md border-[1.5px] border-opacity-50 hover:bg-white hover:text-black border-black text-white font-primaryRegular transition-all text-xs bg-[#000]">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div className="overflow-hidden overflow-x-scroll border-l-2 border-black border-opacity-45">
            <ul className="flex ml-2 gap-2 items-center">
              <Link className="flex-nowrap">
                <li className="p-1 pl-2 pr-2 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow shrink-0 flex whitespace-nowrap">
                  Sort By <ArrowDropDownOutlinedIcon />
                </li>
              </Link>

              <Link>
                <li className="p-1 pl-1 pr-1 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow flex whitespace-nowrap">
                  Price <ArrowDropDownOutlinedIcon />
                </li>
              </Link>

              <Link>
                <li className="p-1 pl-1 pr-1 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow flex whitespace-nowrap">Best Rated</li>
              </Link>
              <Link>
                <li className="p-1 pl-1 pr-1 border-[1.5px] border-black opacity-70 rounded-md text-md font-Barlow flex whitespace-nowrap">Luxury</li>
              </Link>
            </ul>
          </div> */}
        </div>

        <div className="filter-section min-h-[110vh] w-[380px] xl:flex justify-center mt-4 hidden">
          <div className="w-[85%] flex flex-col items-center">
            {/* <div className="range flex flex-col items-center w-[100%] mt-6"> */}
            {/* <h3 className="text-2xl font-fontMedium text-black lg:self-start lg:ml-2 lg:text-[16px]">Price Range</h3>
              <Box sx={{ width: 230 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={1000}
                  max={500000}
                  getAriaValueText={valuetext}
                  valueLabelFormat={(value) => `₹${value}`} // Optional: format value label
                  sx={{
                    color: "#5D0E41", // Slider track color
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#5D0E41", // Thumb color
                    },
                    "& .MuiSlider-rail": {
                      color: "#5D0E41", // Rail color
                    },
                  }}
                />
              </Box> */}
            {/* <div className="border-b-2 border-black pb-4 border-opacity-15">
                <div className="flex gap-5 w-full justify-center mt-2">
                  <div className="min-amount p-2 pl-8 pr-8 border-2  border-black border-opacity-15 text-opacity-50 text-black rounded-md">₹ Min</div>
                  <div className="max-amount p-2 pl-8 pr-8 border-2  border-black border-opacity-15 text-opacity-50 text-black rounded-md">₹ Max</div>
                </div>
                <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[100%] rounded-md border-[1.5px] border-opacity-50 bg-[#5D0E41] text-white hover:bg-black border-black  font-primaryRegular transition-all text-xs ">
                  Apply
                </button>
              </div> */}
            {/* </div> */}

            {/* <div className="rooms w-[100%] mt-3 border-b-2 border-black pb-4 border-opacity-15">
              <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">Rooms</h3>
              <div className="flex justify-between text-sm items-center pl-2">
                No. of Rooms
                <div className="flex justify-between gap-1">
                  <span className="p-2 pl-4 pr-4 rounded-md border-2  border-black border-opacity-15 text-opacity-50 text-black  cursor-pointer" onClick={decrementRooms}>
                    -
                  </span>
                  <span className="p-2 pl-4 pr-4 bg-[#f8f8f854] border-2  border-black border-opacity-15 text-opacity-50 text-black rounded-md">{rooms.toString().padStart(2, "0")}</span>
                  <span className="p-2 pl-4 pr-4  border-2  border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer" onClick={incrementRooms}>
                    +
                  </span>
                </div>
              </div>
            </div> */}

            <div className="CheckBox w-[100%] mt-3 border-b-2 border-black pb-4 border-opacity-15">
              <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">Top Filters</h3>
              <FormGroup className="ml-3">
                {displayedOptions.map((option) => (
                  <FormControlLabel
                    key={option._id}
                    className="-mb-3"
                    control={<Checkbox checked={selectedOptions.has(option._id)} onChange={() => handleCheckboxChange(option._id)} />}
                    label={option.name}
                  />
                ))}
              </FormGroup>
              <div className="flex pl-10 mt-3">
                <button className="hover:underline hover:text-[#5D0E41] transition-all" onClick={handleToggle}>
                  {showAll ? "See less" : "See more"}
                </button>
              </div>
            </div>

            <div className="CheckBox w-[100%] mt-3">
              <h3 className="text-2xl font-fontMedium -mb-2 text-black lg:self-start lg:ml-2 lg:text-[16px]">Price Per Night</h3>
              <FormControl>
                <RadioGroup
                  className="!flex-col"
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="price-range"
                  value={selectedValue} // Bind the value of RadioGroup to state
                  onChange={handleRadioChange} // Handle change events
                >
                  <FormControlLabel className="!-mb-3 !ml-1" value="1" control={<Radio />} label="Under ₹ 10,000" />
                  <FormControlLabel className="!-mb-3 !ml-1" value="2" control={<Radio />} label="₹ 10,000 - ₹ 20,000" />
                  <FormControlLabel className="!-mb-3 !ml-1" value="3" control={<Radio />} label="₹ 20,000 - ₹ 35,000" />
                  <FormControlLabel className="!-mb-3 !ml-1" value="4" control={<Radio />} label="₹ 35,000 - ₹ 50,000" />
                  <FormControlLabel className="!-mb-3 !ml-1" value="5" control={<Radio />} label="More than ₹ 50,000" />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="flex justify-between w-full gap-2">
              <button
                className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[100%] rounded-md border-[1.5px] border-opacity-50 text-black border-black hover:text-white font-primaryRegular transition-all text-xs hover:bg-[#000]"
                onClick={clearFilters}
              >
                Remove
              </button>
              <button className="flex-nowrap p-3 pl-8 pr-8 mt-4 w-[100%] rounded-md border-[1.5px] border-opacity-50 hover:bg-white hover:text-black border-black text-white font-primaryRegular transition-all text-xs bg-[#000]">
                Apply
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="h-100vh flex justify-center w-full">
            <CircularProgress />
          </div>
        ) : data.length === 0 ? (
          <div className="h-100vh flex justify-center  w-full">No data found</div>
        ) : (
          <div className="main-content flex gap-4 md:flex-col flex-wrap items-center  h-full w-[100%] pt-1 p-4 border-l-2 mt-4 border-black border-opacity-35 bg-white">
            {data.map((item) => (
              <div key={item._id} className=" w-full items-start lg:ml-6">
                <div className="box h-[700px] flex flex-col items-center  min-w-[330px] md:w-full max-w-[1000px] md:flex-row md:h-[280px] border-2 border-black border-opacity-20 outline-none pl rounded-lg">
                  <div className="image md:h-[95%] md:ml-2 md:-mt-1 w-[95%] md:w-[55%] mt-2 rounded-xl overflow-hidden h-[50%]">
                    <Image className="h-full w-full object-cover" src={`${IMAGE_URL}/${item.entrancePicture[0]}`} width={100} height={100} alt="" />
                  </div>
                  <div className="detail w-[95%] md:h-[95%] md:pl-3 md:flex md:justify-between ">
                    <div className="md:mt-2 w-[80%] pr-2">
                      <h2 className="text-xl font-primaryMedium">{item.propertyName}</h2>
                      <p className="text-sm font-primaryMedium opacity-75 -ml-1">
                        <LocationOnOutlinedIcon className="scale-[0.7]" />
                        {item.city.charAt(0).toUpperCase() + item.city.slice(1)}
                      </p>
                      {/* <div className="mt-2 lg:mt-8 w-full h-14 items-center gap-4 flex gap pl-1">
                      <h3 className="text-sm font-primaryMedium"> ◉ Upto {item.guests} Guests</h3>
                      <h3 className="text-sm font-primaryMedium"> ◉ {item.room} Rooms</h3>
                      <h3 className="text-sm font-primaryMedium"> ◉ {item.baths} Baths</h3>
                    </div> */}

                      <div className="flex flex-col justify-between h-4/5">
                        <div className=" w-full min-h-14 items-center gap-4 flex gap  border-b-2  border-black border-opacity-20 outline-none p-1 rounded-lg -mt-4 shrink-0">
                          <h3 className="text-md font-primaryMedium opacity-65 whitespace-nowrap">
                            <span className="text-sm font-primaryMedium ">Great for: </span>
                            Food
                          </h3>
                          <h3 className="text-md font-primaryMedium opacity-65 whitespace-nowrap"> Senior Citizen</h3>
                        </div>

                        <div className="amenities-section w-full mt-2">
                          <ul className="flex w-full justify-start gap-3  items-center">
                            <li>
                              <Image className="h-10 w-10" src={sofa} alt="sitting" />
                            </li>
                            <li>
                              <Image className="h-10 w-10" src={wifi} alt="wifi" />
                            </li>
                            <li>
                              <Image className="h-10 w-10" src={ac} alt="air" />
                            </li>
                            <li>
                              <Image className="h-10 w-10" src={bathtub} alt="bathtub" />
                            </li>
                            <li className="text-xl font-primaryBold">18+</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="price-section w-full md:w-[250px] md:h-full    md:px-4 md:border-l-2 border-black border-opacity-20 md:text-center">
                      <div className=" md:mt-2">
                        <div className="flex md:block justify-between ">
                          <Box
                            sx={{
                              "& > legend": { mt: 2 },
                            }}
                          >
                            <Typography component="legend">{starValue}</Typography>
                            <Rating name="simple-controlled" value={starValue} />
                          </Box>
                          <div>
                            <p className="text-sm font-primaryRegular">Best Price</p>
                            <div className="old-price text-xl mt-2 line-through opacity-65">₹{item.price + 2799}</div>
                            <div className="new-price text-3xl mt-1">₹{item.price}</div>
                          </div>
                        </div>
                      </div>

                      <div className="checkout font-primaryLight lg:p-3 lg:pl-5 lg:pr-5  pb-2 md:pb-0">
                        <button
                          className="lg:py-2 py-4 lg:pl-10  lg:pr-10 md:p-3 md:mt-[12px] md:text-sm w-full mt-3 text-md lg:text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000]  rounded-xl font-primaryMedium"
                          onClick={() => router.push(`/hotel-detail/${item._id}`)}
                        >
                          View
                          <ArrowForwardIcon className="ml-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Explore;
