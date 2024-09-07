import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { Toaster as ShadToaster } from "@/components/ui/sonner";
// import localFont from "next/font/loal";

import { Abril_Fatface } from "next/font/google";
import { Barlow } from "next/font/google";
import { Montserrat } from "next/font/google";
const barlow = Barlow({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-barlow",
});
const fatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fatface",
});
const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-primary-light",
});

const montserratRegular = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary-regular",
});

const montserratMedium = Montserrat({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-primary-medium",
});

const montserratBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-primary-bold",
});

export const metadata = {
  title: "Avena",
  description: "Avena - A place to book your dream vacation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fatface.variable} ${barlow.variable} ${montserratLight.variable} ${montserratRegular.variable} ${montserratMedium.variable} ${montserratBold.variable}`}>
        <Navbar />
        {children}
        <Toaster />
        <ShadToaster />
      </body>
      <Script id="razorpay-checkout" src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
    </html>
  );
}
