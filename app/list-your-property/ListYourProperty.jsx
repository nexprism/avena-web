"use client";
import { useEffect, useState } from "react";
import slide from "../../public/Images/slide2.jpg";

import slide2 from "../../public/Images/steps.jpg";
import dashboard from "../../public/Images/dashboard.png";
import rent from "../../public/Images/rent.png";
import tracker from "../../public/Images/tracker.png";
import rate from "../../public/Images/Rate.png";
import emailNot from "../../public/Images/emailNot.png";
import hassal from "../../public/Images/hassal.png";
import damage from "../../public/Images/damage.png";
import user from "../../public/Images/user.png";
import increase from "../../public/Images/increase.svg";
import dahPhoneImg from "../../public/Images/DashPhoneImg.png";
import listPhoto from "../../public/Images/listPhoto.jpg";

import toast from "react-hot-toast";
import Image from "next/image";
import WhychooseUs from "@/components/WhychooseUs";
import Testimonials from "@/components/Testimonials";
import AboutUS from "@/components/AboutUS";
import Footer from "@/components/Footer";
import {gsap} from 'gsap';
import { useGSAP } from "@gsap/react";
import Typewriter from "typewriter-effect";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
 
const ListYourProperty = ({ base_url }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [applicationStatus] = useState("initiated");
  const [address, setAddress] = useState("");


  useGSAP(() => {
  
    // Animate each word within the headerText class
    gsap.fromTo(
      ".headerText",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.1 }
    );

    gsap.fromTo(".stepsIMG",
    {
     y: 50, opacity: 0 
    },
    {
      y:0,
      opacity:1,
      scrollTrigger:{
        trigger:'.stepsIMG',
        start:" 80%",
        end:"top 50%",
        scrub:1
      }
    })
    gsap.fromTo(".features",
    {
     y: 50, opacity: 0 
    },
    {
      y:0,
      opacity:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.features',
        start:"top bottom",
        end:"top 70%",
        scrub:3,
        once: true 
      }
    })

  }, []);
  
  
  
  



  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${base_url}/api/v1/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        description,
        applicationStatus,
        address,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Application submitted successfully!");
          event.target.reset();
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {});
  }

  return (
    <>
      <div className=" min-h-[600px] w-full flex items-center justify-center flex-col relative z-[22] overflow-hidden">
        <h2 className="headerText text-[32px] md:text-[40px] lg:text-[48px] font-semibold md:w-[90%] lg:w-[80%] xl:w-[90%] max-w-[1000px] text-center leading-10 relative z-[22] text-white">
          List your property for free with
          <span className="text-[#5D0E41] ml-2 mr-2 text-[44px] font-bold relative" style={{ textShadow: "2px 2px 0 #fff, -2px -2px 0 #FFF , 2px -2px 0 #fff, -2px 2px 0 #fff" }}>
            AVENA
          </span>
          and maximize Property Revenue.
        </h2>

        <h4 className="mt-6 flex text-[20px] items-center md:text-[22px] font-semibold relative z-[22] text-white text-center">
          We can List your&nbsp;
          <span className="text-[24px]">
          <Typewriter
          options={{
            strings: ['Apartment', 'Hotel','Villa','Resort','Lodge','Guest house'],
            autoStart: true,
            loop: true,
          }}
        />
          </span>
        </h4>

        {/* <h4 className="mt-6 md:text-[22px] font-semibold relative z-[22] text-white text-center">Apartment, Hotel, Villa, Resort, Lodge, Guest house</h4> */}
        <div className="overlay z-[2] absolute h-full w-full bg-[#00000054]"></div>
        <Image className="absolute z-[1] h-full w-full object-cover" src={listPhoto} alt="" />
      </div>

      <div className="steps h-[300px] p-3 md:min-h-[500px] max-h-[600px] w-full bg-white flex items-center justify-center mb-4">
        <Image className="stepsIMG h-full w-full object-contain scale-[1.1] md:scale-[0.8] lg:scale-[1]" src={slide2} alt="steps image" />
      </div>

      <div className="min-h-[500px] bg-[#f1f1f1] w-full flex flex-col items-center mb-8 p-[2vw]">
        <h2 className="text-[35px] font-primaryBold uppercase text-center">
          why choose <span className="text-[#5D0E41] text-[42px] ">Avena?</span>
        </h2>
        <div className="w-[90%] flex flex-col items-center md:flex-row md:justify-center md:items-start flex-wrap  min-h-[400px] mt-3 p-2">
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={rent} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85 uppercase">Minimum Rent</h4>
            <p className="text-center w-[80%] ">Get fixed minimum rent monthly on low sale</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={rate} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85 uppercase">60% Revenue Profit</h4>
            <p className="text-center w-[80%] ">Advantage of 60% profit on good sale</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={increase} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85 uppercase text-center">5% Increment</h4>
            <p className="text-center w-[80%] ">5% Minimum Rent Increment Every 6 Months</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={damage} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85 uppercase text-center">Damage Replacement Policy</h4>
            <p className="text-center w-[80%] ">Property damage covered with easy replacement process.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={dashboard} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85 uppercase text-center">DASHBOARD</h4>
            <p className="text-center w-[80%] ">Track guest details payment details from dashboard</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={hassal} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85 uppercase text-center">Hassle Free Management</h4>
            <p className="text-center w-[80%] ">Avena handles bill payments and property management.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={emailNot} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">EMAIL NOTIFICATION</h4>
            <p className="text-center w-[80%] ">
            Get email alerts for all bookings, transactions, and events.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={user} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">USER ACTIVITY</h4>
            <p className="text-center w-[80%] ">
            Track all customer activities: bookings, reviews, and ratings.</p>
          </div>
        </div>
        {/* <div className="w-[90%] flex flex-col items-center md:flex-row md:justify-center md:items-start flex-wrap  min-h-[400px] mt-3 p-2">
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={dashboard} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">DASHBOARD</h4>
            <p className="text-center w-[80%] ">
            A comprehensive interface for monitoring multiple items.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={rate} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">COMPETITIVE RATE</h4>
            <p className="text-center w-[80%] ">Set your prices to be ahead of your competition</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={tracker} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">AVAILABILITY TRACKER</h4>
            <p className="text-center w-[80%] ">Gives you detailed control over all guest information.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={rent} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">MONTHLY RENT</h4>
            <p className="text-center w-[80%] ">Ensure steady monthly income for reliable financial stability.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={emailNot} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">EMAIL NOTIFICATION</h4>
            <p className="text-center w-[80%] ">
            Get email alerts for all bookings, transactions, and events.</p>
          </div>
          <div className="features min-w-[300px] w-full md:max-w-[310px]  h-[200px]  mb-2 flex flex-col justify-center items-center relaive">
            <Image className="h-[50px] w-full object-contain mb-4 opacity-75" src={user} alt="" />
            <h4 className="text-[20px] font-primaryBold opacity-85">USER ACTIVITY</h4>
            <p className="text-center w-[80%] ">
            Track all customer activities: bookings, reviews, and ratings.</p>
          </div>
        </div> */}
      </div>

      <div className="min-h-[300px] w-full p-10 flex flex-col md:flex-row justify-center items-center">
        <Image className="h-auto w-full md:w-1/2 object-contain scale-100 md:scale-[0.9] lg:scale-[1]" src={dahPhoneImg} alt="steps image" />

        <h2 className="text-[22px] md:text-[26px] lg:text-[32px] font-semibold text-center md:text-left md:w-[90%] lg:w-[80%] xl:w-[60%] max-w-[800px] leading-6 md:leading-10 text-black mt-8 md:mt-0 md:ml-10">
          
            From Desktop to mobile phones to tablets , moniter all customer details from anywhere and anytime.
        </h2>
      </div>

      <div className="min-h-[820px]  md:h-[700px] pb-14 md:pb-0 lg:min-h-[720px]  lg:max-h-[600px] w-full relative overflow-hidden">
        <div className="darkoverlay absolute h-full w-full bg-[#00000069] z-20"></div>
        <div className="wrapper h-full w-full object-center md:flex-row flex justify-center sm:justify-evenly items-center flex-wrap lg:pt-12">
          <div className="text font-fatFace relative z-50 max-w-[600px] mt-[200px] mb-[100px]">
            <h1 className="text-white text-[30px]  leading-[45px] md:leading-[55px] md:text-[40px] lg:text-[50px]">
              Elevate Your Property&apos;s <br /> Potential – Partner with <br /> Us for Success!
            </h1>
          </div>

          <form
            className="min-h-[400px] py-4  w-[370px] max-h-[800px] lg:min-w-[480px] sm:min-w-[480px] lg:min-h-[500px] relative z-50 bg-white  rounded-lg flex flex-col items-center text-black "
            onSubmit={handleSubmit}
          >
            <h1 className="text-sm text-center font-primaryRegular font-bold mt-6 mb-4">Tell us more about your house</h1>

            <div className="w-[88%] mb-1 lg:flex md:gap-2">
              <input
                className="w-[100%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-2"
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                style={{ color: "black" }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="w-[100%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-2"
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                style={{ color: "black" }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="w-[88%] mb-1 lg:flex md:gap-2">
              <input
                className="w-[100%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-2"
                type="email"
                placeholder="Email ID"
                name="email"
                required
                style={{ color: "black" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-[100%] text-sm p-3 rounded-sm border-2 border-black border-opacity-15 mb-2"
                type="number"
                placeholder="Mobile Number"
                name="phone"
                required
                style={{ color: "black" }}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <textarea
              name="textarea"
              id=""
              placeholder="Address..."
              className="w-[88%] h-20 p-3 mt-4 md:mt-0 border-2 border-black border-opacity-15 rounded-sm resize-none outline-none mb-4"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <textarea
              name="textarea"
              id=""
              placeholder="Describe your property..."
              className="w-[88%] h-20 p-3 mt-4 md:mt-0 border-2 border-black border-opacity-15 rounded-sm resize-none outline-none"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button className="p-3 pl-10 pr-10 mt-4 w-[85%] bg-[#5D0E41] text-white transition-all hover:bg-[#000] font-Barlow rounded-md" type="submit">
              Send a Request
            </button>
          </form>

          <Image className="h-full w-full absolute z-10 top-0 object-cover" src={slide} alt="" />
        </div>
      </div>

      <Testimonials />
      <Footer />
    </>
  );
};

export default ListYourProperty;
