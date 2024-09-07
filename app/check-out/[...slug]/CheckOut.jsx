"use client";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Breadcrumbs, Typography } from "@mui/material";
import { differenceInDays } from "date-fns"; // Import the date-fns library
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, Space } from "antd";
// const { RangePicker } = DatePicker;

const CheckOut = ({ IMAGE_URL, guests, checkin, checkout, propertyid, base_url, rzr_key, user }) => {
  const [image1, setImage1] = useState(null);
  const [progress1, setProgress1] = useState(0);
  const [isImage1Uploaded, setIsImage1Uploaded] = useState(false);
  const [image2, setImage2] = useState(null);
  const [progress2, setProgress2] = useState(0);
  const [isImage2Uploaded, setIsImage2Uploaded] = useState(false);
  const [typeOfId, setTypeOfID] = useState("");
  const [data, setData] = useState();
  const [image, setImage] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const BookingOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (event) => {
    setSelectedRoom(event.target.value);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState(0);
  const [image1S, setImage1S] = useState(null);
  const [image2S, setImage2S] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [companyAdd, setCompanyAdd] = useState("");

  const router = useRouter();

  useEffect(() => {
    setEmail(user?.email);
  }, [user]);

  console.log("email", email);
  const dayCount = (checkin, checkout) => {
    if (!checkin || !checkout) return 0; // Return 0 if either date is missing
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    return differenceInDays(checkoutDate, checkinDate); // Calculate the difference in days
  };
  const handlePropertyTypeChange = (event) => {
    setTypeOfID(event.target.value);
  };

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);

      reader.onloadstart = () => {
        setProgress1(0); // Reset progress
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setProgress1(percentComplete);
        }
      };

      reader.onloadend = () => {
        setImage1(reader.result);
        setImage1S(file);
        setProgress1(100); // Complete progress
        setIsImage1Uploaded(true); // Set image uploaded status to true
      };
    }
  };

  const handleRemoveImage1 = () => {
    setImage1(null);
    setIsImage1Uploaded(false);
    setProgress1(0);
  };

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);

      reader.onloadstart = () => {
        setProgress2(0); // Reset progress
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setProgress2(percentComplete);
        }
      };

      reader.onloadend = () => {
        setImage2(reader.result);
        setImage2S(file);
        setProgress2(100); // Complete progress
        setIsImage2Uploaded(true); // Set image uploaded status to true
      };
    }
  };

  const handleRemoveImage2 = () => {
    setImage2(null);
    setIsImage2Uploaded(false);
    setProgress2(0);
  };

  const createOrderId = async () => {
    try {
      const response = await fetch(`${base_url}/api/v1/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {}
  };

  async function handleClick(event) {
    event.preventDefault();

    // Basic form validation
    if (!name || !email || !contact || !city || !typeOfId || !image1 || !image2) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const orderId = await createOrderId();

      const options = {
        key: rzr_key,
        amount: parseFloat(amount) * 100,
        currency: "INR",
        name: "name",
        description: "description",
        order_id: orderId,
        handler: async function (response) {
          const dataForVerification = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          try {
            const result = await fetch(`${base_url}/api/v1/verify`, {
              method: "POST",
              body: JSON.stringify(dataForVerification),
              headers: { "Content-Type": "application/json" },
            });

            const res = await result.json();

            if (res.isOk) {
              try {
                const formData = new FormData();
                formData.append("amount", parseFloat(amount));
                formData.append("orderId", orderId);
                formData.append("property", propertyid);
                formData.append("checkin", checkin);
                formData.append("checkout", checkout);
                formData.append("guests", guests);
                formData.append("name", name);
                formData.append("email", email);
                formData.append("contact", contact);
                formData.append("city", city);
                formData.append("typeOfId", typeOfId);
                formData.append("notes", notes);
                formData.append("image1", image1S); // Assuming image1 and image2 are files (Blobs)
                formData.append("image2", image2S);
                formData.append("days", dayCount(checkin, checkout));
                formData.append("vendor", data.vendor._id);
                registrationNumber && formData.append("companyGstNumber", registrationNumber);
                companyName && formData.append("companyName", companyName);
                companyAdd && formData.append("companyAddress", companyAdd);

                const bookingResponse = await fetch(`${base_url}/api/v1/booking`, {
                  method: "POST",
                  body: formData, // Sending formData
                });

                const bookingResult = await bookingResponse.json();
                toast.success("Booking Successful");
                setTimeout(() => {
                  router.push("/");
                }, 2000);
              } catch (error) {
                console.log("Error creating booking:", error);
                toast.error("Booking failed, please try again.");
              }
            } else {
              toast.error("Verification failed, please try again.");
            }
          } catch (verificationError) {
            toast.error("Verification failed, please try again.");
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      toast.error("Payment failed, please try again.");
    }
  }

  useEffect(() => {
    fetch(`${base_url}/api/v1/property/${propertyid}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setImage(`${IMAGE_URL}/${data.data.entrancePicture}`);
        setAmount(data.data.price * dayCount(checkin, checkout));
      })
      .catch((error) => {});
  }, [checkin, checkout, propertyid, base_url, IMAGE_URL]);

  return (
    <>
      <div role="presentation" className="mt-24 lg:ml-40 ml-9">
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/explore">Explore</Link>
          <Link href="/">Property</Link>
          <Typography color="text.primary">Checkout</Typography>
        </Breadcrumbs>
      </div>
      <div className="checkout h-full w-full flex justify-center items-center pt-2">
        <div className="content-wrapper w-[90%] lg:w-[85%] min-h-[100vh] bg-gray-50 relative flex flex-col lg:flex-row">
          <div className="left w-full lg:w-[75%] bg-white p-3 pt-8 lg:pl-12 mb-8">
            <div className="hotel-name text-3xl">
              <div className="box flex flex-col sm:flex-row items-center lg:flex-row h-auto md:h-[240px] outline-none rounded-lg">
                <div className="image h-[250px] w-[300px] lg:w-[300px]  sm:h-[250px] sm:w-[350px]  lg:h-[250px] rounded-xl overflow-hidden">
                  <Image className="h-full w-full object-cover" width="100" height={"100"} src={image} alt="" />
                </div>
                <div className="detail ml-0 sm:ml-3 w-full md:w-[75%] mt-4 lg:mt-0 md:pl-3 flex flex-col md:flex-row md:justify-between">
                  <div className=" mt-5">
                    <h2 className="text-xl font-primaryMedium">{data?.propertyName}</h2>
                    <p className="text-sm font-primaryMedium opacity-75">
                      <LocationOnOutlinedIcon className="scale-[0.7]" />
                      {data?.city.charAt(0).toUpperCase() + data?.city.slice(1)}
                    </p>
                    <div className="date-of-booking flex  md:flex-row w-full mt-6 md:gap-6">
                      <div className="min-w-[150px] pt-4 sm:pt-4 md:pt-0">
                        <h4 className="text-sm font-primaryRegular tracking-tight">Check-in</h4>
                        <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight">{checkin}</h4>
                        {/* <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">
                          <span className="text-sm">From</span> 02:00
                        </h4> */}
                      </div>
                      <div className="border-l-2 min-w-[150px] whitespace-nowrap border-black pl-6 mt-4 md:mt-0">
                        <h4 className="text-sm font-primaryRegular tracking-tight">Check-out</h4>
                        <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight">{checkout}</h4>
                        {/* <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">
                          <span className="text-sm">Until</span> 11:00
                        </h4> */}
                      </div>
                    </div>
                    {/* <div className="mt-2 lg:mt-4 w-full h-14 items-center gap-4 flex">
                      <h3 className="text-sm font-primaryMedium">◉ 2 Bedrooms</h3>
                      <h3 className="text-sm font-primaryMedium">◉ 4 Bathrooms</h3>
                      <h3 className="text-sm font-primaryMedium">◉ 2 Guests</h3>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <form className="review-section mt-10 min-h-[90vh] w-full border-2 border-black border-opacity-10 outline-none p-4 rounded-lg shadow-lg">
              <div className="heading flex items-center text-2xl font-primaryMedium h-16 w-full border-b-2 border-black border-opacity-10">Enter Your Details</div>
              <div className="radio mt-4">
                <p>I&apos;m Looking for</p>
                <div className="flex gap-3">
                  <FormControl required>
                    <RadioGroup row>
                      <FormControlLabel value="mySelf" control={<Radio />} label="Myself" />
                      <FormControlLabel value="someoneElse" control={<Radio />} label="Someone else" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="input-details mt-10">
                <div className="top flex flex-col sm:flex-row sm:gap-4">
                  <span className="w-full mb-4 sm:mb-0">
                    <h4>Name*</h4>
                    <input type="text" className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg" onChange={(e) => setName(e.target.value)} />
                  </span>
                  <span className="w-full">
                    <h4>Email*</h4>
                    <input
                      type="email"
                      className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg"
                      disabled={user ? true : false}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                </div>
                <div className="top flex flex-col sm:flex-row sm:gap-4 mt-4">
                  <span className="w-full mb-4 sm:mb-0">
                    <h4>Contact Number*</h4>
                    <input type="number" className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg" onChange={(e) => setContact(e.target.value)} />
                  </span>
                  <span className="w-full">
                    <h4>Residential City*</h4>
                    <input type="text" className="border-2 w-full border-black border-opacity-20 outline-none p-4 rounded-lg" onChange={(e) => setCity(e.target.value)} />
                  </span>
                </div>

                <Box sx={{ minWidth: "49%" }} className="mt-4 b">
                  <FormControl fullWidth sx={{ height: "48px" }}>
                    <InputLabel id="id-type-label" sx={{ fontSize: "16px" }}>
                      Select Your ID*
                    </InputLabel>
                    <Select labelId="id-type-label" id="id-type" value={typeOfId} label="Select Your ID" onChange={handlePropertyTypeChange} sx={{ fontSize: "12px" }}>
                      <MenuItem value={"adhar"}>Aadhaar Card</MenuItem>
                      <MenuItem value={"pan"}>Pan Car</MenuItem>
                      <MenuItem value={"dl"}>Driving Licence</MenuItem>
                      <MenuItem value={"passport"}>Passport</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <div className="sm:flex  gap-6">
                  <div className="flex h-44 mt-4 flex-col justify-center">
                    <div className="relative w-[220px] h-[150px] border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                      {image1 && <Image src={image1} alt="Preview" className="w-full h-full object-cover" width={100} height={100} />}
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                        <div className="h-full bg-green-500 transition-width duration-300" style={{ width: `${progress1}%` }}></div>
                      </div>
                    </div>
                    {isImage1Uploaded ? (
                      <button
                        type="button"
                        className="p-3 pl-10 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                        onClick={handleRemoveImage1}
                      >
                        Remove ID
                      </button>
                    ) : (
                      <label
                        htmlFor="upload1"
                        className="p-3 pl-12 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                      >
                        Front of Your ID
                        <input type="file" id="upload1" accept="image/*" multiple className="hidden" onChange={handleImageUpload1} />
                      </label>
                    )}
                  </div>

                  <div className="flex h-44 mt-4 flex-col justify-center">
                    <div className="relative w-[220px] h-[150px] border-2 border-gray-300 rounded-md overflow-hidden bg-white">
                      {image2 && <Image src={image2} alt="Preview" className="w-full h-full object-cover" width={100} height={100} />}
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                        <div className="h-full bg-green-500 transition-width duration-300" style={{ width: `${progress2}%` }}></div>
                      </div>
                    </div>
                    {isImage2Uploaded ? (
                      <button
                        type="button"
                        className="p-3 pl-10 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                        onClick={handleRemoveImage2}
                      >
                        Remove ID
                      </button>
                    ) : (
                      <label
                        htmlFor="upload2"
                        className="p-3 pl-14 pr-10 whitespace-nowrap mt-4 max-w-[220px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] cursor-pointer rounded-md font-primaryMedium"
                      >
                        Back of Your Id
                        <input type="file" id="upload2" accept="image/*" className="hidden" onChange={handleImageUpload2} />
                      </label>
                    )}
                  </div>
                </div>

                {/* ----------------------------gst------------------------------ */}
                <div className="w-full max-w-lg m-0 py-4 px-1">
                  <div className="flex items-center mb-4">
                    <input type="checkbox" id="enterGst" className="mr-2" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                    <label htmlFor="enterGst" className="text-sm font-medium text-gray-700">
                      Enter GST Details (Optional)
                    </label>
                  </div>

                  {/* GST Fields (only visible if checkbox is checked) */}
                  {isChecked && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <input
                          type="text"
                          id="gstNumber"
                          value={registrationNumber}
                          onChange={(e) => setRegistrationNumber(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none text-[12px] focus:ring-2"
                          placeholder="Enter Registration No."
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none text-[12px] focus:ring-2"
                          placeholder="Enter Company Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="companyAddress"
                          value={companyAdd}
                          onChange={(e) => setCompanyAdd(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none text-[12px] focus:ring-2"
                          placeholder="Enter Company Address"
                        />
                      </div>
                    </div>
                  )}
                </div>
                {/* ----------------------------gst------------------------------ */}

                <div className="bottom w-full mt-12">
                  <h3 className="text-xl font-primaryMedium mb-2">Any Special requests?</h3>
                  <textarea
                    name="postContent"
                    rows={6}
                    cols={40}
                    className="w-full resize-none border-2 border-black border-opacity-20 outline-none p-4 rounded-lg"
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <p className="text-sm font-primaryRegular mt-2 mb-4">Share your special requests with us and we’ll do our best to accommodate them!</p>
              </div>
            </form>
          </div>

          <div className="right hidden lg:flex flex-col items-center sticky top-20 mb-12 min-h-[60vh] p-3 max-h-[50vh] min-w-[320px] w-full lg:w-[25%] bg-gray-300 mt-6 lg:ml-2 border-2 border-opacity-20 border-black rounded-xl shadow-xl">
            <div className="date-of-booking flex bg-white rounded-lg mt-6 md:gap-2">
              <div className="w-[140px] h-[90px] pt-4 pl-2 rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">Check-in</h4>
                <h4 className="text-md -mb-1 font-primaryMedium tracking-tight">{checkin}</h4>
                {/* <h4 className="text-md -mb-1 font-primaryRegular tracking-tight">
                  <span className="text-xs">From</span> 02:00
                </h4> */}
              </div>
              <div className="w-[140px] border-l-2 h-[90px] pt-4 pl-2">
                <h4 className="text-xs font-primaryRegular tracking-tight">Check-out</h4>
                <h4 className="text-md -mb-1 font-primaryMedium tracking-tight">{checkout}</h4>
                {/* <h4 className="text-md -mb-1 font-primaryRegular tracking-tight">
                  <span className="text-xs">Until</span> 11:00
                </h4> */}
              </div>
            </div>

            <div className="date-of-booking flex rounded-lg mt-6 md:gap-2">
              <div className="w-[140px] h-16 py-3 pl-2 bg-white rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">Guests</h4>
                <h4 className="text-sm -mb-1 font-primaryMedium tracking-tight">{guests}</h4>
              </div>
              {/* <div className="w-[140px] h-16 py-3 pl-2 bg-white rounded-md">
                <h4 className="text-xs font-primaryRegular tracking-tight">Rooms</h4>
                <h4 className="text-sm -mb-1 font-primaryMedium tracking-tight">2 Rooms</h4>
              </div> */}
            </div>

            <div className="py-4 pl-2 pr-2 w-full mt-14 flex justify-between text-sm rounded-md border-t-2 border-black border-opacity-25 font-primaryMedium">
              <h4 className="font-primaryMedium text-lg">Total</h4>
              <h4 className="font-primaryMedium text-xl">₹{amount}</h4>
            </div>

            <button className="p-3 pl-10 pr-10 mt-2 w-full bg-[#5D0E41] text-white transition-all hover:bg-[#fff] hover:text-black font-Barlow rounded-md" onClick={handleClick}>
              Request to Book
            </button>
          </div>

          <div className="phone-checkOut  h-16 w-[95%] lg:hidden pt-2 fixed z-50 bottom-2 bg-transparent rounded-lg">
            <div className="bottom mr-10 h-1/2 w-full flex items-center justify-center gap-5 pr-2 mt-3">
              <div>
                <button onClick={BookingOpen} className="min-w-[300px] py-5  w-full text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium">
                  Request to Book
                </button>
              </div>

              <div
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)" }}
                className={`absolute mr-9 min-h-[180px] w-full left-[48%] translate-x-[-50%] duration-300 transition-all  bg-white z-[60] p-4 ${
                  isOpen ? "opacity-100 bottom-[-1%]" : " opacity-0 bottom-[-500%]"
                }`}
              >
                <div className="top p-2 mt-8 h-1/2 max-h-44 w-full flex items-end ">
                  <CloseIcon onClick={BookingOpen} className="absolute top-3 right-3" />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box display="flex" justifyContent="space-between" gap="15px" width="100%">
                      <div className="bookingDetails h-44 w-full flex flex-col justify-center items-center">
                        <div className="deTop h-22 w-full p-1 flex gap-[5px]">
                          <div className="checkIn h-full w-1/2 bg-gray-200 border-[1.5px] border-black border-opacity-60 py-2 rounded-md p-2">
                            <h4 className="text-sm font-primaryRegular tracking-tight">Check-in</h4>
                            <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight">{checkin}</h4>
                            <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">{/* <span className="text-sm">From</span> 02:00 */}</h4>
                          </div>
                          <div className="checkOut h-full w-1/2 bg-gray-200 border-[1.5px] border-black border-opacity-60 py-2 rounded-md p-2">
                            <h4 className="text-sm font-primaryRegular tracking-tight">Check-out</h4>
                            <h4 className="text-lg -mb-1 font-primaryMedium tracking-tight">{checkout}</h4>
                            <h4 className="text-lg -mb-1 font-primaryRegular tracking-tight">{/* <span className="text-sm">Until</span> 11:00 */}</h4>
                          </div>
                        </div>
                        <div className="deBottom h-20 w-[98%]  bg-gray-200 border-[1.5px] border-black border-opacity-60 py-2 rounded-md p-3">
                          <h4 className="text-xs font-primaryRegular tracking-tight">Guests</h4>
                          <h4 className="text-sm -mb-1 font-primaryMedium tracking-tight">{guests}</h4>
                        </div>

                        <div className="price w-[98%] h-16 p-2 flex items-center justify-between mt-1">
                          <h3 className="text-[24px] font-primaryMedium">Total</h3>
                          <h3 className="text-[24px] font-primaryMedium">₹{amount}</h3>
                        </div>
                      </div>
                    </Box>
                  </LocalizationProvider>
                </div>
                <div className="flex w-full mt-2 mb-8 xl:px-4"></div>

                <div className="h-16 w-full bg-transparent flex justify-center items-center px-2 rounded-md">
                  {/* <span className="text-xl font-primaryMedium">₹150,000</span> */}
                  <span className="text-xl font-primaryMedium">
                    {/* {selectedDates?.length !== 2 ? (
                        <div
                          className="py-[14px] px-10  text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] rounded-md font-primaryMedium cursor-pointer"
                          onClick={handleClick}
                        >
                          Book Now
                        </div>
                      ) : (
                        <Link href={`/check-out/${guests}${selectedDates.length > 0 ? `/${selectedDates[0].format("YYYY-MM-DD")}/${selectedDates[1].format("YYYY-MM-DD")}` : ""}/${propId}`}>
                          <span className="py-[18px] px-6 w-[86%]  text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] mt-4 rounded-md font-primaryMedium grid place-items-center">Book Now</span>
                        </Link>
                      )} */}
                    <span onClick={handleClick} className="py-[18px] px-6 w-[86%] min-w-[300px] text-sm bg-[#5D0E41] text-white transition-all hover:bg-[#000] mt-0 rounded-md font-primaryMedium grid place-items-center">
                      Request to Book
                    </span>
                  </span>
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

export default CheckOut;
