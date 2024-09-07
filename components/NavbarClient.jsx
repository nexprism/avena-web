"use client";
import React, { useRef, useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenuDemo } from "./dropdown";

gsap.registerPlugin(ScrollTrigger);

export const NavbarClient = ({ session }) => {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const slide = useRef();

  const hamOpen = () => {
    if (isOpen) {
      slide.current.style.right = "-100%";
    } else {
      slide.current.style.right = "0";
    }
    setIsOpen(!isOpen);
  };

  // Apply GSAP animations based on the current route
  useEffect(() => {
    location === "/" || location === "/list-your-property";
    gsap.to(".navbar", {
      backgroundColor: "white",
      color: "#000000",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
      position: "fixed",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top 10%",
        end: "top 15%",
        scrub: 1,
      },
    });

    gsap.to(".navbar-text", {
      color: "#000",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top -10%",
        end: "top 15%",
        scrub: 1,
      },
    });
  }, [location]);

  const navbarStyle = location === "/" || location === "/list-your-property" ? "navbar bg-transparent shadow-none" : "navbar bg-white shadow-lg";

  const navbarStyle2 = location === "/" ? "fixed top-[80px] lg:top-[50px]" : "top-0";

  const getActiveClass = (path) => {
    return location === path ? "!text-yellow-500" : "";
  };

  return (
    <div className={`${navbarStyle} ${navbarStyle2} z-[99] h-[70px] w-full flex items-center justify-between pl-4 pr-4 md:pl-24 xl:pl-44 xl:pr-44`}>
      <div className="nav-right">
        <Link href="/">
          <div className="logo">
            <h1 className="text-3xl lg:text-3xl font-primaryBold text-[#5D0E41]">AVENA</h1>
          </div>
        </Link>
      </div>

      <div className="left">
        <div onClick={hamOpen} className="smallDevices -mt-2 sm:-mt-2  absolute z--[999] right-6 md:flex lg:hidden xl:hidden h-12 w-12 flex items-center justify-center">
          <MenuOutlinedIcon className="scale-[1.5]" />
        </div>

        <div ref={slide} className="hamburger lg:hidden transition-all h-screen w-[280px] absolute top-0 right-[-100%] bg-[#fff] shadow-xl z-[1000]">
          <div className="top h-[150px] w-full bg-[#702b58] relative">
            <div onClick={hamOpen} className="hamclose text-white scale-[1.8] absolute right-[30px] top-7">
              <CloseOutlinedIcon />
            </div>
            <h1 className="absolute bottom-6 font-PrimaryBold left-7 text-2xl text-white leading-6">
              <span className="text-sm font-primaryMedium">Welcome</span> <br />
              Username
            </h1>
          </div>

          <div className="hamcontent p-8 leading-10">
            <ul>
              <Link href="/">
                <li className={`text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg ${getActiveClass("/")}`}>Home</li>
              </Link>
              <Link href="/">
                <li className={`text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg ${getActiveClass("/bookings")}`}>Bookings</li>
              </Link>
              <Link href="/">
                <li className={`text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg ${getActiveClass("/contact")}`}>Contact Us</li>
              </Link>
              <Link href="/explore">
                <li className={`text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg ${getActiveClass("/explore")}`}>Explore</li>
              </Link>
              <Link href="/list-your-property">
                <li className={`text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg ${getActiveClass("/list-your-property")}`}>
                  List Your Property
                </li>
              </Link>
              <Link href="/sign-in">
                <li className={`text-lg font-medium font-primaryMedium pl-6 pt-2 mb-2 pb-2 hover:bg-[#702b58] hover:text-white rounded-lg ${getActiveClass("/sign-in")}`}>Sign In</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="nav-center flex items-center lg:flex md:mr-32  sm:mr-16 lg:-mr-3">
          <ul className="hidden xl:flex gap-8 lg:flex mr-4">
            <Link href="/">
              <li className={`navbar-text font-primaryMedium text-sm ${getActiveClass("/")}`}>Home</li>
            </Link>
            <Link href="/bookings">
              <li className={`navbar-text font-primaryMedium text-sm ${getActiveClass("/b")}`}>Bookings</li>
            </Link>
            <Link href="/">
              <li className={`navbar-text font-primaryMedium text-sm ${getActiveClass("/contact")}`}>Contact</li>
            </Link>
            <Link href="/explore">
              <li className={`navbar-text font-primaryMedium text-sm ${getActiveClass("/explore")}`}>Explore</li>
            </Link>
          </ul>

          <Link href="/list-your-property">
            <div className="pt-2 pb-2 px-6 ml-4 -mr-2 md:-mr-14 xl:mr-0 lg:mr-20 border-2 hidden sm:flex rounded-full border-[#702b58] border-opacity-75 hover:text-white hover:bg-[#702b58] transition-all hover:text-sm text-[#702b58] bg-white text-xs font-Barlow uppercase">
              List your Property
            </div>
          </Link>
          {session ? (
            <DropdownMenuDemo session={session} />
          ) : (
            <Link href="/sign-in">
              <div className={`navbar-text ml-[12vw] sm:mr-0 mr-[60px]  bg-[#ffffff] p-2 text-xs px-3 rounded-3xl font-primaryMedium sm:flex ${getActiveClass("/sign-in")}`}>Sign In</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
