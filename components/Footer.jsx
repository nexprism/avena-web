import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="min-h-[50vh] w-full bg-[#000416] flex justify-center pb-16 xl:h-[25vh]">
      <div className="w-[85%] flex flex-wrap justify-between gap-10 text-white pt-8">
        <div className="box1 min-w-[250px] mr-8 flex-1  max-w-[300px]">
          <h2 className="text-5xl md:text-3xl font-primaryBold mb-4">AVENA</h2>
          <p className="opacity-[0.6] text-sm">Welcome to Avena, offering diverse accommodations from Apartments to Villas, Resorts, and Hotels, tailored to your unique needs.</p>
          <button className="p-3 pl-10 pr-10 mt-8 bg-[#5D0E41] text-white transition-all hover:bg-[#fff] hover:text-black font-Barlow rounded-md">Explore More</button>
        </div>

        <div className="box2 min-w-[80px] max-w-[200px] flex-1 md:ml-24 md:-mr-8">
          <h4 className="text-lg mb-4 font-Barlow">Product</h4>
          <ul className="opacity-[0.6]">
            <Link href={"/"}>
              <li className="mb-2">Home</li>
            </Link>
            <Link href={"/find-hotel"}>
              <li className="mb-2">Find Hotel</li>
            </Link>
            <Link href={"/about"}>
              <li className="mb-2">About</li>
            </Link>
          </ul>
        </div>

        <div className="box3 min-w-[100px] max-w-[200px] flex-1">
          <h4 className="text-lg mb-4 font-Barlow">Company</h4>
          <ul className="opacity-[0.6]">
            <Link href={"/terms"}>
              <li className="mb-2">Terms & Conditions </li>
            </Link>
            <Link href={"/booking-cancellation-policy"}>
              <li className="mb-2">Booking & Cancellation Policy</li>
            </Link>
            <Link href={"/privacy-policy"}>
              <li className="mb-2">Privacy Policy</li>
            </Link>
          </ul>
        </div>

        <div className="box4 min-w-[200px]  flex-1 max-w-[280px]">
          <h4 className="text-lg mb-4 font-Barlow">Contact</h4>
          <ul className="opacity-[0.6]">
            <Link href={"mailto:avena@gmail.com"}>
              <li className="mb-2">help@avena.co.in</li>
            </Link>
            <Link href={"tel:07510359575"}>
              <li className="mb-2">+919226376357</li>
            </Link>
            <li className="mb-2 max-w-[300px]">Vijayanand Society, Plot no 20, Narendra Nagar, Somalwada, Nagpur Maharashtra 440015</li>

          </ul>
        </div>
        <div className="box4 min-w-[250px] flex-1 max-w-[240px]">
          <h4 className="text-lg mb-4 font-Barlow">Property Owners?</h4>
          <ul className="opacity-[0.6]">
            <Link href={"mailto:avena@gmail.com"}>
              <li className="mb-2">Patron@gmail.com</li>
            </Link>
            <li className="mb-2 max-w-[300px]"></li>
          </ul>
          <h4 className="text-lg mb-2 font-Barlow">Guest?</h4>
          <ul className="opacity-[0.6]">
            <Link href={"tel:07510359575"}>
              <li className="mb-2">Booking@avena.co.in</li>
            </Link>
            <li className="mb-2 max-w-[300px]"></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <Link href={"https://instagram.com"}>
              <InstagramIcon />
            </Link>
            <Link href={"https://facebook.com"}>
              <FacebookIcon />
            </Link>
            <Link href={"https://x.com"}>
              <XIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
