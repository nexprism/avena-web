"use client";
import { useState, useEffect, useRef } from "react";
import img1 from ".././public/Images/slide1.jpg";
import img2 from ".././public/Images/slide2.jpg";
import img3 from ".././public/Images/slide3.jpg";
import svg1 from ".././public/Images/location.png";
import svg2 from ".././public/Images/calender.png";
import svg3 from ".././public/Images/room.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const images = [img1, img2, img3];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const dateInputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);


  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  };
  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity.label);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const openHandler = () => {
    setOpen(!open);
  };

  const increment = (setter) => setter((prev) => prev + 1);
  const decrement = (setter) => setter((prev) => (prev > 1 ? prev - 1 : prev));

  const formatNumber = (number) => number;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  const resetCounters = () => {
    setAdults(1);
    setChildren(0);
    setInfants(0);
    setRooms(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  const cityArray = [
    {
      id: "1",
      label: "Mumbai",
      value: "mumbai",
      state: "Maharashtra",
    },
    {
      id: "2",
      label: "Delhi",
      value: "delhi",
      state: "Delhi",
    },
    {
      id: "3",
      label: "Bengaluru",
      value: "bengaluru",
      state: "Karnataka",
    },
    {
      id: "4",
      label: "Ahmedabad",
      value: "ahmedabad",
      state: "Gujarat",
    },
    {
      id: "5",
      label: "Hyderabad",
      value: "hyderabad",
      state: "Telangana",
    },
    {
      id: "6",
      label: "Chennai",
      value: "chennai",
      state: "Tamil Nadu",
    },
    {
      id: "7",
      label: "Kolkata",
      value: "kolkata",
      state: "West Bengal",
    },
    {
      id: "8",
      label: "Pune",
      value: "pune",
      state: "Maharashtra",
    },
    {
      id: "9",
      label: "Jaipur",
      value: "jaipur",
      state: "Rajasthan",
    },
    {
      id: "10",
      label: "Surat",
      value: "surat",
      state: "Gujarat",
    },
    {
      id: "11",
      label: "Lucknow",
      value: "lucknow",
      state: "Uttar Pradesh",
    },
    {
      id: "12",
      label: "Kanpur",
      value: "kanpur",
      state: "Uttar Pradesh",
    },
    {
      id: "13",
      label: "Nagpur",
      value: "nagpur",
      state: "Maharashtra",
    },
    {
      id: "14",
      label: "Patna",
      value: "patna",
      state: "Bihar",
    },
    {
      id: "15",
      label: "Indore",
      value: "indore",
      state: "Madhya Pradesh",
    },
    {
      id: "16",
      label: "Thane",
      value: "thane",
      state: "Maharashtra",
    },
    {
      id: "17",
      label: "Bhopal",
      value: "bhopal",
      state: "Madhya Pradesh",
    },
    {
      id: "18",
      label: "Visakhapatnam",
      value: "visakhapatnam",
      state: "Andhra Pradesh",
    },
    {
      id: "19",
      label: "Vadodara",
      value: "vadodara",
      state: "Gujarat",
    },
    {
      id: "20",
      label: "Firozabad",
      value: "firozabad",
      state: "Uttar Pradesh",
    },
    {
      id: "21",
      label: "Ludhiana",
      value: "ludhiana",
      state: "Punjab",
    },
    {
      id: "22",
      label: "Rajkot",
      value: "rajkot",
      state: "Gujarat",
    },
    {
      id: "23",
      label: "Agra",
      value: "agra",
      state: "Uttar Pradesh",
    },
    {
      id: "24",
      label: "Siliguri",
      value: "siliguri",
      state: "West Bengal",
    },
    {
      id: "25",
      label: "Nashik",
      value: "nashik",
      state: "Maharashtra",
    },
    {
      id: "26",
      label: "Faridabad",
      value: "faridabad",
      state: "Haryana",
    },
    {
      id: "27",
      label: "Patiala",
      value: "patiala",
      state: "Punjab",
    },
    {
      id: "28",
      label: "Meerut",
      value: "meerut",
      state: "Uttar Pradesh",
    },
    {
      id: "29",
      label: "Kalyan-Dombivali",
      value: "kalyan-dombivali",
      state: "Maharashtra",
    },
    {
      id: "30",
      label: "Vasai-Virar",
      value: "vasai-virar",
      state: "Maharashtra",
    },
    {
      id: "31",
      label: "Varanasi",
      value: "varanasi",
      state: "Uttar Pradesh",
    },
    {
      id: "32",
      label: "Srinagar",
      value: "srinagar",
      state: "Jammu and Kashmir",
    },
    {
      id: "33",
      label: "Dhanbad",
      value: "dhanbad",
      state: "Jharkhand",
    },
    {
      id: "34",
      label: "Jodhpur",
      value: "jodhpur",
      state: "Rajasthan",
    },
    {
      id: "35",
      label: "Amritsar",
      value: "amritsar",
      state: "Punjab",
    },
    {
      id: "36",
      label: "Raipur",
      value: "raipur",
      state: "Chhattisgarh",
    },
    {
      id: "37",
      label: "Allahabad",
      value: "allahabad",
      state: "Uttar Pradesh",
    },
    {
      id: "38",
      label: "Coimbatore",
      value: "coimbatore",
      state: "Tamil Nadu",
    },
    {
      id: "39",
      label: "Jabalpur",
      value: "jabalpur",
      state: "Madhya Pradesh",
    },
    {
      id: "40",
      label: "Gwalior",
      value: "gwalior",
      state: "Madhya Pradesh",
    },
    {
      id: "41",
      label: "Vijayawada",
      value: "vijayawada",
      state: "Andhra Pradesh",
    },
    {
      id: "42",
      label: "Madurai",
      value: "madurai",
      state: "Tamil Nadu",
    },
    {
      id: "43",
      label: "Guwahati",
      value: "guwahati",
      state: "Assam",
    },
    {
      id: "44",
      label: "Chandigarh",
      value: "chandigarh",
      state: "Chandigarh",
    },
    {
      id: "45",
      label: "Hubli-Dharwad",
      value: "hubli-dharwad",
      state: "Karnataka",
    },
    {
      id: "46",
      label: "Amroha",
      value: "amroha",
      state: "Uttar Pradesh",
    },
    {
      id: "47",
      label: "Moradabad",
      value: "moradabad",
      state: "Uttar Pradesh",
    },
    {
      id: "48",
      label: "Gurgaon",
      value: "gurgaon",
      state: "Haryana",
    },
    {
      id: "49",
      label: "Aligarh",
      value: "aligarh",
      state: "Uttar Pradesh",
    },
    {
      id: "50",
      label: "Solapur",
      value: "solapur",
      state: "Maharashtra",
    },
    {
      id: "51",
      label: "Ranchi",
      value: "ranchi",
      state: "Jharkhand",
    },
    {
      id: "52",
      label: "Jalandhar",
      value: "jalandhar",
      state: "Punjab",
    },
    {
      id: "53",
      label: "Tiruchirappalli",
      value: "tiruchirappalli",
      state: "Tamil Nadu",
    },
    {
      id: "54",
      label: "Bhubaneswar",
      value: "bhubaneswar",
      state: "Odisha",
    },
    {
      id: "55",
      label: "Salem",
      value: "salem",
      state: "Tamil Nadu",
    },
    {
      id: "56",
      label: "Warangal",
      value: "warangal",
      state: "Telangana",
    },
    {
      id: "57",
      label: "Mira-Bhayandar",
      value: "mira-bhayandar",
      state: "Maharashtra",
    },
    {
      id: "58",
      label: "Thiruvananthapuram",
      value: "thiruvananthapuram",
      state: "Kerala",
    },
    {
      id: "59",
      label: "Bhiwandi",
      value: "bhiwandi",
      state: "Maharashtra",
    },
    {
      id: "60",
      label: "Saharanpur",
      value: "saharanpur",
      state: "Uttar Pradesh",
    },
    {
      id: "61",
      label: "Guntur",
      value: "guntur",
      state: "Andhra Pradesh",
    },
    {
      id: "62",
      label: "Amravati",
      value: "amravati",
      state: "Maharashtra",
    },
    {
      id: "63",
      label: "Bikaner",
      value: "bikaner",
      state: "Rajasthan",
    },
    {
      id: "64",
      label: "Noida",
      value: "noida",
      state: "Uttar Pradesh",
    },
    {
      id: "65",
      label: "Jamshedpur",
      value: "jamshedpur",
      state: "Jharkhand",
    },
    {
      id: "66",
      label: "Bhilai Nagar",
      value: "bhilai nagar",
      state: "Chhattisgarh",
    },
    {
      id: "67",
      label: "Cuttack",
      value: "cuttack",
      state: "Odisha",
    },
    {
      id: "68",
      label: "Kochi",
      value: "kochi",
      state: "Kerala",
    },
    {
      id: "69",
      label: "Udaipur",
      value: "udaipur",
      state: "Rajasthan",
    },
    {
      id: "70",
      label: "Bhavnagar",
      value: "bhavnagar",
      state: "Gujarat",
    },
    {
      id: "71",
      label: "Dehradun",
      value: "dehradun",
      state: "Uttarakhand",
    },
    {
      id: "72",
      label: "Asansol",
      value: "asansol",
      state: "West Bengal",
    },
    {
      id: "73",
      label: "Nanded-Waghala",
      value: "nanded-waghala",
      state: "Maharashtra",
    },
    {
      id: "74",
      label: "Ajmer",
      value: "ajmer",
      state: "Rajasthan",
    },
    {
      id: "75",
      label: "Jamnagar",
      value: "jamnagar",
      state: "Gujarat",
    },
    {
      id: "76",
      label: "Ujjain",
      value: "ujjain",
      state: "Madhya Pradesh",
    },
    {
      id: "77",
      label: "Sangli",
      value: "sangli",
      state: "Maharashtra",
    },
    {
      id: "78",
      label: "Loni",
      value: "loni",
      state: "Uttar Pradesh",
    },
    {
      id: "79",
      label: "Jhansi",
      value: "jhansi",
      state: "Uttar Pradesh",
    },
    {
      id: "80",
      label: "Pondicherry",
      value: "pondicherry",
      state: "Puducherry",
    },
    {
      id: "81",
      label: "Nellore",
      value: "nellore",
      state: "Andhra Pradesh",
    },
    {
      id: "82",
      label: "Jammu",
      value: "jammu",
      state: "Jammu and Kashmir",
    },
    {
      id: "83",
      label: "Belagavi",
      value: "belagavi",
      state: "Karnataka",
    },
    {
      id: "84",
      label: "Raurkela",
      value: "raurkela",
      state: "Odisha",
    },
    {
      id: "85",
      label: "Mangaluru",
      value: "mangaluru",
      state: "Karnataka",
    },
    {
      id: "86",
      label: "Tirunelveli",
      value: "tirunelveli",
      state: "Tamil Nadu",
    },
    {
      id: "87",
      label: "Malegaon",
      value: "malegaon",
      state: "Maharashtra",
    },
    {
      id: "88",
      label: "Gaya",
      value: "gaya",
      state: "Bihar",
    },
    {
      id: "89",
      label: "Tiruppur",
      value: "tiruppur",
      state: "Tamil Nadu",
    },
    {
      id: "90",
      label: "Davanagere",
      value: "davanagere",
      state: "Karnataka",
    },
    {
      id: "91",
      label: "Kozhikode",
      value: "kozhikode",
      state: "Kerala",
    },
    {
      id: "92",
      label: "Akola",
      value: "akola",
      state: "Maharashtra",
    },
    {
      id: "93",
      label: "Kurnool",
      value: "kurnool",
      state: "Andhra Pradesh",
    },
    {
      id: "94",
      label: "Bokaro Steel City",
      value: "bokaro steel city",
      state: "Jharkhand",
    },
    {
      id: "95",
      label: "Rajahmundry",
      value: "rajahmundry",
      state: "Andhra Pradesh",
    },
    {
      id: "96",
      label: "Ballari",
      value: "ballari",
      state: "Karnataka",
    },
    {
      id: "97",
      label: "Agartala",
      value: "agartala",
      state: "Tripura",
    },
    {
      id: "98",
      label: "Bhagalpur",
      value: "bhagalpur",
      state: "Bihar",
    },
    {
      id: "99",
      label: "Latur",
      value: "latur",
      state: "Maharashtra",
    },
    {
      id: "100",
      label: "Dhule",
      value: "dhule",
      state: "Maharashtra",
    },
    {
      id: "101",
      label: "Korba",
      value: "korba",
      state: "Chhattisgarh",
    },
    {
      id: "102",
      label: "Bhilwara",
      value: "bhilwara",
      state: "Rajasthan",
    },
    {
      id: "103",
      label: "Brahmapur",
      value: "brahmapur",
      state: "Odisha",
    },
    {
      id: "104",
      label: "Mysore",
      value: "mysore",
      state: "Karnataka",
    },
    {
      id: "105",
      label: "Muzaffarpur",
      value: "muzaffarpur",
      state: "Bihar",
    },
    {
      id: "106",
      label: "Ahmednagar",
      value: "ahmednagar",
      state: "Maharashtra",
    },
    {
      id: "107",
      label: "Kollam",
      value: "kollam",
      state: "Kerala",
    },
    {
      id: "108",
      label: "Raghunathganj",
      value: "raghunathganj",
      state: "West Bengal",
    },
    {
      id: "109",
      label: "Bilaspur",
      value: "bilaspur",
      state: "Chhattisgarh",
    },
    {
      id: "110",
      label: "Shahjahanpur",
      value: "shahjahanpur",
      state: "Uttar Pradesh",
    },
    {
      id: "111",
      label: "Thrissur",
      value: "thrissur",
      state: "Kerala",
    },
    {
      id: "112",
      label: "Alwar",
      value: "alwar",
      state: "Rajasthan",
    },
    {
      id: "113",
      label: "Kakinada",
      value: "kakinada",
      state: "Andhra Pradesh",
    },
    {
      id: "114",
      label: "Nizamabad",
      value: "nizamabad",
      state: "Telangana",
    },
    {
      id: "115",
      label: "Sagar",
      value: "sagar",
      state: "Madhya Pradesh",
    },
    {
      id: "116",
      label: "Tumkur",
      value: "tumkur",
      state: "Karnataka",
    },
    {
      id: "117",
      label: "Hisar",
      value: "hisar",
      state: "Haryana",
    },
    {
      id: "118",
      label: "Rohtak",
      value: "rohtak",
      state: "Haryana",
    },
    {
      id: "119",
      label: "Panipat",
      value: "panipat",
      state: "Haryana",
    },
    {
      id: "120",
      label: "Darbhanga",
      value: "darbhanga",
      state: "Bihar",
    },
    {
      id: "121",
      label: "Kharagpur",
      value: "kharagpur",
      state: "West Bengal",
    },
    {
      id: "122",
      label: "Aizawl",
      value: "aizawl",
      state: "Mizoram",
    },
    {
      id: "123",
      label: "Ichalkaranji",
      value: "ichalkaranji",
      state: "Maharashtra",
    },
    {
      id: "124",
      label: "Tirupati",
      value: "tirupati",
      state: "Andhra Pradesh",
    },
    {
      id: "125",
      label: "Karnal",
      value: "karnal",
      state: "Haryana",
    },
    {
      id: "126",
      label: "Bathinda",
      value: "bathinda",
      state: "Punjab",
    },
    {
      id: "127",
      label: "Rampur",
      value: "rampur",
      state: "Uttar Pradesh",
    },
    {
      id: "128",
      label: "Shivamogga",
      value: "shivamogga",
      state: "Karnataka",
    },
    {
      id: "129",
      label: "Ratlam",
      value: "ratlam",
      state: "Madhya Pradesh",
    },
    {
      id: "130",
      label: "Modinagar",
      value: "modinagar",
      state: "Uttar Pradesh",
    },
    {
      id: "131",
      label: "Durg",
      value: "durg",
      state: "Chhattisgarh",
    },
    {
      id: "132",
      label: "Shillong",
      value: "shillong",
      state: "Meghalaya",
    },
    {
      id: "133",
      label: "Imphal",
      value: "imphal",
      state: "Manipur",
    },
    {
      id: "134",
      label: "Hapur",
      value: "hapur",
      state: "Uttar Pradesh",
    },
    {
      id: "135",
      label: "Ranipet",
      value: "ranipet",
      state: "Tamil Nadu",
    },
    {
      id: "136",
      label: "Anantapur",
      value: "anantapur",
      state: "Andhra Pradesh",
    },
    {
      id: "137",
      label: "Arrah",
      value: "arrah",
      state: "Bihar",
    },
    {
      id: "138",
      label: "Karimnagar",
      value: "karimnagar",
      state: "Telangana",
    },
    {
      id: "139",
      label: "Parbhani",
      value: "parbhani",
      state: "Maharashtra",
    },
    {
      id: "140",
      label: "Etawah",
      value: "etawah",
      state: "Uttar Pradesh",
    },
    {
      id: "141",
      label: "Bharatpur",
      value: "bharatpur",
      state: "Rajasthan",
    },
    {
      id: "142",
      label: "Begusarai",
      value: "begusarai",
      state: "Bihar",
    },
    {
      id: "143",
      label: "New Delhi",
      value: "new delhi",
      state: "Delhi",
    },
    {
      id: "144",
      label: "Chhapra",
      value: "chhapra",
      state: "Bihar",
    },
    {
      id: "145",
      label: "Kadapa",
      value: "kadapa",
      state: "Andhra Pradesh",
    },
    {
      id: "146",
      label: "Ramagundam",
      value: "ramagundam",
      state: "Telangana",
    },
    {
      id: "147",
      label: "Pali",
      value: "pali",
      state: "Rajasthan",
    },
    {
      id: "148",
      label: "Satna",
      value: "satna",
      state: "Madhya Pradesh",
    },
    {
      id: "149",
      label: "Vizianagaram",
      value: "vizianagaram",
      state: "Andhra Pradesh",
    },
    {
      id: "150",
      label: "Katihar",
      value: "katihar",
      state: "Bihar",
    },
    {
      id: "151",
      label: "Hardwar",
      value: "hardwar",
      state: "Uttarakhand",
    },
    {
      id: "152",
      label: "Sonipat",
      value: "sonipat",
      state: "Haryana",
    },
    {
      id: "153",
      label: "Nagercoil",
      value: "nagercoil",
      state: "Tamil Nadu",
    },
    {
      id: "154",
      label: "Thanjavur",
      value: "thanjavur",
      state: "Tamil Nadu",
    },
    {
      id: "155",
      label: "Murwara (Katni)",
      value: "murwara (katni)",
      state: "Madhya Pradesh",
    },
    {
      id: "156",
      label: "Naihati",
      value: "naihati",
      state: "West Bengal",
    },
    {
      id: "157",
      label: "Sambhal",
      value: "sambhal",
      state: "Uttar Pradesh",
    },
    {
      id: "158",
      label: "Nadiad",
      value: "nadiad",
      state: "Gujarat",
    },
    {
      id: "159",
      label: "Yamunanagar",
      value: "yamunanagar",
      state: "Haryana",
    },
    {
      id: "160",
      label: "English Bazar",
      value: "english bazar",
      state: "West Bengal",
    },
    {
      id: "161",
      label: "Eluru",
      value: "eluru",
      state: "Andhra Pradesh",
    },
    {
      id: "162",
      label: "Munger",
      value: "munger",
      state: "Bihar",
    },
    {
      id: "163",
      label: "Panchkula",
      value: "panchkula",
      state: "Haryana",
    },
    {
      id: "164",
      label: "Raayachuru",
      value: "raayachuru",
      state: "Karnataka",
    },
    {
      id: "165",
      label: "Panvel",
      value: "panvel",
      state: "Maharashtra",
    },
    {
      id: "166",
      label: "Deoghar",
      value: "deoghar",
      state: "Jharkhand",
    },
    {
      id: "167",
      label: "Ongole",
      value: "ongole",
      state: "Andhra Pradesh",
    },
    {
      id: "168",
      label: "Nandyal",
      value: "nandyal",
      state: "Andhra Pradesh",
    },
    {
      id: "169",
      label: "Morena",
      value: "morena",
      state: "Madhya Pradesh",
    },
    {
      id: "170",
      label: "Bhiwani",
      value: "bhiwani",
      state: "Haryana",
    },
    {
      id: "171",
      label: "Porbandar",
      value: "porbandar",
      state: "Gujarat",
    },
    {
      id: "172",
      label: "Palakkad",
      value: "palakkad",
      state: "Kerala",
    },
    {
      id: "173",
      label: "Anand",
      value: "anand",
      state: "Gujarat",
    },
    {
      id: "174",
      label: "Purnia",
      value: "purnia",
      state: "Bihar",
    },
    {
      id: "175",
      label: "Baharampur",
      value: "baharampur",
      state: "West Bengal",
    },
    {
      id: "176",
      label: "Barmer",
      value: "barmer",
      state: "Rajasthan",
    },
    {
      id: "177",
      label: "Morvi",
      value: "morvi",
      state: "Gujarat",
    },
    {
      id: "178",
      label: "Orai",
      value: "orai",
      state: "Uttar Pradesh",
    },
    {
      id: "179",
      label: "Bahraich",
      value: "bahraich",
      state: "Uttar Pradesh",
    },
    {
      id: "180",
      label: "Sikar",
      value: "sikar",
      state: "Rajasthan",
    },
    {
      id: "181",
      label: "Vellore",
      value: "vellore",
      state: "Tamil Nadu",
    },
    {
      id: "182",
      label: "Singrauli",
      value: "singrauli",
      state: "Madhya Pradesh",
    },
    {
      id: "183",
      label: "Khammam",
      value: "khammam",
      state: "Telangana",
    },
    {
      id: "184",
      label: "Mahesana",
      value: "mahesana",
      state: "Gujarat",
    },
    {
      id: "185",
      label: "Silchar",
      value: "silchar",
      state: "Assam",
    },
    {
      id: "186",
      label: "Sambalpur",
      value: "sambalpur",
      state: "Odisha",
    },
    {
      id: "187",
      label: "Rewa",
      value: "rewa",
      state: "Madhya Pradesh",
    },
    {
      id: "188",
      label: "Unnao",
      value: "unnao",
      state: "Uttar Pradesh",
    },
    {
      id: "189",
      label: "Hugli-Chinsurah",
      value: "hugli-chinsurah",
      state: "West Bengal",
    },
    {
      id: "190",
      label: "Raiganj",
      value: "raiganj",
      state: "West Bengal",
    },
    {
      id: "191",
      label: "Phusro",
      value: "phusro",
      state: "Jharkhand",
    },
    {
      id: "192",
      label: "Adityapur",
      value: "adityapur",
      state: "Jharkhand",
    },
    {
      id: "193",
      label: "Alappuzha",
      value: "alappuzha",
      state: "Kerala",
    },
    {
      id: "194",
      label: "Bahadurgarh",
      value: "bahadurgarh",
      state: "Haryana",
    },
    {
      id: "195",
      label: "Machilipatnam",
      value: "machilipatnam",
      state: "Andhra Pradesh",
    },
    {
      id: "196",
      label: "Rae Bareli",
      value: "rae bareli",
      state: "Uttar Pradesh",
    },
    {
      id: "197",
      label: "Jalpaiguri",
      value: "jalpaiguri",
      state: "West Bengal",
    },
    {
      id: "198",
      label: "Bharuch",
      value: "bharuch",
      state: "Gujarat",
    },
    {
      id: "199",
      label: "Pathankot",
      value: "pathankot",
      state: "Punjab",
    },
    {
      id: "200",
      label: "Hoshiarpur",
      value: "hoshiarpur",
      state: "Punjab",
    },
    {
      id: "201",
      label: "Baramula",
      value: "baramula",
      state: "Jammu and Kashmir",
    },
    {
      id: "202",
      label: "Adoni",
      value: "adoni",
      state: "Andhra Pradesh",
    },
    {
      id: "203",
      label: "Jind",
      value: "jind",
      state: "Haryana",
    },
    {
      id: "204",
      label: "Tonk",
      value: "tonk",
      state: "Rajasthan",
    },
    {
      id: "205",
      label: "Tenali",
      value: "tenali",
      state: "Andhra Pradesh",
    },
    {
      id: "206",
      label: "Kancheepuram",
      value: "kancheepuram",
      state: "Tamil Nadu",
    },
    {
      id: "207",
      label: "Vapi",
      value: "vapi",
      state: "Gujarat",
    },
    {
      id: "208",
      label: "Sirsa",
      value: "sirsa",
      state: "Haryana",
    },
    {
      id: "209",
      label: "Navsari",
      value: "navsari",
      state: "Gujarat",
    },
    {
      id: "210",
      label: "Mahbubnagar",
      value: "mahbubnagar",
      state: "Telangana",
    },
    {
      id: "211",
      label: "Puri",
      value: "puri",
      state: "Odisha",
    },
    {
      id: "212",
      label: "Robertson Pet",
      value: "robertson pet",
      state: "Karnataka",
    },
    {
      id: "213",
      label: "Erode",
      value: "erode",
      state: "Tamil Nadu",
    },
    {
      id: "214",
      label: "Batala",
      value: "batala",
      state: "Punjab",
    },
    {
      id: "215",
      label: "Haldwani-cum-Kathgodam",
      value: "haldwani-cum-kathgodam",
      state: "Uttarakhand",
    },
    {
      id: "216",
      label: "Vidisha",
      value: "vidisha",
      state: "Madhya Pradesh",
    },
    {
      id: "217",
      label: "Saharsa",
      value: "saharsa",
      state: "Bihar",
    },
    {
      id: "218",
      label: "Thanesar",
      value: "thanesar",
      state: "Haryana",
    },
    {
      id: "219",
      label: "Chittoor",
      value: "chittoor",
      state: "Andhra Pradesh",
    },
    {
      id: "220",
      label: "Veraval",
      value: "veraval",
      state: "Gujarat",
    },
    {
      id: "221",
      label: "Lakhimpur",
      value: "lakhimpur",
      state: "Uttar Pradesh",
    },
    {
      id: "222",
      label: "Sitapur",
      value: "sitapur",
      state: "Uttar Pradesh",
    },
    {
      id: "223",
      label: "Hindupur",
      value: "hindupur",
      state: "Andhra Pradesh",
    },
    {
      id: "224",
      label: "Santipur",
      value: "santipur",
      state: "West Bengal",
    },
    {
      id: "225",
      label: "Balurghat",
      value: "balurghat",
      state: "West Bengal",
    },
    {
      id: "226",
      label: "Ganjbasoda",
      value: "ganjbasoda",
      state: "Madhya Pradesh",
    },
    {
      id: "227",
      label: "Moga",
      value: "moga",
      state: "Punjab",
    },
    {
      id: "228",
      label: "Proddatur",
      value: "proddatur",
      state: "Andhra Pradesh",
    },
    {
      id: "229",
      label: "Srinagar",
      value: "srinagar",
      state: "Uttarakhand",
    },
    {
      id: "230",
      label: "Medinipur",
      value: "medinipur",
      state: "West Bengal",
    },
    {
      id: "231",
      label: "Habra",
      value: "habra",
      state: "West Bengal",
    },
    {
      id: "232",
      label: "Sasaram",
      value: "sasaram",
      state: "Bihar",
    },
    {
      id: "233",
      label: "Hajipur",
      value: "hajipur",
      state: "Bihar",
    },
    {
      id: "234",
      label: "Bhuj",
      value: "bhuj",
      state: "Gujarat",
    },
    {
      id: "235",
      label: "Shivpuri",
      value: "shivpuri",
      state: "Madhya Pradesh",
    },
    {
      id: "236",
      label: "Ranaghat",
      value: "ranaghat",
      state: "West Bengal",
    },
    {
      id: "237",
      label: "Shimla",
      value: "shimla",
      state: "Himachal Pradesh",
    },
    {
      id: "238",
      label: "Tiruvannamalai",
      value: "tiruvannamalai",
      state: "Tamil Nadu",
    },
    {
      id: "239",
      label: "Kaithal",
      value: "kaithal",
      state: "Haryana",
    },
    {
      id: "240",
      label: "Rajnandgaon",
      value: "rajnandgaon",
      state: "Chhattisgarh",
    },
    {
      id: "241",
      label: "Godhra",
      value: "godhra",
      state: "Gujarat",
    },
    {
      id: "242",
      label: "Hazaribag",
      value: "hazaribag",
      state: "Jharkhand",
    },
    {
      id: "243",
      label: "Bhimavaram",
      value: "bhimavaram",
      state: "Andhra Pradesh",
    },
    {
      id: "244",
      label: "Mandsaur",
      value: "mandsaur",
      state: "Madhya Pradesh",
    },
    {
      id: "245",
      label: "Dibrugarh",
      value: "dibrugarh",
      state: "Assam",
    },
    {
      id: "246",
      label: "Kolar",
      value: "kolar",
      state: "Karnataka",
    },
    {
      id: "247",
      label: "Bankura",
      value: "bankura",
      state: "West Bengal",
    },
    {
      id: "248",
      label: "Mandya",
      value: "mandya",
      state: "Karnataka",
    },
    {
      id: "249",
      label: "Dehri-on-Sone",
      value: "dehri-on-sone",
      state: "Bihar",
    },
    {
      id: "250",
      label: "Madanapalle",
      value: "madanapalle",
      state: "Andhra Pradesh",
    },
    {
      id: "251",
      label: "Malerkotla",
      value: "malerkotla",
      state: "Punjab",
    },
    {
      id: "252",
      label: "Lalitpur",
      value: "lalitpur",
      state: "Uttar Pradesh",
    },
    {
      id: "253",
      label: "Bettiah",
      value: "bettiah",
      state: "Bihar",
    },
    {
      id: "254",
      label: "Pollachi",
      value: "pollachi",
      state: "Tamil Nadu",
    },
    {
      id: "255",
      label: "Khanna",
      value: "khanna",
      state: "Punjab",
    },
    {
      id: "256",
      label: "Neemuch",
      value: "neemuch",
      state: "Madhya Pradesh",
    },
    {
      id: "257",
      label: "Palwal",
      value: "palwal",
      state: "Haryana",
    },
    {
      id: "258",
      label: "Palanpur",
      value: "palanpur",
      state: "Gujarat",
    },
    {
      id: "259",
      label: "Guntakal",
      value: "guntakal",
      state: "Andhra Pradesh",
    },
    {
      id: "260",
      label: "Nabadwip",
      value: "nabadwip",
      state: "West Bengal",
    },
    {
      id: "261",
      label: "Udupi",
      value: "udupi",
      state: "Karnataka",
    },
    {
      id: "262",
      label: "Jagdalpur",
      value: "jagdalpur",
      state: "Chhattisgarh",
    },
    {
      id: "263",
      label: "Motihari",
      value: "motihari",
      state: "Bihar",
    },
    {
      id: "264",
      label: "Pilibhit",
      value: "pilibhit",
      state: "Uttar Pradesh",
    },
    {
      id: "265",
      label: "Dimapur",
      value: "dimapur",
      state: "Nagaland",
    },
    {
      id: "266",
      label: "Mohali",
      value: "mohali",
      state: "Punjab",
    },
    {
      id: "267",
      label: "Sadulpur",
      value: "sadulpur",
      state: "Rajasthan",
    },
    {
      id: "268",
      label: "Rajapalayam",
      value: "rajapalayam",
      state: "Tamil Nadu",
    },
    {
      id: "269",
      label: "Dharmavaram",
      value: "dharmavaram",
      state: "Andhra Pradesh",
    },
    {
      id: "270",
      label: "Kashipur",
      value: "kashipur",
      state: "Uttarakhand",
    },
    {
      id: "271",
      label: "Sivakasi",
      value: "sivakasi",
      state: "Tamil Nadu",
    },
    {
      id: "272",
      label: "Darjiling",
      value: "darjiling",
      state: "West Bengal",
    },
    {
      id: "273",
      label: "Chikkamagaluru",
      value: "chikkamagaluru",
      state: "Karnataka",
    },
    {
      id: "274",
      label: "Gudivada",
      value: "gudivada",
      state: "Andhra Pradesh",
    },
    {
      id: "275",
      label: "Baleshwar Town",
      value: "baleshwar town",
      state: "Odisha",
    },
    {
      id: "276",
      label: "Mancherial",
      value: "mancherial",
      state: "Telangana",
    },
    {
      id: "277",
      label: "Srikakulam",
      value: "srikakulam",
      state: "Andhra Pradesh",
    },
    {
      id: "278",
      label: "Adilabad",
      value: "adilabad",
      state: "Telangana",
    },
    {
      id: "279",
      label: "Yavatmal",
      value: "yavatmal",
      state: "Maharashtra",
    },
    {
      id: "280",
      label: "Barnala",
      value: "barnala",
      state: "Punjab",
    },
    {
      id: "281",
      label: "Nagaon",
      value: "nagaon",
      state: "Assam",
    },
    {
      id: "282",
      label: "Narasaraopet",
      value: "narasaraopet",
      state: "Andhra Pradesh",
    },
    {
      id: "283",
      label: "Raigarh",
      value: "raigarh",
      state: "Chhattisgarh",
    },
    {
      id: "284",
      label: "Roorkee",
      value: "roorkee",
      state: "Uttarakhand",
    },
    {
      id: "285",
      label: "Valsad",
      value: "valsad",
      state: "Gujarat",
    },
    {
      id: "286",
      label: "Ambikapur",
      value: "ambikapur",
      state: "Chhattisgarh",
    },
    {
      id: "287",
      label: "Giridih",
      value: "giridih",
      state: "Jharkhand",
    },
    {
      id: "288",
      label: "Chandausi",
      value: "chandausi",
      state: "Uttar Pradesh",
    },
    {
      id: "289",
      label: "Purulia",
      value: "purulia",
      state: "West Bengal",
    },
    {
      id: "290",
      label: "Patan",
      value: "patan",
      state: "Gujarat",
    },
    {
      id: "291",
      label: "Bagaha",
      value: "bagaha",
      state: "Bihar",
    },
    {
      id: "292",
      label: "Hardoi ",
      value: "hardoi ",
      state: "Uttar Pradesh",
    },
    {
      id: "293",
      label: "Achalpur",
      value: "achalpur",
      state: "Maharashtra",
    },
    {
      id: "294",
      label: "Osmanabad",
      value: "osmanabad",
      state: "Maharashtra",
    },
    {
      id: "295",
      label: "Deesa",
      value: "deesa",
      state: "Gujarat",
    },
    {
      id: "296",
      label: "Nandurbar",
      value: "nandurbar",
      state: "Maharashtra",
    },
    {
      id: "297",
      label: "Azamgarh",
      value: "azamgarh",
      state: "Uttar Pradesh",
    },
    {
      id: "298",
      label: "Ramgarh",
      value: "ramgarh",
      state: "Jharkhand",
    },
    {
      id: "299",
      label: "Firozpur",
      value: "firozpur",
      state: "Punjab",
    },
    {
      id: "300",
      label: "Baripada Town",
      value: "baripada town",
      state: "Odisha",
    },
    {
      id: "301",
      label: "Karwar",
      value: "karwar",
      state: "Karnataka",
    },
    {
      id: "302",
      label: "Siwan",
      value: "siwan",
      state: "Bihar",
    },
    {
      id: "303",
      label: "Rajampet",
      value: "rajampet",
      state: "Andhra Pradesh",
    },
    {
      id: "304",
      label: "Pudukkottai",
      value: "pudukkottai",
      state: "Tamil Nadu",
    },
    {
      id: "305",
      label: "Anantnag",
      value: "anantnag",
      state: "Jammu and Kashmir",
    },
    {
      id: "306",
      label: "Tadpatri",
      value: "tadpatri",
      state: "Andhra Pradesh",
    },
    {
      id: "307",
      label: "Satara",
      value: "satara",
      state: "Maharashtra",
    },
    {
      id: "308",
      label: "Bhadrak",
      value: "bhadrak",
      state: "Odisha",
    },
    {
      id: "309",
      label: "Kishanganj",
      value: "kishanganj",
      state: "Bihar",
    },
    {
      id: "310",
      label: "Suryapet",
      value: "suryapet",
      state: "Telangana",
    },
    {
      id: "311",
      label: "Wardha",
      value: "wardha",
      state: "Maharashtra",
    },
    {
      id: "312",
      label: "Ranebennuru",
      value: "ranebennuru",
      state: "Karnataka",
    },
    {
      id: "313",
      label: "Amreli",
      value: "amreli",
      state: "Gujarat",
    },
    {
      id: "314",
      label: "Neyveli (TS)",
      value: "neyveli (ts)",
      state: "Tamil Nadu",
    },
    {
      id: "315",
      label: "Jamalpur",
      value: "jamalpur",
      state: "Bihar",
    },
    {
      id: "316",
      label: "Marmagao",
      value: "marmagao",
      state: "Goa",
    },
    {
      id: "317",
      label: "Udgir",
      value: "udgir",
      state: "Maharashtra",
    },
    {
      id: "318",
      label: "Tadepalligudem",
      value: "tadepalligudem",
      state: "Andhra Pradesh",
    },
    {
      id: "319",
      label: "Nagapattinam",
      value: "nagapattinam",
      state: "Tamil Nadu",
    },
    {
      id: "320",
      label: "Buxar",
      value: "buxar",
      state: "Bihar",
    },
    {
      id: "321",
      label: "Aurangabad",
      value: "aurangabad",
      state: "Maharashtra",
    },
    {
      id: "322",
      label: "Jehanabad",
      value: "jehanabad",
      state: "Bihar",
    },
    {
      id: "323",
      label: "Phagwara",
      value: "phagwara",
      state: "Punjab",
    },
    {
      id: "324",
      label: "Khair",
      value: "khair",
      state: "Uttar Pradesh",
    },
    {
      id: "325",
      label: "Sawai Madhopur",
      value: "sawai madhopur",
      state: "Rajasthan",
    },
    {
      id: "326",
      label: "Kapurthala",
      value: "kapurthala",
      state: "Punjab",
    },
    {
      id: "327",
      label: "Chilakaluripet",
      value: "chilakaluripet",
      state: "Andhra Pradesh",
    },
    {
      id: "328",
      label: "Aurangabad",
      value: "aurangabad",
      state: "Bihar",
    },
    {
      id: "329",
      label: "Malappuram",
      value: "malappuram",
      state: "Kerala",
    },
    {
      id: "330",
      label: "Rewari",
      value: "rewari",
      state: "Haryana",
    },
    {
      id: "331",
      label: "Nagaur",
      value: "nagaur",
      state: "Rajasthan",
    },
    {
      id: "332",
      label: "Sultanpur",
      value: "sultanpur",
      state: "Uttar Pradesh",
    },
    {
      id: "333",
      label: "Nagda",
      value: "nagda",
      state: "Madhya Pradesh",
    },
    {
      id: "334",
      label: "Port Blair",
      value: "port blair",
      state: "Andaman and Nicobar Islands",
    },
    {
      id: "335",
      label: "Lakhisarai",
      value: "lakhisarai",
      state: "Bihar",
    },
    {
      id: "336",
      label: "Panaji",
      value: "panaji",
      state: "Goa",
    },
    {
      id: "337",
      label: "Tinsukia",
      value: "tinsukia",
      state: "Assam",
    },
    {
      id: "338",
      label: "Itarsi",
      value: "itarsi",
      state: "Madhya Pradesh",
    },
    {
      id: "339",
      label: "Kohima",
      value: "kohima",
      state: "Nagaland",
    },
    {
      id: "340",
      label: "Balangir",
      value: "balangir",
      state: "Odisha",
    },
    {
      id: "341",
      label: "Nawada",
      value: "nawada",
      state: "Bihar",
    },
    {
      id: "342",
      label: "Jharsuguda",
      value: "jharsuguda",
      state: "Odisha",
    },
    {
      id: "343",
      label: "Jagtial",
      value: "jagtial",
      state: "Telangana",
    },
    {
      id: "344",
      label: "Viluppuram",
      value: "viluppuram",
      state: "Tamil Nadu",
    },
    {
      id: "345",
      label: "Amalner",
      value: "amalner",
      state: "Maharashtra",
    },
    {
      id: "346",
      label: "Zirakpur",
      value: "zirakpur",
      state: "Punjab",
    },
    {
      id: "347",
      label: "Tanda",
      value: "tanda",
      state: "Uttar Pradesh",
    },
    {
      id: "348",
      label: "Tiruchengode",
      value: "tiruchengode",
      state: "Tamil Nadu",
    },
    {
      id: "349",
      label: "Nagina",
      value: "nagina",
      state: "Uttar Pradesh",
    },
    {
      id: "350",
      label: "Yemmiganur",
      value: "yemmiganur",
      state: "Andhra Pradesh",
    },
    {
      id: "351",
      label: "Vaniyambadi",
      value: "vaniyambadi",
      state: "Tamil Nadu",
    },
    {
      id: "352",
      label: "Sarni",
      value: "sarni",
      state: "Madhya Pradesh",
    },
    {
      id: "353",
      label: "Theni Allinagaram",
      value: "theni allinagaram",
      state: "Tamil Nadu",
    },
    {
      id: "354",
      label: "Margao",
      value: "margao",
      state: "Goa",
    },
    {
      id: "355",
      label: "Akot",
      value: "akot",
      state: "Maharashtra",
    },
    {
      id: "356",
      label: "Sehore",
      value: "sehore",
      state: "Madhya Pradesh",
    },
    {
      id: "357",
      label: "Mhow Cantonment",
      value: "mhow cantonment",
      state: "Madhya Pradesh",
    },
    {
      id: "358",
      label: "Kot Kapura",
      value: "kot kapura",
      state: "Punjab",
    },
    {
      id: "359",
      label: "Makrana",
      value: "makrana",
      state: "Rajasthan",
    },
    {
      id: "360",
      label: "Pandharpur",
      value: "pandharpur",
      state: "Maharashtra",
    },
    {
      id: "361",
      label: "Miryalaguda",
      value: "miryalaguda",
      state: "Telangana",
    },
    {
      id: "362",
      label: "Shamli",
      value: "shamli",
      state: "Uttar Pradesh",
    },
    {
      id: "363",
      label: "Seoni",
      value: "seoni",
      state: "Madhya Pradesh",
    },
    {
      id: "364",
      label: "Ranibennur",
      value: "ranibennur",
      state: "Karnataka",
    },
    {
      id: "365",
      label: "Kadiri",
      value: "kadiri",
      state: "Andhra Pradesh",
    },
    {
      id: "366",
      label: "Shrirampur",
      value: "shrirampur",
      state: "Maharashtra",
    },
    {
      id: "367",
      label: "Rudrapur",
      value: "rudrapur",
      state: "Uttarakhand",
    },
    {
      id: "368",
      label: "Parli",
      value: "parli",
      state: "Maharashtra",
    },
    {
      id: "369",
      label: "Najibabad",
      value: "najibabad",
      state: "Uttar Pradesh",
    },
    {
      id: "370",
      label: "Nirmal",
      value: "nirmal",
      state: "Telangana",
    },
    {
      id: "371",
      label: "Udhagamandalam",
      value: "udhagamandalam",
      state: "Tamil Nadu",
    },
    {
      id: "372",
      label: "Shikohabad",
      value: "shikohabad",
      state: "Uttar Pradesh",
    },
    {
      id: "373",
      label: "Jhumri Tilaiya",
      value: "jhumri tilaiya",
      state: "Jharkhand",
    },
    {
      id: "374",
      label: "Aruppukkottai",
      value: "aruppukkottai",
      state: "Tamil Nadu",
    },
    {
      id: "375",
      label: "Ponnani",
      value: "ponnani",
      state: "Kerala",
    },
    {
      id: "376",
      label: "Jamui",
      value: "jamui",
      state: "Bihar",
    },
    {
      id: "377",
      label: "Sitamarhi",
      value: "sitamarhi",
      state: "Bihar",
    },
    {
      id: "378",
      label: "Chirala",
      value: "chirala",
      state: "Andhra Pradesh",
    },
    {
      id: "379",
      label: "Anjar",
      value: "anjar",
      state: "Gujarat",
    },
    {
      id: "380",
      label: "Karaikal",
      value: "karaikal",
      state: "Puducherry",
    },
    {
      id: "381",
      label: "Hansi",
      value: "hansi",
      state: "Haryana",
    },
    {
      id: "382",
      label: "Anakapalle",
      value: "anakapalle",
      state: "Andhra Pradesh",
    },
    {
      id: "383",
      label: "Mahasamund",
      value: "mahasamund",
      state: "Chhattisgarh",
    },
    {
      id: "384",
      label: "Faridkot",
      value: "faridkot",
      state: "Punjab",
    },
    {
      id: "385",
      label: "Saunda",
      value: "saunda",
      state: "Jharkhand",
    },
    {
      id: "386",
      label: "Dhoraji",
      value: "dhoraji",
      state: "Gujarat",
    },
    {
      id: "387",
      label: "Paramakudi",
      value: "paramakudi",
      state: "Tamil Nadu",
    },
    {
      id: "388",
      label: "Balaghat",
      value: "balaghat",
      state: "Madhya Pradesh",
    },
    {
      id: "389",
      label: "Sujangarh",
      value: "sujangarh",
      state: "Rajasthan",
    },
    {
      id: "390",
      label: "Khambhat",
      value: "khambhat",
      state: "Gujarat",
    },
    {
      id: "391",
      label: "Muktsar",
      value: "muktsar",
      state: "Punjab",
    },
    {
      id: "392",
      label: "Rajpura",
      value: "rajpura",
      state: "Punjab",
    },
    {
      id: "393",
      label: "Kavali",
      value: "kavali",
      state: "Andhra Pradesh",
    },
    {
      id: "394",
      label: "Dhamtari",
      value: "dhamtari",
      state: "Chhattisgarh",
    },
    {
      id: "395",
      label: "Ashok Nagar",
      value: "ashok nagar",
      state: "Madhya Pradesh",
    },
    {
      id: "396",
      label: "Sardarshahar",
      value: "sardarshahar",
      state: "Rajasthan",
    },
    {
      id: "397",
      label: "Mahuva",
      value: "mahuva",
      state: "Gujarat",
    },
    {
      id: "398",
      label: "Bargarh",
      value: "bargarh",
      state: "Odisha",
    },
    {
      id: "399",
      label: "Kamareddy",
      value: "kamareddy",
      state: "Telangana",
    },
    {
      id: "400",
      label: "Sahibganj",
      value: "sahibganj",
      state: "Jharkhand",
    },
    {
      id: "401",
      label: "Kothagudem",
      value: "kothagudem",
      state: "Telangana",
    },
    {
      id: "402",
      label: "Ramanagaram",
      value: "ramanagaram",
      state: "Karnataka",
    },
    {
      id: "403",
      label: "Gokak",
      value: "gokak",
      state: "Karnataka",
    },
    {
      id: "404",
      label: "Tikamgarh",
      value: "tikamgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "405",
      label: "Araria",
      value: "araria",
      state: "Bihar",
    },
    {
      id: "406",
      label: "Rishikesh",
      value: "rishikesh",
      state: "Uttarakhand",
    },
    {
      id: "407",
      label: "Shahdol",
      value: "shahdol",
      state: "Madhya Pradesh",
    },
    {
      id: "408",
      label: "Medininagar (Daltonganj)",
      value: "medininagar (daltonganj)",
      state: "Jharkhand",
    },
    {
      id: "409",
      label: "Arakkonam",
      value: "arakkonam",
      state: "Tamil Nadu",
    },
    {
      id: "410",
      label: "Washim",
      value: "washim",
      state: "Maharashtra",
    },
    {
      id: "411",
      label: "Sangrur",
      value: "sangrur",
      state: "Punjab",
    },
    {
      id: "412",
      label: "Bodhan",
      value: "bodhan",
      state: "Telangana",
    },
    {
      id: "413",
      label: "Fazilka",
      value: "fazilka",
      state: "Punjab",
    },
    {
      id: "414",
      label: "Palacole",
      value: "palacole",
      state: "Andhra Pradesh",
    },
    {
      id: "415",
      label: "Keshod",
      value: "keshod",
      state: "Gujarat",
    },
    {
      id: "416",
      label: "Sullurpeta",
      value: "sullurpeta",
      state: "Andhra Pradesh",
    },
    {
      id: "417",
      label: "Wadhwan",
      value: "wadhwan",
      state: "Gujarat",
    },
    {
      id: "418",
      label: "Gurdaspur",
      value: "gurdaspur",
      state: "Punjab",
    },
    {
      id: "419",
      label: "Vatakara",
      value: "vatakara",
      state: "Kerala",
    },
    {
      id: "420",
      label: "Tura",
      value: "tura",
      state: "Meghalaya",
    },
    {
      id: "421",
      label: "Narnaul",
      value: "narnaul",
      state: "Haryana",
    },
    {
      id: "422",
      label: "Kharar",
      value: "kharar",
      state: "Punjab",
    },
    {
      id: "423",
      label: "Yadgir",
      value: "yadgir",
      state: "Karnataka",
    },
    {
      id: "424",
      label: "Ambejogai",
      value: "ambejogai",
      state: "Maharashtra",
    },
    {
      id: "425",
      label: "Ankleshwar",
      value: "ankleshwar",
      state: "Gujarat",
    },
    {
      id: "426",
      label: "Savarkundla",
      value: "savarkundla",
      state: "Gujarat",
    },
    {
      id: "427",
      label: "Paradip",
      value: "paradip",
      state: "Odisha",
    },
    {
      id: "428",
      label: "Virudhachalam",
      value: "virudhachalam",
      state: "Tamil Nadu",
    },
    {
      id: "429",
      label: "Kanhangad",
      value: "kanhangad",
      state: "Kerala",
    },
    {
      id: "430",
      label: "Kadi",
      value: "kadi",
      state: "Gujarat",
    },
    {
      id: "431",
      label: "Srivilliputhur",
      value: "srivilliputhur",
      state: "Tamil Nadu",
    },
    {
      id: "432",
      label: "Gobindgarh",
      value: "gobindgarh",
      state: "Punjab",
    },
    {
      id: "433",
      label: "Tindivanam",
      value: "tindivanam",
      state: "Tamil Nadu",
    },
    {
      id: "434",
      label: "Mansa",
      value: "mansa",
      state: "Punjab",
    },
    {
      id: "435",
      label: "Taliparamba",
      value: "taliparamba",
      state: "Kerala",
    },
    {
      id: "436",
      label: "Manmad",
      value: "manmad",
      state: "Maharashtra",
    },
    {
      id: "437",
      label: "Tanuku",
      value: "tanuku",
      state: "Andhra Pradesh",
    },
    {
      id: "438",
      label: "Rayachoti",
      value: "rayachoti",
      state: "Andhra Pradesh",
    },
    {
      id: "439",
      label: "Virudhunagar",
      value: "virudhunagar",
      state: "Tamil Nadu",
    },
    {
      id: "440",
      label: "Koyilandy",
      value: "koyilandy",
      state: "Kerala",
    },
    {
      id: "441",
      label: "Jorhat",
      value: "jorhat",
      state: "Assam",
    },
    {
      id: "442",
      label: "Karur",
      value: "karur",
      state: "Tamil Nadu",
    },
    {
      id: "443",
      label: "Valparai",
      value: "valparai",
      state: "Tamil Nadu",
    },
    {
      id: "444",
      label: "Srikalahasti",
      value: "srikalahasti",
      state: "Andhra Pradesh",
    },
    {
      id: "445",
      label: "Neyyattinkara",
      value: "neyyattinkara",
      state: "Kerala",
    },
    {
      id: "446",
      label: "Bapatla",
      value: "bapatla",
      state: "Andhra Pradesh",
    },
    {
      id: "447",
      label: "Fatehabad",
      value: "fatehabad",
      state: "Haryana",
    },
    {
      id: "448",
      label: "Malout",
      value: "malout",
      state: "Punjab",
    },
    {
      id: "449",
      label: "Sankarankovil",
      value: "sankarankovil",
      state: "Tamil Nadu",
    },
    {
      id: "450",
      label: "Tenkasi",
      value: "tenkasi",
      state: "Tamil Nadu",
    },
    {
      id: "451",
      label: "Ratnagiri",
      value: "ratnagiri",
      state: "Maharashtra",
    },
    {
      id: "452",
      label: "Rabkavi Banhatti",
      value: "rabkavi banhatti",
      state: "Karnataka",
    },
    {
      id: "453",
      label: "Sikandrabad",
      value: "sikandrabad",
      state: "Uttar Pradesh",
    },
    {
      id: "454",
      label: "Chaibasa",
      value: "chaibasa",
      state: "Jharkhand",
    },
    {
      id: "455",
      label: "Chirmiri",
      value: "chirmiri",
      state: "Chhattisgarh",
    },
    {
      id: "456",
      label: "Palwancha",
      value: "palwancha",
      state: "Telangana",
    },
    {
      id: "457",
      label: "Bhawanipatna",
      value: "bhawanipatna",
      state: "Odisha",
    },
    {
      id: "458",
      label: "Kayamkulam",
      value: "kayamkulam",
      state: "Kerala",
    },
    {
      id: "459",
      label: "Pithampur",
      value: "pithampur",
      state: "Madhya Pradesh",
    },
    {
      id: "460",
      label: "Nabha",
      value: "nabha",
      state: "Punjab",
    },
    {
      id: "461",
      label: "Shahabad, Hardoi",
      value: "shahabad, hardoi",
      state: "Uttar Pradesh",
    },
    {
      id: "462",
      label: "Dhenkanal",
      value: "dhenkanal",
      state: "Odisha",
    },
    {
      id: "463",
      label: "Uran Islampur",
      value: "uran islampur",
      state: "Maharashtra",
    },
    {
      id: "464",
      label: "Gopalganj",
      value: "gopalganj",
      state: "Bihar",
    },
    {
      id: "465",
      label: "Bongaigaon City",
      value: "bongaigaon city",
      state: "Assam",
    },
    {
      id: "466",
      label: "Palani",
      value: "palani",
      state: "Tamil Nadu",
    },
    {
      id: "467",
      label: "Pusad",
      value: "pusad",
      state: "Maharashtra",
    },
    {
      id: "468",
      label: "Sopore",
      value: "sopore",
      state: "Jammu and Kashmir",
    },
    {
      id: "469",
      label: "Pilkhuwa",
      value: "pilkhuwa",
      state: "Uttar Pradesh",
    },
    {
      id: "470",
      label: "Tarn Taran",
      value: "tarn taran",
      state: "Punjab",
    },
    {
      id: "471",
      label: "Renukoot",
      value: "renukoot",
      state: "Uttar Pradesh",
    },
    {
      id: "472",
      label: "Mandamarri",
      value: "mandamarri",
      state: "Telangana",
    },
    {
      id: "473",
      label: "Shahabad",
      value: "shahabad",
      state: "Karnataka",
    },
    {
      id: "474",
      label: "Barbil",
      value: "barbil",
      state: "Odisha",
    },
    {
      id: "475",
      label: "Koratla",
      value: "koratla",
      state: "Telangana",
    },
    {
      id: "476",
      label: "Madhubani",
      value: "madhubani",
      state: "Bihar",
    },
    {
      id: "477",
      label: "Arambagh",
      value: "arambagh",
      state: "West Bengal",
    },
    {
      id: "478",
      label: "Gohana",
      value: "gohana",
      state: "Haryana",
    },
    {
      id: "479",
      label: "Ladnu",
      value: "ladnu",
      state: "Rajasthan",
    },
    {
      id: "480",
      label: "Pattukkottai",
      value: "pattukkottai",
      state: "Tamil Nadu",
    },
    {
      id: "481",
      label: "Sirsi",
      value: "sirsi",
      state: "Karnataka",
    },
    {
      id: "482",
      label: "Sircilla",
      value: "sircilla",
      state: "Telangana",
    },
    {
      id: "483",
      label: "Tamluk",
      value: "tamluk",
      state: "West Bengal",
    },
    {
      id: "484",
      label: "Jagraon",
      value: "jagraon",
      state: "Punjab",
    },
    {
      id: "485",
      label: "AlipurdUrban Agglomerationr",
      value: "alipurdurban agglomerationr",
      state: "West Bengal",
    },
    {
      id: "486",
      label: "Alirajpur",
      value: "alirajpur",
      state: "Madhya Pradesh",
    },
    {
      id: "487",
      label: "Tandur",
      value: "tandur",
      state: "Telangana",
    },
    {
      id: "488",
      label: "Naidupet",
      value: "naidupet",
      state: "Andhra Pradesh",
    },
    {
      id: "489",
      label: "Tirupathur",
      value: "tirupathur",
      state: "Tamil Nadu",
    },
    {
      id: "490",
      label: "Tohana",
      value: "tohana",
      state: "Haryana",
    },
    {
      id: "491",
      label: "Ratangarh",
      value: "ratangarh",
      state: "Rajasthan",
    },
    {
      id: "492",
      label: "Dhubri",
      value: "dhubri",
      state: "Assam",
    },
    {
      id: "493",
      label: "Masaurhi",
      value: "masaurhi",
      state: "Bihar",
    },
    {
      id: "494",
      label: "Visnagar",
      value: "visnagar",
      state: "Gujarat",
    },
    {
      id: "495",
      label: "Vrindavan",
      value: "vrindavan",
      state: "Uttar Pradesh",
    },
    {
      id: "496",
      label: "Nokha",
      value: "nokha",
      state: "Rajasthan",
    },
    {
      id: "497",
      label: "Nagari",
      value: "nagari",
      state: "Andhra Pradesh",
    },
    {
      id: "498",
      label: "Narwana",
      value: "narwana",
      state: "Haryana",
    },
    {
      id: "499",
      label: "Ramanathapuram",
      value: "ramanathapuram",
      state: "Tamil Nadu",
    },
    {
      id: "500",
      label: "Ujhani",
      value: "ujhani",
      state: "Uttar Pradesh",
    },
    {
      id: "501",
      label: "Samastipur",
      value: "samastipur",
      state: "Bihar",
    },
    {
      id: "502",
      label: "Laharpur",
      value: "laharpur",
      state: "Uttar Pradesh",
    },
    {
      id: "503",
      label: "Sangamner",
      value: "sangamner",
      state: "Maharashtra",
    },
    {
      id: "504",
      label: "Nimbahera",
      value: "nimbahera",
      state: "Rajasthan",
    },
    {
      id: "505",
      label: "Siddipet",
      value: "siddipet",
      state: "Telangana",
    },
    {
      id: "506",
      label: "Suri",
      value: "suri",
      state: "West Bengal",
    },
    {
      id: "507",
      label: "Diphu",
      value: "diphu",
      state: "Assam",
    },
    {
      id: "508",
      label: "Jhargram",
      value: "jhargram",
      state: "West Bengal",
    },
    {
      id: "509",
      label: "Shirpur-Warwade",
      value: "shirpur-warwade",
      state: "Maharashtra",
    },
    {
      id: "510",
      label: "Tilhar",
      value: "tilhar",
      state: "Uttar Pradesh",
    },
    {
      id: "511",
      label: "Sindhnur",
      value: "sindhnur",
      state: "Karnataka",
    },
    {
      id: "512",
      label: "Udumalaipettai",
      value: "udumalaipettai",
      state: "Tamil Nadu",
    },
    {
      id: "513",
      label: "Malkapur",
      value: "malkapur",
      state: "Maharashtra",
    },
    {
      id: "514",
      label: "Wanaparthy",
      value: "wanaparthy",
      state: "Telangana",
    },
    {
      id: "515",
      label: "Gudur",
      value: "gudur",
      state: "Andhra Pradesh",
    },
    {
      id: "516",
      label: "Kendujhar",
      value: "kendujhar",
      state: "Odisha",
    },
    {
      id: "517",
      label: "Mandla",
      value: "mandla",
      state: "Madhya Pradesh",
    },
    {
      id: "518",
      label: "Mandi",
      value: "mandi",
      state: "Himachal Pradesh",
    },
    {
      id: "519",
      label: "Nedumangad",
      value: "nedumangad",
      state: "Kerala",
    },
    {
      id: "520",
      label: "North Lakhimpur",
      value: "north lakhimpur",
      state: "Assam",
    },
    {
      id: "521",
      label: "Vinukonda",
      value: "vinukonda",
      state: "Andhra Pradesh",
    },
    {
      id: "522",
      label: "Tiptur",
      value: "tiptur",
      state: "Karnataka",
    },
    {
      id: "523",
      label: "Gobichettipalayam",
      value: "gobichettipalayam",
      state: "Tamil Nadu",
    },
    {
      id: "524",
      label: "Sunabeda",
      value: "sunabeda",
      state: "Odisha",
    },
    {
      id: "525",
      label: "Wani",
      value: "wani",
      state: "Maharashtra",
    },
    {
      id: "526",
      label: "Upleta",
      value: "upleta",
      state: "Gujarat",
    },
    {
      id: "527",
      label: "Narasapuram",
      value: "narasapuram",
      state: "Andhra Pradesh",
    },
    {
      id: "528",
      label: "Nuzvid",
      value: "nuzvid",
      state: "Andhra Pradesh",
    },
    {
      id: "529",
      label: "Tezpur",
      value: "tezpur",
      state: "Assam",
    },
    {
      id: "530",
      label: "Una",
      value: "una",
      state: "Gujarat",
    },
    {
      id: "531",
      label: "Markapur",
      value: "markapur",
      state: "Andhra Pradesh",
    },
    {
      id: "532",
      label: "Sheopur",
      value: "sheopur",
      state: "Madhya Pradesh",
    },
    {
      id: "533",
      label: "Thiruvarur",
      value: "thiruvarur",
      state: "Tamil Nadu",
    },
    {
      id: "534",
      label: "Sidhpur",
      value: "sidhpur",
      state: "Gujarat",
    },
    {
      id: "535",
      label: "Sahaswan",
      value: "sahaswan",
      state: "Uttar Pradesh",
    },
    {
      id: "536",
      label: "Suratgarh",
      value: "suratgarh",
      state: "Rajasthan",
    },
    {
      id: "537",
      label: "Shajapur",
      value: "shajapur",
      state: "Madhya Pradesh",
    },
    {
      id: "538",
      label: "Rayagada",
      value: "rayagada",
      state: "Odisha",
    },
    {
      id: "539",
      label: "Lonavla",
      value: "lonavla",
      state: "Maharashtra",
    },
    {
      id: "540",
      label: "Ponnur",
      value: "ponnur",
      state: "Andhra Pradesh",
    },
    {
      id: "541",
      label: "Kagaznagar",
      value: "kagaznagar",
      state: "Telangana",
    },
    {
      id: "542",
      label: "Gadwal",
      value: "gadwal",
      state: "Telangana",
    },
    {
      id: "543",
      label: "Bhatapara",
      value: "bhatapara",
      state: "Chhattisgarh",
    },
    {
      id: "544",
      label: "Kandukur",
      value: "kandukur",
      state: "Andhra Pradesh",
    },
    {
      id: "545",
      label: "Sangareddy",
      value: "sangareddy",
      state: "Telangana",
    },
    {
      id: "546",
      label: "Unjha",
      value: "unjha",
      state: "Gujarat",
    },
    {
      id: "547",
      label: "Lunglei",
      value: "lunglei",
      state: "Mizoram",
    },
    {
      id: "548",
      label: "Karimganj",
      value: "karimganj",
      state: "Assam",
    },
    {
      id: "549",
      label: "Kannur",
      value: "kannur",
      state: "Kerala",
    },
    {
      id: "550",
      label: "Bobbili",
      value: "bobbili",
      state: "Andhra Pradesh",
    },
    {
      id: "551",
      label: "Mokameh",
      value: "mokameh",
      state: "Bihar",
    },
    {
      id: "552",
      label: "Talegaon Dabhade",
      value: "talegaon dabhade",
      state: "Maharashtra",
    },
    {
      id: "553",
      label: "Anjangaon",
      value: "anjangaon",
      state: "Maharashtra",
    },
    {
      id: "554",
      label: "Mangrol",
      value: "mangrol",
      state: "Gujarat",
    },
    {
      id: "555",
      label: "Sunam",
      value: "sunam",
      state: "Punjab",
    },
    {
      id: "556",
      label: "Gangarampur",
      value: "gangarampur",
      state: "West Bengal",
    },
    {
      id: "557",
      label: "Thiruvallur",
      value: "thiruvallur",
      state: "Tamil Nadu",
    },
    {
      id: "558",
      label: "Tirur",
      value: "tirur",
      state: "Kerala",
    },
    {
      id: "559",
      label: "Rath",
      value: "rath",
      state: "Uttar Pradesh",
    },
    {
      id: "560",
      label: "Jatani",
      value: "jatani",
      state: "Odisha",
    },
    {
      id: "561",
      label: "Viramgam",
      value: "viramgam",
      state: "Gujarat",
    },
    {
      id: "562",
      label: "Rajsamand",
      value: "rajsamand",
      state: "Rajasthan",
    },
    {
      id: "563",
      label: "Yanam",
      value: "yanam",
      state: "Puducherry",
    },
    {
      id: "564",
      label: "Kottayam",
      value: "kottayam",
      state: "Kerala",
    },
    {
      id: "565",
      label: "Panruti",
      value: "panruti",
      state: "Tamil Nadu",
    },
    {
      id: "566",
      label: "Dhuri",
      value: "dhuri",
      state: "Punjab",
    },
    {
      id: "567",
      label: "Namakkal",
      value: "namakkal",
      state: "Tamil Nadu",
    },
    {
      id: "568",
      label: "Kasaragod",
      value: "kasaragod",
      state: "Kerala",
    },
    {
      id: "569",
      label: "Modasa",
      value: "modasa",
      state: "Gujarat",
    },
    {
      id: "570",
      label: "Rayadurg",
      value: "rayadurg",
      state: "Andhra Pradesh",
    },
    {
      id: "571",
      label: "Supaul",
      value: "supaul",
      state: "Bihar",
    },
    {
      id: "572",
      label: "Kunnamkulam",
      value: "kunnamkulam",
      state: "Kerala",
    },
    {
      id: "573",
      label: "Umred",
      value: "umred",
      state: "Maharashtra",
    },
    {
      id: "574",
      label: "Bellampalle",
      value: "bellampalle",
      state: "Telangana",
    },
    {
      id: "575",
      label: "Sibsagar",
      value: "sibsagar",
      state: "Assam",
    },
    {
      id: "576",
      label: "Mandi Dabwali",
      value: "mandi dabwali",
      state: "Haryana",
    },
    {
      id: "577",
      label: "Ottappalam",
      value: "ottappalam",
      state: "Kerala",
    },
    {
      id: "578",
      label: "Dumraon",
      value: "dumraon",
      state: "Bihar",
    },
    {
      id: "579",
      label: "Samalkot",
      value: "samalkot",
      state: "Andhra Pradesh",
    },
    {
      id: "580",
      label: "Jaggaiahpet",
      value: "jaggaiahpet",
      state: "Andhra Pradesh",
    },
    {
      id: "581",
      label: "Goalpara",
      value: "goalpara",
      state: "Assam",
    },
    {
      id: "582",
      label: "Tuni",
      value: "tuni",
      state: "Andhra Pradesh",
    },
    {
      id: "583",
      label: "Lachhmangarh",
      value: "lachhmangarh",
      state: "Rajasthan",
    },
    {
      id: "584",
      label: "Bhongir",
      value: "bhongir",
      state: "Telangana",
    },
    {
      id: "585",
      label: "Amalapuram",
      value: "amalapuram",
      state: "Andhra Pradesh",
    },
    {
      id: "586",
      label: "Firozpur Cantt.",
      value: "firozpur cantt.",
      state: "Punjab",
    },
    {
      id: "587",
      label: "Vikarabad",
      value: "vikarabad",
      state: "Telangana",
    },
    {
      id: "588",
      label: "Thiruvalla",
      value: "thiruvalla",
      state: "Kerala",
    },
    {
      id: "589",
      label: "Sherkot",
      value: "sherkot",
      state: "Uttar Pradesh",
    },
    {
      id: "590",
      label: "Palghar",
      value: "palghar",
      state: "Maharashtra",
    },
    {
      id: "591",
      label: "Shegaon",
      value: "shegaon",
      state: "Maharashtra",
    },
    {
      id: "592",
      label: "Jangaon",
      value: "jangaon",
      state: "Telangana",
    },
    {
      id: "593",
      label: "Bheemunipatnam",
      value: "bheemunipatnam",
      state: "Andhra Pradesh",
    },
    {
      id: "594",
      label: "Panna",
      value: "panna",
      state: "Madhya Pradesh",
    },
    {
      id: "595",
      label: "Thodupuzha",
      value: "thodupuzha",
      state: "Kerala",
    },
    {
      id: "596",
      label: "KathUrban Agglomeration",
      value: "kathurban agglomeration",
      state: "Jammu and Kashmir",
    },
    {
      id: "597",
      label: "Palitana",
      value: "palitana",
      state: "Gujarat",
    },
    {
      id: "598",
      label: "Arwal",
      value: "arwal",
      state: "Bihar",
    },
    {
      id: "599",
      label: "Venkatagiri",
      value: "venkatagiri",
      state: "Andhra Pradesh",
    },
    {
      id: "600",
      label: "Kalpi",
      value: "kalpi",
      state: "Uttar Pradesh",
    },
    {
      id: "601",
      label: "Rajgarh (Churu)",
      value: "rajgarh (churu)",
      state: "Rajasthan",
    },
    {
      id: "602",
      label: "Sattenapalle",
      value: "sattenapalle",
      state: "Andhra Pradesh",
    },
    {
      id: "603",
      label: "Arsikere",
      value: "arsikere",
      state: "Karnataka",
    },
    {
      id: "604",
      label: "Ozar",
      value: "ozar",
      state: "Maharashtra",
    },
    {
      id: "605",
      label: "Thirumangalam",
      value: "thirumangalam",
      state: "Tamil Nadu",
    },
    {
      id: "606",
      label: "Petlad",
      value: "petlad",
      state: "Gujarat",
    },
    {
      id: "607",
      label: "Nasirabad",
      value: "nasirabad",
      state: "Rajasthan",
    },
    {
      id: "608",
      label: "Phaltan",
      value: "phaltan",
      state: "Maharashtra",
    },
    {
      id: "609",
      label: "Rampurhat",
      value: "rampurhat",
      state: "West Bengal",
    },
    {
      id: "610",
      label: "Nanjangud",
      value: "nanjangud",
      state: "Karnataka",
    },
    {
      id: "611",
      label: "Forbesganj",
      value: "forbesganj",
      state: "Bihar",
    },
    {
      id: "612",
      label: "Tundla",
      value: "tundla",
      state: "Uttar Pradesh",
    },
    {
      id: "613",
      label: "BhabUrban Agglomeration",
      value: "bhaburban agglomeration",
      state: "Bihar",
    },
    {
      id: "614",
      label: "Sagara",
      value: "sagara",
      state: "Karnataka",
    },
    {
      id: "615",
      label: "Pithapuram",
      value: "pithapuram",
      state: "Andhra Pradesh",
    },
    {
      id: "616",
      label: "Sira",
      value: "sira",
      state: "Karnataka",
    },
    {
      id: "617",
      label: "Bhadrachalam",
      value: "bhadrachalam",
      state: "Telangana",
    },
    {
      id: "618",
      label: "Charkhi Dadri",
      value: "charkhi dadri",
      state: "Haryana",
    },
    {
      id: "619",
      label: "Chatra",
      value: "chatra",
      state: "Jharkhand",
    },
    {
      id: "620",
      label: "Palasa Kasibugga",
      value: "palasa kasibugga",
      state: "Andhra Pradesh",
    },
    {
      id: "621",
      label: "Nohar",
      value: "nohar",
      state: "Rajasthan",
    },
    {
      id: "622",
      label: "Yevla",
      value: "yevla",
      state: "Maharashtra",
    },
    {
      id: "623",
      label: "Sirhind Fatehgarh Sahib",
      value: "sirhind fatehgarh sahib",
      state: "Punjab",
    },
    {
      id: "624",
      label: "Bhainsa",
      value: "bhainsa",
      state: "Telangana",
    },
    {
      id: "625",
      label: "Parvathipuram",
      value: "parvathipuram",
      state: "Andhra Pradesh",
    },
    {
      id: "626",
      label: "Shahade",
      value: "shahade",
      state: "Maharashtra",
    },
    {
      id: "627",
      label: "Chalakudy",
      value: "chalakudy",
      state: "Kerala",
    },
    {
      id: "628",
      label: "Narkatiaganj",
      value: "narkatiaganj",
      state: "Bihar",
    },
    {
      id: "629",
      label: "Kapadvanj",
      value: "kapadvanj",
      state: "Gujarat",
    },
    {
      id: "630",
      label: "Macherla",
      value: "macherla",
      state: "Andhra Pradesh",
    },
    {
      id: "631",
      label: "Raghogarh-Vijaypur",
      value: "raghogarh-vijaypur",
      state: "Madhya Pradesh",
    },
    {
      id: "632",
      label: "Rupnagar",
      value: "rupnagar",
      state: "Punjab",
    },
    {
      id: "633",
      label: "Naugachhia",
      value: "naugachhia",
      state: "Bihar",
    },
    {
      id: "634",
      label: "Sendhwa",
      value: "sendhwa",
      state: "Madhya Pradesh",
    },
    {
      id: "635",
      label: "Byasanagar",
      value: "byasanagar",
      state: "Odisha",
    },
    {
      id: "636",
      label: "Sandila",
      value: "sandila",
      state: "Uttar Pradesh",
    },
    {
      id: "637",
      label: "Gooty",
      value: "gooty",
      state: "Andhra Pradesh",
    },
    {
      id: "638",
      label: "Salur",
      value: "salur",
      state: "Andhra Pradesh",
    },
    {
      id: "639",
      label: "Nanpara",
      value: "nanpara",
      state: "Uttar Pradesh",
    },
    {
      id: "640",
      label: "Sardhana",
      value: "sardhana",
      state: "Uttar Pradesh",
    },
    {
      id: "641",
      label: "Vita",
      value: "vita",
      state: "Maharashtra",
    },
    {
      id: "642",
      label: "Gumia",
      value: "gumia",
      state: "Jharkhand",
    },
    {
      id: "643",
      label: "Puttur",
      value: "puttur",
      state: "Karnataka",
    },
    {
      id: "644",
      label: "Jalandhar Cantt.",
      value: "jalandhar cantt.",
      state: "Punjab",
    },
    {
      id: "645",
      label: "Nehtaur",
      value: "nehtaur",
      state: "Uttar Pradesh",
    },
    {
      id: "646",
      label: "Changanassery",
      value: "changanassery",
      state: "Kerala",
    },
    {
      id: "647",
      label: "Mandapeta",
      value: "mandapeta",
      state: "Andhra Pradesh",
    },
    {
      id: "648",
      label: "Dumka",
      value: "dumka",
      state: "Jharkhand",
    },
    {
      id: "649",
      label: "Seohara",
      value: "seohara",
      state: "Uttar Pradesh",
    },
    {
      id: "650",
      label: "Umarkhed",
      value: "umarkhed",
      state: "Maharashtra",
    },
    {
      id: "651",
      label: "Madhupur",
      value: "madhupur",
      state: "Jharkhand",
    },
    {
      id: "652",
      label: "Vikramasingapuram",
      value: "vikramasingapuram",
      state: "Tamil Nadu",
    },
    {
      id: "653",
      label: "Punalur",
      value: "punalur",
      state: "Kerala",
    },
    {
      id: "654",
      label: "Kendrapara",
      value: "kendrapara",
      state: "Odisha",
    },
    {
      id: "655",
      label: "Sihor",
      value: "sihor",
      state: "Gujarat",
    },
    {
      id: "656",
      label: "Nellikuppam",
      value: "nellikuppam",
      state: "Tamil Nadu",
    },
    {
      id: "657",
      label: "Samana",
      value: "samana",
      state: "Punjab",
    },
    {
      id: "658",
      label: "Warora",
      value: "warora",
      state: "Maharashtra",
    },
    {
      id: "659",
      label: "Nilambur",
      value: "nilambur",
      state: "Kerala",
    },
    {
      id: "660",
      label: "Rasipuram",
      value: "rasipuram",
      state: "Tamil Nadu",
    },
    {
      id: "661",
      label: "Ramnagar",
      value: "ramnagar",
      state: "Uttarakhand",
    },
    {
      id: "662",
      label: "Jammalamadugu",
      value: "jammalamadugu",
      state: "Andhra Pradesh",
    },
    {
      id: "663",
      label: "Nawanshahr",
      value: "nawanshahr",
      state: "Punjab",
    },
    {
      id: "664",
      label: "Thoubal",
      value: "thoubal",
      state: "Manipur",
    },
    {
      id: "665",
      label: "Athni",
      value: "athni",
      state: "Karnataka",
    },
    {
      id: "666",
      label: "Cherthala",
      value: "cherthala",
      state: "Kerala",
    },
    {
      id: "667",
      label: "Sidhi",
      value: "sidhi",
      state: "Madhya Pradesh",
    },
    {
      id: "668",
      label: "Farooqnagar",
      value: "farooqnagar",
      state: "Telangana",
    },
    {
      id: "669",
      label: "Peddapuram",
      value: "peddapuram",
      state: "Andhra Pradesh",
    },
    {
      id: "670",
      label: "Chirkunda",
      value: "chirkunda",
      state: "Jharkhand",
    },
    {
      id: "671",
      label: "Pachora",
      value: "pachora",
      state: "Maharashtra",
    },
    {
      id: "672",
      label: "Madhepura",
      value: "madhepura",
      state: "Bihar",
    },
    {
      id: "673",
      label: "Pithoragarh",
      value: "pithoragarh",
      state: "Uttarakhand",
    },
    {
      id: "674",
      label: "Tumsar",
      value: "tumsar",
      state: "Maharashtra",
    },
    {
      id: "675",
      label: "Phalodi",
      value: "phalodi",
      state: "Rajasthan",
    },
    {
      id: "676",
      label: "Tiruttani",
      value: "tiruttani",
      state: "Tamil Nadu",
    },
    {
      id: "677",
      label: "Rampura Phul",
      value: "rampura phul",
      state: "Punjab",
    },
    {
      id: "678",
      label: "Perinthalmanna",
      value: "perinthalmanna",
      state: "Kerala",
    },
    {
      id: "679",
      label: "Padrauna",
      value: "padrauna",
      state: "Uttar Pradesh",
    },
    {
      id: "680",
      label: "Pipariya",
      value: "pipariya",
      state: "Madhya Pradesh",
    },
    {
      id: "681",
      label: "Dalli-Rajhara",
      value: "dalli-rajhara",
      state: "Chhattisgarh",
    },
    {
      id: "682",
      label: "Punganur",
      value: "punganur",
      state: "Andhra Pradesh",
    },
    {
      id: "683",
      label: "Mattannur",
      value: "mattannur",
      state: "Kerala",
    },
    {
      id: "684",
      label: "Mathura",
      value: "mathura",
      state: "Uttar Pradesh",
    },
    {
      id: "685",
      label: "Thakurdwara",
      value: "thakurdwara",
      state: "Uttar Pradesh",
    },
    {
      id: "686",
      label: "Nandivaram-Guduvancheri",
      value: "nandivaram-guduvancheri",
      state: "Tamil Nadu",
    },
    {
      id: "687",
      label: "Mulbagal",
      value: "mulbagal",
      state: "Karnataka",
    },
    {
      id: "688",
      label: "Manjlegaon",
      value: "manjlegaon",
      state: "Maharashtra",
    },
    {
      id: "689",
      label: "Wankaner",
      value: "wankaner",
      state: "Gujarat",
    },
    {
      id: "690",
      label: "Sillod",
      value: "sillod",
      state: "Maharashtra",
    },
    {
      id: "691",
      label: "Nidadavole",
      value: "nidadavole",
      state: "Andhra Pradesh",
    },
    {
      id: "692",
      label: "Surapura",
      value: "surapura",
      state: "Karnataka",
    },
    {
      id: "693",
      label: "Rajagangapur",
      value: "rajagangapur",
      state: "Odisha",
    },
    {
      id: "694",
      label: "Sheikhpura",
      value: "sheikhpura",
      state: "Bihar",
    },
    {
      id: "695",
      label: "Parlakhemundi",
      value: "parlakhemundi",
      state: "Odisha",
    },
    {
      id: "696",
      label: "Kalimpong",
      value: "kalimpong",
      state: "West Bengal",
    },
    {
      id: "697",
      label: "Siruguppa",
      value: "siruguppa",
      state: "Karnataka",
    },
    {
      id: "698",
      label: "Arvi",
      value: "arvi",
      state: "Maharashtra",
    },
    {
      id: "699",
      label: "Limbdi",
      value: "limbdi",
      state: "Gujarat",
    },
    {
      id: "700",
      label: "Barpeta",
      value: "barpeta",
      state: "Assam",
    },
    {
      id: "701",
      label: "Manglaur",
      value: "manglaur",
      state: "Uttarakhand",
    },
    {
      id: "702",
      label: "Repalle",
      value: "repalle",
      state: "Andhra Pradesh",
    },
    {
      id: "703",
      label: "Mudhol",
      value: "mudhol",
      state: "Karnataka",
    },
    {
      id: "704",
      label: "Shujalpur",
      value: "shujalpur",
      state: "Madhya Pradesh",
    },
    {
      id: "705",
      label: "Mandvi",
      value: "mandvi",
      state: "Gujarat",
    },
    {
      id: "706",
      label: "Thangadh",
      value: "thangadh",
      state: "Gujarat",
    },
    {
      id: "707",
      label: "Sironj",
      value: "sironj",
      state: "Madhya Pradesh",
    },
    {
      id: "708",
      label: "Nandura",
      value: "nandura",
      state: "Maharashtra",
    },
    {
      id: "709",
      label: "Shoranur",
      value: "shoranur",
      state: "Kerala",
    },
    {
      id: "710",
      label: "Nathdwara",
      value: "nathdwara",
      state: "Rajasthan",
    },
    {
      id: "711",
      label: "Periyakulam",
      value: "periyakulam",
      state: "Tamil Nadu",
    },
    {
      id: "712",
      label: "Sultanganj",
      value: "sultanganj",
      state: "Bihar",
    },
    {
      id: "713",
      label: "Medak",
      value: "medak",
      state: "Telangana",
    },
    {
      id: "714",
      label: "Narayanpet",
      value: "narayanpet",
      state: "Telangana",
    },
    {
      id: "715",
      label: "Raxaul Bazar",
      value: "raxaul bazar",
      state: "Bihar",
    },
    {
      id: "716",
      label: "Rajauri",
      value: "rajauri",
      state: "Jammu and Kashmir",
    },
    {
      id: "717",
      label: "Pernampattu",
      value: "pernampattu",
      state: "Tamil Nadu",
    },
    {
      id: "718",
      label: "Nainital",
      value: "nainital",
      state: "Uttarakhand",
    },
    {
      id: "719",
      label: "Ramachandrapuram",
      value: "ramachandrapuram",
      state: "Andhra Pradesh",
    },
    {
      id: "720",
      label: "Vaijapur",
      value: "vaijapur",
      state: "Maharashtra",
    },
    {
      id: "721",
      label: "Nangal",
      value: "nangal",
      state: "Punjab",
    },
    {
      id: "722",
      label: "Sidlaghatta",
      value: "sidlaghatta",
      state: "Karnataka",
    },
    {
      id: "723",
      label: "Punch",
      value: "punch",
      state: "Jammu and Kashmir",
    },
    {
      id: "724",
      label: "Pandhurna",
      value: "pandhurna",
      state: "Madhya Pradesh",
    },
    {
      id: "725",
      label: "Wadgaon Road",
      value: "wadgaon road",
      state: "Maharashtra",
    },
    {
      id: "726",
      label: "Talcher",
      value: "talcher",
      state: "Odisha",
    },
    {
      id: "727",
      label: "Varkala",
      value: "varkala",
      state: "Kerala",
    },
    {
      id: "728",
      label: "Pilani",
      value: "pilani",
      state: "Rajasthan",
    },
    {
      id: "729",
      label: "Nowgong",
      value: "nowgong",
      state: "Madhya Pradesh",
    },
    {
      id: "730",
      label: "Naila Janjgir",
      value: "naila janjgir",
      state: "Chhattisgarh",
    },
    {
      id: "731",
      label: "Mapusa",
      value: "mapusa",
      state: "Goa",
    },
    {
      id: "732",
      label: "Vellakoil",
      value: "vellakoil",
      state: "Tamil Nadu",
    },
    {
      id: "733",
      label: "Merta City",
      value: "merta city",
      state: "Rajasthan",
    },
    {
      id: "734",
      label: "Sivaganga",
      value: "sivaganga",
      state: "Tamil Nadu",
    },
    {
      id: "735",
      label: "Mandideep",
      value: "mandideep",
      state: "Madhya Pradesh",
    },
    {
      id: "736",
      label: "Sailu",
      value: "sailu",
      state: "Maharashtra",
    },
    {
      id: "737",
      label: "Vyara",
      value: "vyara",
      state: "Gujarat",
    },
    {
      id: "738",
      label: "Kovvur",
      value: "kovvur",
      state: "Andhra Pradesh",
    },
    {
      id: "739",
      label: "Vadalur",
      value: "vadalur",
      state: "Tamil Nadu",
    },
    {
      id: "740",
      label: "Nawabganj",
      value: "nawabganj",
      state: "Uttar Pradesh",
    },
    {
      id: "741",
      label: "Padra",
      value: "padra",
      state: "Gujarat",
    },
    {
      id: "742",
      label: "Sainthia",
      value: "sainthia",
      state: "West Bengal",
    },
    {
      id: "743",
      label: "Siana",
      value: "siana",
      state: "Uttar Pradesh",
    },
    {
      id: "744",
      label: "Shahpur",
      value: "shahpur",
      state: "Karnataka",
    },
    {
      id: "745",
      label: "Sojat",
      value: "sojat",
      state: "Rajasthan",
    },
    {
      id: "746",
      label: "Noorpur",
      value: "noorpur",
      state: "Uttar Pradesh",
    },
    {
      id: "747",
      label: "Paravoor",
      value: "paravoor",
      state: "Kerala",
    },
    {
      id: "748",
      label: "Murtijapur",
      value: "murtijapur",
      state: "Maharashtra",
    },
    {
      id: "749",
      label: "Ramnagar",
      value: "ramnagar",
      state: "Bihar",
    },
    {
      id: "750",
      label: "Sundargarh",
      value: "sundargarh",
      state: "Odisha",
    },
    {
      id: "751",
      label: "Taki",
      value: "taki",
      state: "West Bengal",
    },
    {
      id: "752",
      label: "Saundatti-Yellamma",
      value: "saundatti-yellamma",
      state: "Karnataka",
    },
    {
      id: "753",
      label: "Pathanamthitta",
      value: "pathanamthitta",
      state: "Kerala",
    },
    {
      id: "754",
      label: "Wadi",
      value: "wadi",
      state: "Karnataka",
    },
    {
      id: "755",
      label: "Rameshwaram",
      value: "rameshwaram",
      state: "Tamil Nadu",
    },
    {
      id: "756",
      label: "Tasgaon",
      value: "tasgaon",
      state: "Maharashtra",
    },
    {
      id: "757",
      label: "Sikandra Rao",
      value: "sikandra rao",
      state: "Uttar Pradesh",
    },
    {
      id: "758",
      label: "Sihora",
      value: "sihora",
      state: "Madhya Pradesh",
    },
    {
      id: "759",
      label: "Tiruvethipuram",
      value: "tiruvethipuram",
      state: "Tamil Nadu",
    },
    {
      id: "760",
      label: "Tiruvuru",
      value: "tiruvuru",
      state: "Andhra Pradesh",
    },
    {
      id: "761",
      label: "Mehkar",
      value: "mehkar",
      state: "Maharashtra",
    },
    {
      id: "762",
      label: "Peringathur",
      value: "peringathur",
      state: "Kerala",
    },
    {
      id: "763",
      label: "Perambalur",
      value: "perambalur",
      state: "Tamil Nadu",
    },
    {
      id: "764",
      label: "Manvi",
      value: "manvi",
      state: "Karnataka",
    },
    {
      id: "765",
      label: "Zunheboto",
      value: "zunheboto",
      state: "Nagaland",
    },
    {
      id: "766",
      label: "Mahnar Bazar",
      value: "mahnar bazar",
      state: "Bihar",
    },
    {
      id: "767",
      label: "Attingal",
      value: "attingal",
      state: "Kerala",
    },
    {
      id: "768",
      label: "Shahbad",
      value: "shahbad",
      state: "Haryana",
    },
    {
      id: "769",
      label: "Puranpur",
      value: "puranpur",
      state: "Uttar Pradesh",
    },
    {
      id: "770",
      label: "Nelamangala",
      value: "nelamangala",
      state: "Karnataka",
    },
    {
      id: "771",
      label: "Nakodar",
      value: "nakodar",
      state: "Punjab",
    },
    {
      id: "772",
      label: "Lunawada",
      value: "lunawada",
      state: "Gujarat",
    },
    {
      id: "773",
      label: "Murshidabad",
      value: "murshidabad",
      state: "West Bengal",
    },
    {
      id: "774",
      label: "Mahe",
      value: "mahe",
      state: "Puducherry",
    },
    {
      id: "775",
      label: "Lanka",
      value: "lanka",
      state: "Assam",
    },
    {
      id: "776",
      label: "Rudauli",
      value: "rudauli",
      state: "Uttar Pradesh",
    },
    {
      id: "777",
      label: "Tuensang",
      value: "tuensang",
      state: "Nagaland",
    },
    {
      id: "778",
      label: "Lakshmeshwar",
      value: "lakshmeshwar",
      state: "Karnataka",
    },
    {
      id: "779",
      label: "Zira",
      value: "zira",
      state: "Punjab",
    },
    {
      id: "780",
      label: "Yawal",
      value: "yawal",
      state: "Maharashtra",
    },
    {
      id: "781",
      label: "Thana Bhawan",
      value: "thana bhawan",
      state: "Uttar Pradesh",
    },
    {
      id: "782",
      label: "Ramdurg",
      value: "ramdurg",
      state: "Karnataka",
    },
    {
      id: "783",
      label: "Pulgaon",
      value: "pulgaon",
      state: "Maharashtra",
    },
    {
      id: "784",
      label: "Sadasivpet",
      value: "sadasivpet",
      state: "Telangana",
    },
    {
      id: "785",
      label: "Nargund",
      value: "nargund",
      state: "Karnataka",
    },
    {
      id: "786",
      label: "Neem-Ka-Thana",
      value: "neem-ka-thana",
      state: "Rajasthan",
    },
    {
      id: "787",
      label: "Memari",
      value: "memari",
      state: "West Bengal",
    },
    {
      id: "788",
      label: "Nilanga",
      value: "nilanga",
      state: "Maharashtra",
    },
    {
      id: "789",
      label: "Naharlagun",
      value: "naharlagun",
      state: "Arunachal Pradesh",
    },
    {
      id: "790",
      label: "Pakaur",
      value: "pakaur",
      state: "Jharkhand",
    },
    {
      id: "791",
      label: "Wai",
      value: "wai",
      state: "Maharashtra",
    },
    {
      id: "792",
      label: "Tarikere",
      value: "tarikere",
      state: "Karnataka",
    },
    {
      id: "793",
      label: "Malavalli",
      value: "malavalli",
      state: "Karnataka",
    },
    {
      id: "794",
      label: "Raisen",
      value: "raisen",
      state: "Madhya Pradesh",
    },
    {
      id: "795",
      label: "Lahar",
      value: "lahar",
      state: "Madhya Pradesh",
    },
    {
      id: "796",
      label: "Uravakonda",
      value: "uravakonda",
      state: "Andhra Pradesh",
    },
    {
      id: "797",
      label: "Savanur",
      value: "savanur",
      state: "Karnataka",
    },
    {
      id: "798",
      label: "Sirohi",
      value: "sirohi",
      state: "Rajasthan",
    },
    {
      id: "799",
      label: "Udhampur",
      value: "udhampur",
      state: "Jammu and Kashmir",
    },
    {
      id: "800",
      label: "Umarga",
      value: "umarga",
      state: "Maharashtra",
    },
    {
      id: "801",
      label: "Pratapgarh",
      value: "pratapgarh",
      state: "Rajasthan",
    },
    {
      id: "802",
      label: "Lingsugur",
      value: "lingsugur",
      state: "Karnataka",
    },
    {
      id: "803",
      label: "Usilampatti",
      value: "usilampatti",
      state: "Tamil Nadu",
    },
    {
      id: "804",
      label: "Palia Kalan",
      value: "palia kalan",
      state: "Uttar Pradesh",
    },
    {
      id: "805",
      label: "Wokha",
      value: "wokha",
      state: "Nagaland",
    },
    {
      id: "806",
      label: "Rajpipla",
      value: "rajpipla",
      state: "Gujarat",
    },
    {
      id: "807",
      label: "Vijayapura",
      value: "vijayapura",
      state: "Karnataka",
    },
    {
      id: "808",
      label: "Rawatbhata",
      value: "rawatbhata",
      state: "Rajasthan",
    },
    {
      id: "809",
      label: "Sangaria",
      value: "sangaria",
      state: "Rajasthan",
    },
    {
      id: "810",
      label: "Paithan",
      value: "paithan",
      state: "Maharashtra",
    },
    {
      id: "811",
      label: "Rahuri",
      value: "rahuri",
      state: "Maharashtra",
    },
    {
      id: "812",
      label: "Patti",
      value: "patti",
      state: "Punjab",
    },
    {
      id: "813",
      label: "Zaidpur",
      value: "zaidpur",
      state: "Uttar Pradesh",
    },
    {
      id: "814",
      label: "Lalsot",
      value: "lalsot",
      state: "Rajasthan",
    },
    {
      id: "815",
      label: "Maihar",
      value: "maihar",
      state: "Madhya Pradesh",
    },
    {
      id: "816",
      label: "Vedaranyam",
      value: "vedaranyam",
      state: "Tamil Nadu",
    },
    {
      id: "817",
      label: "Nawapur",
      value: "nawapur",
      state: "Maharashtra",
    },
    {
      id: "818",
      label: "Solan",
      value: "solan",
      state: "Himachal Pradesh",
    },
    {
      id: "819",
      label: "Vapi",
      value: "vapi",
      state: "Gujarat",
    },
    {
      id: "820",
      label: "Sanawad",
      value: "sanawad",
      state: "Madhya Pradesh",
    },
    {
      id: "821",
      label: "Warisaliganj",
      value: "warisaliganj",
      state: "Bihar",
    },
    {
      id: "822",
      label: "Revelganj",
      value: "revelganj",
      state: "Bihar",
    },
    {
      id: "823",
      label: "Sabalgarh",
      value: "sabalgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "824",
      label: "Tuljapur",
      value: "tuljapur",
      state: "Maharashtra",
    },
    {
      id: "825",
      label: "Simdega",
      value: "simdega",
      state: "Jharkhand",
    },
    {
      id: "826",
      label: "Musabani",
      value: "musabani",
      state: "Jharkhand",
    },
    {
      id: "827",
      label: "Kodungallur",
      value: "kodungallur",
      state: "Kerala",
    },
    {
      id: "828",
      label: "Phulabani",
      value: "phulabani",
      state: "Odisha",
    },
    {
      id: "829",
      label: "Umreth",
      value: "umreth",
      state: "Gujarat",
    },
    {
      id: "830",
      label: "Narsipatnam",
      value: "narsipatnam",
      state: "Andhra Pradesh",
    },
    {
      id: "831",
      label: "Nautanwa",
      value: "nautanwa",
      state: "Uttar Pradesh",
    },
    {
      id: "832",
      label: "Rajgir",
      value: "rajgir",
      state: "Bihar",
    },
    {
      id: "833",
      label: "Yellandu",
      value: "yellandu",
      state: "Telangana",
    },
    {
      id: "834",
      label: "Sathyamangalam",
      value: "sathyamangalam",
      state: "Tamil Nadu",
    },
    {
      id: "835",
      label: "Pilibanga",
      value: "pilibanga",
      state: "Rajasthan",
    },
    {
      id: "836",
      label: "Morshi",
      value: "morshi",
      state: "Maharashtra",
    },
    {
      id: "837",
      label: "Pehowa",
      value: "pehowa",
      state: "Haryana",
    },
    {
      id: "838",
      label: "Sonepur",
      value: "sonepur",
      state: "Bihar",
    },
    {
      id: "839",
      label: "Pappinisseri",
      value: "pappinisseri",
      state: "Kerala",
    },
    {
      id: "840",
      label: "Zamania",
      value: "zamania",
      state: "Uttar Pradesh",
    },
    {
      id: "841",
      label: "Mihijam",
      value: "mihijam",
      state: "Jharkhand",
    },
    {
      id: "842",
      label: "Purna",
      value: "purna",
      state: "Maharashtra",
    },
    {
      id: "843",
      label: "Puliyankudi",
      value: "puliyankudi",
      state: "Tamil Nadu",
    },
    {
      id: "844",
      label: "Shikarpur, Bulandshahr",
      value: "shikarpur, bulandshahr",
      state: "Uttar Pradesh",
    },
    {
      id: "845",
      label: "Umaria",
      value: "umaria",
      state: "Madhya Pradesh",
    },
    {
      id: "846",
      label: "Porsa",
      value: "porsa",
      state: "Madhya Pradesh",
    },
    {
      id: "847",
      label: "Naugawan Sadat",
      value: "naugawan sadat",
      state: "Uttar Pradesh",
    },
    {
      id: "848",
      label: "Fatehpur Sikri",
      value: "fatehpur sikri",
      state: "Uttar Pradesh",
    },
    {
      id: "849",
      label: "Manuguru",
      value: "manuguru",
      state: "Telangana",
    },
    {
      id: "850",
      label: "Udaipur",
      value: "udaipur",
      state: "Tripura",
    },
    {
      id: "851",
      label: "Pipar City",
      value: "pipar city",
      state: "Rajasthan",
    },
    {
      id: "852",
      label: "Pattamundai",
      value: "pattamundai",
      state: "Odisha",
    },
    {
      id: "853",
      label: "Nanjikottai",
      value: "nanjikottai",
      state: "Tamil Nadu",
    },
    {
      id: "854",
      label: "Taranagar",
      value: "taranagar",
      state: "Rajasthan",
    },
    {
      id: "855",
      label: "Yerraguntla",
      value: "yerraguntla",
      state: "Andhra Pradesh",
    },
    {
      id: "856",
      label: "Satana",
      value: "satana",
      state: "Maharashtra",
    },
    {
      id: "857",
      label: "Sherghati",
      value: "sherghati",
      state: "Bihar",
    },
    {
      id: "858",
      label: "Sankeshwara",
      value: "sankeshwara",
      state: "Karnataka",
    },
    {
      id: "859",
      label: "Madikeri",
      value: "madikeri",
      state: "Karnataka",
    },
    {
      id: "860",
      label: "Thuraiyur",
      value: "thuraiyur",
      state: "Tamil Nadu",
    },
    {
      id: "861",
      label: "Sanand",
      value: "sanand",
      state: "Gujarat",
    },
    {
      id: "862",
      label: "Rajula",
      value: "rajula",
      state: "Gujarat",
    },
    {
      id: "863",
      label: "Kyathampalle",
      value: "kyathampalle",
      state: "Telangana",
    },
    {
      id: "864",
      label: "Shahabad, Rampur",
      value: "shahabad, rampur",
      state: "Uttar Pradesh",
    },
    {
      id: "865",
      label: "Tilda Newra",
      value: "tilda newra",
      state: "Chhattisgarh",
    },
    {
      id: "866",
      label: "Narsinghgarh",
      value: "narsinghgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "867",
      label: "Chittur-Thathamangalam",
      value: "chittur-thathamangalam",
      state: "Kerala",
    },
    {
      id: "868",
      label: "Malaj Khand",
      value: "malaj khand",
      state: "Madhya Pradesh",
    },
    {
      id: "869",
      label: "Sarangpur",
      value: "sarangpur",
      state: "Madhya Pradesh",
    },
    {
      id: "870",
      label: "Robertsganj",
      value: "robertsganj",
      state: "Uttar Pradesh",
    },
    {
      id: "871",
      label: "Sirkali",
      value: "sirkali",
      state: "Tamil Nadu",
    },
    {
      id: "872",
      label: "Radhanpur",
      value: "radhanpur",
      state: "Gujarat",
    },
    {
      id: "873",
      label: "Tiruchendur",
      value: "tiruchendur",
      state: "Tamil Nadu",
    },
    {
      id: "874",
      label: "Utraula",
      value: "utraula",
      state: "Uttar Pradesh",
    },
    {
      id: "875",
      label: "Patratu",
      value: "patratu",
      state: "Jharkhand",
    },
    {
      id: "876",
      label: "Vijainagar, Ajmer",
      value: "vijainagar, ajmer",
      state: "Rajasthan",
    },
    {
      id: "877",
      label: "Periyasemur",
      value: "periyasemur",
      state: "Tamil Nadu",
    },
    {
      id: "878",
      label: "Pathri",
      value: "pathri",
      state: "Maharashtra",
    },
    {
      id: "879",
      label: "Sadabad",
      value: "sadabad",
      state: "Uttar Pradesh",
    },
    {
      id: "880",
      label: "Talikota",
      value: "talikota",
      state: "Karnataka",
    },
    {
      id: "881",
      label: "Sinnar",
      value: "sinnar",
      state: "Maharashtra",
    },
    {
      id: "882",
      label: "Mungeli",
      value: "mungeli",
      state: "Chhattisgarh",
    },
    {
      id: "883",
      label: "Sedam",
      value: "sedam",
      state: "Karnataka",
    },
    {
      id: "884",
      label: "Shikaripur",
      value: "shikaripur",
      state: "Karnataka",
    },
    {
      id: "885",
      label: "Sumerpur",
      value: "sumerpur",
      state: "Rajasthan",
    },
    {
      id: "886",
      label: "Sattur",
      value: "sattur",
      state: "Tamil Nadu",
    },
    {
      id: "887",
      label: "Sugauli",
      value: "sugauli",
      state: "Bihar",
    },
    {
      id: "888",
      label: "Lumding",
      value: "lumding",
      state: "Assam",
    },
    {
      id: "889",
      label: "Vandavasi",
      value: "vandavasi",
      state: "Tamil Nadu",
    },
    {
      id: "890",
      label: "Titlagarh",
      value: "titlagarh",
      state: "Odisha",
    },
    {
      id: "891",
      label: "Uchgaon",
      value: "uchgaon",
      state: "Maharashtra",
    },
    {
      id: "892",
      label: "Mokokchung",
      value: "mokokchung",
      state: "Nagaland",
    },
    {
      id: "893",
      label: "Paschim Punropara",
      value: "paschim punropara",
      state: "West Bengal",
    },
    {
      id: "894",
      label: "Sagwara",
      value: "sagwara",
      state: "Rajasthan",
    },
    {
      id: "895",
      label: "Ramganj Mandi",
      value: "ramganj mandi",
      state: "Rajasthan",
    },
    {
      id: "896",
      label: "Tarakeswar",
      value: "tarakeswar",
      state: "West Bengal",
    },
    {
      id: "897",
      label: "Mahalingapura",
      value: "mahalingapura",
      state: "Karnataka",
    },
    {
      id: "898",
      label: "Dharmanagar",
      value: "dharmanagar",
      state: "Tripura",
    },
    {
      id: "899",
      label: "Mahemdabad",
      value: "mahemdabad",
      state: "Gujarat",
    },
    {
      id: "900",
      label: "Manendragarh",
      value: "manendragarh",
      state: "Chhattisgarh",
    },
    {
      id: "901",
      label: "Uran",
      value: "uran",
      state: "Maharashtra",
    },
    {
      id: "902",
      label: "Tharamangalam",
      value: "tharamangalam",
      state: "Tamil Nadu",
    },
    {
      id: "903",
      label: "Tirukkoyilur",
      value: "tirukkoyilur",
      state: "Tamil Nadu",
    },
    {
      id: "904",
      label: "Pen",
      value: "pen",
      state: "Maharashtra",
    },
    {
      id: "905",
      label: "Makhdumpur",
      value: "makhdumpur",
      state: "Bihar",
    },
    {
      id: "906",
      label: "Maner",
      value: "maner",
      state: "Bihar",
    },
    {
      id: "907",
      label: "Oddanchatram",
      value: "oddanchatram",
      state: "Tamil Nadu",
    },
    {
      id: "908",
      label: "Palladam",
      value: "palladam",
      state: "Tamil Nadu",
    },
    {
      id: "909",
      label: "Mundi",
      value: "mundi",
      state: "Madhya Pradesh",
    },
    {
      id: "910",
      label: "Nabarangapur",
      value: "nabarangapur",
      state: "Odisha",
    },
    {
      id: "911",
      label: "Mudalagi",
      value: "mudalagi",
      state: "Karnataka",
    },
    {
      id: "912",
      label: "Samalkha",
      value: "samalkha",
      state: "Haryana",
    },
    {
      id: "913",
      label: "Nepanagar",
      value: "nepanagar",
      state: "Madhya Pradesh",
    },
    {
      id: "914",
      label: "Karjat",
      value: "karjat",
      state: "Maharashtra",
    },
    {
      id: "915",
      label: "Ranavav",
      value: "ranavav",
      state: "Gujarat",
    },
    {
      id: "916",
      label: "Pedana",
      value: "pedana",
      state: "Andhra Pradesh",
    },
    {
      id: "917",
      label: "Pinjore",
      value: "pinjore",
      state: "Haryana",
    },
    {
      id: "918",
      label: "Lakheri",
      value: "lakheri",
      state: "Rajasthan",
    },
    {
      id: "919",
      label: "Pasan",
      value: "pasan",
      state: "Madhya Pradesh",
    },
    {
      id: "920",
      label: "Puttur",
      value: "puttur",
      state: "Andhra Pradesh",
    },
    {
      id: "921",
      label: "Vadakkuvalliyur",
      value: "vadakkuvalliyur",
      state: "Tamil Nadu",
    },
    {
      id: "922",
      label: "Tirukalukundram",
      value: "tirukalukundram",
      state: "Tamil Nadu",
    },
    {
      id: "923",
      label: "Mahidpur",
      value: "mahidpur",
      state: "Madhya Pradesh",
    },
    {
      id: "924",
      label: "Mussoorie",
      value: "mussoorie",
      state: "Uttarakhand",
    },
    {
      id: "925",
      label: "Muvattupuzha",
      value: "muvattupuzha",
      state: "Kerala",
    },
    {
      id: "926",
      label: "Rasra",
      value: "rasra",
      state: "Uttar Pradesh",
    },
    {
      id: "927",
      label: "Udaipurwati",
      value: "udaipurwati",
      state: "Rajasthan",
    },
    {
      id: "928",
      label: "Manwath",
      value: "manwath",
      state: "Maharashtra",
    },
    {
      id: "929",
      label: "Adoor",
      value: "adoor",
      state: "Kerala",
    },
    {
      id: "930",
      label: "Uthamapalayam",
      value: "uthamapalayam",
      state: "Tamil Nadu",
    },
    {
      id: "931",
      label: "Partur",
      value: "partur",
      state: "Maharashtra",
    },
    {
      id: "932",
      label: "Nahan",
      value: "nahan",
      state: "Himachal Pradesh",
    },
    {
      id: "933",
      label: "Ladwa",
      value: "ladwa",
      state: "Haryana",
    },
    {
      id: "934",
      label: "Mankachar",
      value: "mankachar",
      state: "Assam",
    },
    {
      id: "935",
      label: "Nongstoin",
      value: "nongstoin",
      state: "Meghalaya",
    },
    {
      id: "936",
      label: "Losal",
      value: "losal",
      state: "Rajasthan",
    },
    {
      id: "937",
      label: "Sri Madhopur",
      value: "sri madhopur",
      state: "Rajasthan",
    },
    {
      id: "938",
      label: "Ramngarh",
      value: "ramngarh",
      state: "Rajasthan",
    },
    {
      id: "939",
      label: "Mavelikkara",
      value: "mavelikkara",
      state: "Kerala",
    },
    {
      id: "940",
      label: "Rawatsar",
      value: "rawatsar",
      state: "Rajasthan",
    },
    {
      id: "941",
      label: "Rajakhera",
      value: "rajakhera",
      state: "Rajasthan",
    },
    {
      id: "942",
      label: "Lar",
      value: "lar",
      state: "Uttar Pradesh",
    },
    {
      id: "943",
      label: "Lal Gopalganj Nindaura",
      value: "lal gopalganj nindaura",
      state: "Uttar Pradesh",
    },
    {
      id: "944",
      label: "Muddebihal",
      value: "muddebihal",
      state: "Karnataka",
    },
    {
      id: "945",
      label: "Sirsaganj",
      value: "sirsaganj",
      state: "Uttar Pradesh",
    },
    {
      id: "946",
      label: "Shahpura",
      value: "shahpura",
      state: "Rajasthan",
    },
    {
      id: "947",
      label: "Surandai",
      value: "surandai",
      state: "Tamil Nadu",
    },
    {
      id: "948",
      label: "Sangole",
      value: "sangole",
      state: "Maharashtra",
    },
    {
      id: "949",
      label: "Pavagada",
      value: "pavagada",
      state: "Karnataka",
    },
    {
      id: "950",
      label: "Tharad",
      value: "tharad",
      state: "Gujarat",
    },
    {
      id: "951",
      label: "Mansa",
      value: "mansa",
      state: "Gujarat",
    },
    {
      id: "952",
      label: "Umbergaon",
      value: "umbergaon",
      state: "Gujarat",
    },
    {
      id: "953",
      label: "Mavoor",
      value: "mavoor",
      state: "Kerala",
    },
    {
      id: "954",
      label: "Nalbari",
      value: "nalbari",
      state: "Assam",
    },
    {
      id: "955",
      label: "Talaja",
      value: "talaja",
      state: "Gujarat",
    },
    {
      id: "956",
      label: "Malur",
      value: "malur",
      state: "Karnataka",
    },
    {
      id: "957",
      label: "Mangrulpir",
      value: "mangrulpir",
      state: "Maharashtra",
    },
    {
      id: "958",
      label: "Soro",
      value: "soro",
      state: "Odisha",
    },
    {
      id: "959",
      label: "Shahpura",
      value: "shahpura",
      state: "Rajasthan",
    },
    {
      id: "960",
      label: "Vadnagar",
      value: "vadnagar",
      state: "Gujarat",
    },
    {
      id: "961",
      label: "Raisinghnagar",
      value: "raisinghnagar",
      state: "Rajasthan",
    },
    {
      id: "962",
      label: "Sindhagi",
      value: "sindhagi",
      state: "Karnataka",
    },
    {
      id: "963",
      label: "Sanduru",
      value: "sanduru",
      state: "Karnataka",
    },
    {
      id: "964",
      label: "Sohna",
      value: "sohna",
      state: "Haryana",
    },
    {
      id: "965",
      label: "Manavadar",
      value: "manavadar",
      state: "Gujarat",
    },
    {
      id: "966",
      label: "Pihani",
      value: "pihani",
      state: "Uttar Pradesh",
    },
    {
      id: "967",
      label: "Safidon",
      value: "safidon",
      state: "Haryana",
    },
    {
      id: "968",
      label: "Risod",
      value: "risod",
      state: "Maharashtra",
    },
    {
      id: "969",
      label: "Rosera",
      value: "rosera",
      state: "Bihar",
    },
    {
      id: "970",
      label: "Sankari",
      value: "sankari",
      state: "Tamil Nadu",
    },
    {
      id: "971",
      label: "Malpura",
      value: "malpura",
      state: "Rajasthan",
    },
    {
      id: "972",
      label: "Sonamukhi",
      value: "sonamukhi",
      state: "West Bengal",
    },
    {
      id: "973",
      label: "Shamsabad, Agra",
      value: "shamsabad, agra",
      state: "Uttar Pradesh",
    },
    {
      id: "974",
      label: "Nokha",
      value: "nokha",
      state: "Bihar",
    },
    {
      id: "975",
      label: "PandUrban Agglomeration",
      value: "pandurban agglomeration",
      state: "West Bengal",
    },
    {
      id: "976",
      label: "Mainaguri",
      value: "mainaguri",
      state: "West Bengal",
    },
    {
      id: "977",
      label: "Afzalpur",
      value: "afzalpur",
      state: "Karnataka",
    },
    {
      id: "978",
      label: "Shirur",
      value: "shirur",
      state: "Maharashtra",
    },
    {
      id: "979",
      label: "Salaya",
      value: "salaya",
      state: "Gujarat",
    },
    {
      id: "980",
      label: "Shenkottai",
      value: "shenkottai",
      state: "Tamil Nadu",
    },
    {
      id: "981",
      label: "Pratapgarh",
      value: "pratapgarh",
      state: "Tripura",
    },
    {
      id: "982",
      label: "Vadipatti",
      value: "vadipatti",
      state: "Tamil Nadu",
    },
    {
      id: "983",
      label: "Nagarkurnool",
      value: "nagarkurnool",
      state: "Telangana",
    },
    {
      id: "984",
      label: "Savner",
      value: "savner",
      state: "Maharashtra",
    },
    {
      id: "985",
      label: "Sasvad",
      value: "sasvad",
      state: "Maharashtra",
    },
    {
      id: "986",
      label: "Rudrapur",
      value: "rudrapur",
      state: "Uttar Pradesh",
    },
    {
      id: "987",
      label: "Soron",
      value: "soron",
      state: "Uttar Pradesh",
    },
    {
      id: "988",
      label: "Sholingur",
      value: "sholingur",
      state: "Tamil Nadu",
    },
    {
      id: "989",
      label: "Pandharkaoda",
      value: "pandharkaoda",
      state: "Maharashtra",
    },
    {
      id: "990",
      label: "Perumbavoor",
      value: "perumbavoor",
      state: "Kerala",
    },
    {
      id: "991",
      label: "Maddur",
      value: "maddur",
      state: "Karnataka",
    },
    {
      id: "992",
      label: "Nadbai",
      value: "nadbai",
      state: "Rajasthan",
    },
    {
      id: "993",
      label: "Talode",
      value: "talode",
      state: "Maharashtra",
    },
    {
      id: "994",
      label: "Shrigonda",
      value: "shrigonda",
      state: "Maharashtra",
    },
    {
      id: "995",
      label: "Madhugiri",
      value: "madhugiri",
      state: "Karnataka",
    },
    {
      id: "996",
      label: "Tekkalakote",
      value: "tekkalakote",
      state: "Karnataka",
    },
    {
      id: "997",
      label: "Seoni-Malwa",
      value: "seoni-malwa",
      state: "Madhya Pradesh",
    },
    {
      id: "998",
      label: "Shirdi",
      value: "shirdi",
      state: "Maharashtra",
    },
    {
      id: "999",
      label: "SUrban Agglomerationr",
      value: "surban agglomerationr",
      state: "Uttar Pradesh",
    },
    {
      id: "1000",
      label: "Terdal",
      value: "terdal",
      state: "Karnataka",
    },
    {
      id: "1001",
      label: "Raver",
      value: "raver",
      state: "Maharashtra",
    },
    {
      id: "1002",
      label: "Tirupathur",
      value: "tirupathur",
      state: "Tamil Nadu",
    },
    {
      id: "1003",
      label: "Taraori",
      value: "taraori",
      state: "Haryana",
    },
    {
      id: "1004",
      label: "Mukhed",
      value: "mukhed",
      state: "Maharashtra",
    },
    {
      id: "1005",
      label: "Manachanallur",
      value: "manachanallur",
      state: "Tamil Nadu",
    },
    {
      id: "1006",
      label: "Rehli",
      value: "rehli",
      state: "Madhya Pradesh",
    },
    {
      id: "1007",
      label: "Sanchore",
      value: "sanchore",
      state: "Rajasthan",
    },
    {
      id: "1008",
      label: "Rajura",
      value: "rajura",
      state: "Maharashtra",
    },
    {
      id: "1009",
      label: "Piro",
      value: "piro",
      state: "Bihar",
    },
    {
      id: "1010",
      label: "Mudabidri",
      value: "mudabidri",
      state: "Karnataka",
    },
    {
      id: "1011",
      label: "Vadgaon Kasba",
      value: "vadgaon kasba",
      state: "Maharashtra",
    },
    {
      id: "1012",
      label: "Nagar",
      value: "nagar",
      state: "Rajasthan",
    },
    {
      id: "1013",
      label: "Vijapur",
      value: "vijapur",
      state: "Gujarat",
    },
    {
      id: "1014",
      label: "Viswanatham",
      value: "viswanatham",
      state: "Tamil Nadu",
    },
    {
      id: "1015",
      label: "Polur",
      value: "polur",
      state: "Tamil Nadu",
    },
    {
      id: "1016",
      label: "Panagudi",
      value: "panagudi",
      state: "Tamil Nadu",
    },
    {
      id: "1017",
      label: "Manawar",
      value: "manawar",
      state: "Madhya Pradesh",
    },
    {
      id: "1018",
      label: "Tehri",
      value: "tehri",
      state: "Uttarakhand",
    },
    {
      id: "1019",
      label: "Samdhan",
      value: "samdhan",
      state: "Uttar Pradesh",
    },
    {
      id: "1020",
      label: "Pardi",
      value: "pardi",
      state: "Gujarat",
    },
    {
      id: "1021",
      label: "Rahatgarh",
      value: "rahatgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "1022",
      label: "Panagar",
      value: "panagar",
      state: "Madhya Pradesh",
    },
    {
      id: "1023",
      label: "Uthiramerur",
      value: "uthiramerur",
      state: "Tamil Nadu",
    },
    {
      id: "1024",
      label: "Tirora",
      value: "tirora",
      state: "Maharashtra",
    },
    {
      id: "1025",
      label: "Rangia",
      value: "rangia",
      state: "Assam",
    },
    {
      id: "1026",
      label: "Sahjanwa",
      value: "sahjanwa",
      state: "Uttar Pradesh",
    },
    {
      id: "1027",
      label: "Wara Seoni",
      value: "wara seoni",
      state: "Madhya Pradesh",
    },
    {
      id: "1028",
      label: "Magadi",
      value: "magadi",
      state: "Karnataka",
    },
    {
      id: "1029",
      label: "Rajgarh (Alwar)",
      value: "rajgarh (alwar)",
      state: "Rajasthan",
    },
    {
      id: "1030",
      label: "Rafiganj",
      value: "rafiganj",
      state: "Bihar",
    },
    {
      id: "1031",
      label: "Tarana",
      value: "tarana",
      state: "Madhya Pradesh",
    },
    {
      id: "1032",
      label: "Rampur Maniharan",
      value: "rampur maniharan",
      state: "Uttar Pradesh",
    },
    {
      id: "1033",
      label: "Sheoganj",
      value: "sheoganj",
      state: "Rajasthan",
    },
    {
      id: "1034",
      label: "Raikot",
      value: "raikot",
      state: "Punjab",
    },
    {
      id: "1035",
      label: "Pauri",
      value: "pauri",
      state: "Uttarakhand",
    },
    {
      id: "1036",
      label: "Sumerpur",
      value: "sumerpur",
      state: "Uttar Pradesh",
    },
    {
      id: "1037",
      label: "Navalgund",
      value: "navalgund",
      state: "Karnataka",
    },
    {
      id: "1038",
      label: "Shahganj",
      value: "shahganj",
      state: "Uttar Pradesh",
    },
    {
      id: "1039",
      label: "Marhaura",
      value: "marhaura",
      state: "Bihar",
    },
    {
      id: "1040",
      label: "Tulsipur",
      value: "tulsipur",
      state: "Uttar Pradesh",
    },
    {
      id: "1041",
      label: "Sadri",
      value: "sadri",
      state: "Rajasthan",
    },
    {
      id: "1042",
      label: "Thiruthuraipoondi",
      value: "thiruthuraipoondi",
      state: "Tamil Nadu",
    },
    {
      id: "1043",
      label: "Shiggaon",
      value: "shiggaon",
      state: "Karnataka",
    },
    {
      id: "1044",
      label: "Pallapatti",
      value: "pallapatti",
      state: "Tamil Nadu",
    },
    {
      id: "1045",
      label: "Mahendragarh",
      value: "mahendragarh",
      state: "Haryana",
    },
    {
      id: "1046",
      label: "Sausar",
      value: "sausar",
      state: "Madhya Pradesh",
    },
    {
      id: "1047",
      label: "Ponneri",
      value: "ponneri",
      state: "Tamil Nadu",
    },
    {
      id: "1048",
      label: "Mahad",
      value: "mahad",
      state: "Maharashtra",
    },
    {
      id: "1049",
      label: "Lohardaga",
      value: "lohardaga",
      state: "Jharkhand",
    },
    {
      id: "1050",
      label: "Tirwaganj",
      value: "tirwaganj",
      state: "Uttar Pradesh",
    },
    {
      id: "1051",
      label: "Margherita",
      value: "margherita",
      state: "Assam",
    },
    {
      id: "1052",
      label: "Sundarnagar",
      value: "sundarnagar",
      state: "Himachal Pradesh",
    },
    {
      id: "1053",
      label: "Rajgarh",
      value: "rajgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "1054",
      label: "Mangaldoi",
      value: "mangaldoi",
      state: "Assam",
    },
    {
      id: "1055",
      label: "Renigunta",
      value: "renigunta",
      state: "Andhra Pradesh",
    },
    {
      id: "1056",
      label: "Longowal",
      value: "longowal",
      state: "Punjab",
    },
    {
      id: "1057",
      label: "Ratia",
      value: "ratia",
      state: "Haryana",
    },
    {
      id: "1058",
      label: "Lalgudi",
      value: "lalgudi",
      state: "Tamil Nadu",
    },
    {
      id: "1059",
      label: "Shrirangapattana",
      value: "shrirangapattana",
      state: "Karnataka",
    },
    {
      id: "1060",
      label: "Niwari",
      value: "niwari",
      state: "Madhya Pradesh",
    },
    {
      id: "1061",
      label: "Natham",
      value: "natham",
      state: "Tamil Nadu",
    },
    {
      id: "1062",
      label: "Unnamalaikadai",
      value: "unnamalaikadai",
      state: "Tamil Nadu",
    },
    {
      id: "1063",
      label: "PurqUrban Agglomerationzi",
      value: "purqurban agglomerationzi",
      state: "Uttar Pradesh",
    },
    {
      id: "1064",
      label: "Shamsabad, Farrukhabad",
      value: "shamsabad, farrukhabad",
      state: "Uttar Pradesh",
    },
    {
      id: "1065",
      label: "Mirganj",
      value: "mirganj",
      state: "Bihar",
    },
    {
      id: "1066",
      label: "Todaraisingh",
      value: "todaraisingh",
      state: "Rajasthan",
    },
    {
      id: "1067",
      label: "Warhapur",
      value: "warhapur",
      state: "Uttar Pradesh",
    },
    {
      id: "1068",
      label: "Rajam",
      value: "rajam",
      state: "Andhra Pradesh",
    },
    {
      id: "1069",
      label: "Urmar Tanda",
      value: "urmar tanda",
      state: "Punjab",
    },
    {
      id: "1070",
      label: "Lonar",
      value: "lonar",
      state: "Maharashtra",
    },
    {
      id: "1071",
      label: "Powayan",
      value: "powayan",
      state: "Uttar Pradesh",
    },
    {
      id: "1072",
      label: "P.N.Patti",
      value: "p.n.patti",
      state: "Tamil Nadu",
    },
    {
      id: "1073",
      label: "Palampur",
      value: "palampur",
      state: "Himachal Pradesh",
    },
    {
      id: "1074",
      label: "Srisailam Project (Right Flank Colony) Township",
      value: "srisailam project (right flank colony) township",
      state: "Andhra Pradesh",
    },
    {
      id: "1075",
      label: "Sindagi",
      value: "sindagi",
      state: "Karnataka",
    },
    {
      id: "1076",
      label: "Sandi",
      value: "sandi",
      state: "Uttar Pradesh",
    },
    {
      id: "1077",
      label: "Vaikom",
      value: "vaikom",
      state: "Kerala",
    },
    {
      id: "1078",
      label: "Malda",
      value: "malda",
      state: "West Bengal",
    },
    {
      id: "1079",
      label: "Tharangambadi",
      value: "tharangambadi",
      state: "Tamil Nadu",
    },
    {
      id: "1080",
      label: "Sakaleshapura",
      value: "sakaleshapura",
      state: "Karnataka",
    },
    {
      id: "1081",
      label: "Lalganj",
      value: "lalganj",
      state: "Bihar",
    },
    {
      id: "1082",
      label: "Malkangiri",
      value: "malkangiri",
      state: "Odisha",
    },
    {
      id: "1083",
      label: "Rapar",
      value: "rapar",
      state: "Gujarat",
    },
    {
      id: "1084",
      label: "Mauganj",
      value: "mauganj",
      state: "Madhya Pradesh",
    },
    {
      id: "1085",
      label: "Todabhim",
      value: "todabhim",
      state: "Rajasthan",
    },
    {
      id: "1086",
      label: "Srinivaspur",
      value: "srinivaspur",
      state: "Karnataka",
    },
    {
      id: "1087",
      label: "Murliganj",
      value: "murliganj",
      state: "Bihar",
    },
    {
      id: "1088",
      label: "Reengus",
      value: "reengus",
      state: "Rajasthan",
    },
    {
      id: "1089",
      label: "Sawantwadi",
      value: "sawantwadi",
      state: "Maharashtra",
    },
    {
      id: "1090",
      label: "Tittakudi",
      value: "tittakudi",
      state: "Tamil Nadu",
    },
    {
      id: "1091",
      label: "Lilong",
      value: "lilong",
      state: "Manipur",
    },
    {
      id: "1092",
      label: "Rajaldesar",
      value: "rajaldesar",
      state: "Rajasthan",
    },
    {
      id: "1093",
      label: "Pathardi",
      value: "pathardi",
      state: "Maharashtra",
    },
    {
      id: "1094",
      label: "Achhnera",
      value: "achhnera",
      state: "Uttar Pradesh",
    },
    {
      id: "1095",
      label: "Pacode",
      value: "pacode",
      state: "Tamil Nadu",
    },
    {
      id: "1096",
      label: "Naraura",
      value: "naraura",
      state: "Uttar Pradesh",
    },
    {
      id: "1097",
      label: "Nakur",
      value: "nakur",
      state: "Uttar Pradesh",
    },
    {
      id: "1098",
      label: "Palai",
      value: "palai",
      state: "Kerala",
    },
    {
      id: "1099",
      label: "Morinda, India",
      value: "morinda, india",
      state: "Punjab",
    },
    {
      id: "1100",
      label: "Manasa",
      value: "manasa",
      state: "Madhya Pradesh",
    },
    {
      id: "1101",
      label: "Nainpur",
      value: "nainpur",
      state: "Madhya Pradesh",
    },
    {
      id: "1102",
      label: "Sahaspur",
      value: "sahaspur",
      state: "Uttar Pradesh",
    },
    {
      id: "1103",
      label: "Pauni",
      value: "pauni",
      state: "Maharashtra",
    },
    {
      id: "1104",
      label: "Prithvipur",
      value: "prithvipur",
      state: "Madhya Pradesh",
    },
    {
      id: "1105",
      label: "Ramtek",
      value: "ramtek",
      state: "Maharashtra",
    },
    {
      id: "1106",
      label: "Silapathar",
      value: "silapathar",
      state: "Assam",
    },
    {
      id: "1107",
      label: "Songadh",
      value: "songadh",
      state: "Gujarat",
    },
    {
      id: "1108",
      label: "Safipur",
      value: "safipur",
      state: "Uttar Pradesh",
    },
    {
      id: "1109",
      label: "Sohagpur",
      value: "sohagpur",
      state: "Madhya Pradesh",
    },
    {
      id: "1110",
      label: "Mul",
      value: "mul",
      state: "Maharashtra",
    },
    {
      id: "1111",
      label: "Sadulshahar",
      value: "sadulshahar",
      state: "Rajasthan",
    },
    {
      id: "1112",
      label: "Phillaur",
      value: "phillaur",
      state: "Punjab",
    },
    {
      id: "1113",
      label: "Sambhar",
      value: "sambhar",
      state: "Rajasthan",
    },
    {
      id: "1114",
      label: "Prantij",
      value: "prantij",
      state: "Rajasthan",
    },
    {
      id: "1115",
      label: "Nagla",
      value: "nagla",
      state: "Uttarakhand",
    },
    {
      id: "1116",
      label: "Pattran",
      value: "pattran",
      state: "Punjab",
    },
    {
      id: "1117",
      label: "Mount Abu",
      value: "mount abu",
      state: "Rajasthan",
    },
    {
      id: "1118",
      label: "Reoti",
      value: "reoti",
      state: "Uttar Pradesh",
    },
    {
      id: "1119",
      label: "Tenu dam-cum-Kathhara",
      value: "tenu dam-cum-kathhara",
      state: "Jharkhand",
    },
    {
      id: "1120",
      label: "Panchla",
      value: "panchla",
      state: "West Bengal",
    },
    {
      id: "1121",
      label: "Sitarganj",
      value: "sitarganj",
      state: "Uttarakhand",
    },
    {
      id: "1122",
      label: "Pasighat",
      value: "pasighat",
      state: "Arunachal Pradesh",
    },
    {
      id: "1123",
      label: "Motipur",
      value: "motipur",
      state: "Bihar",
    },
    {
      id: "1124",
      label: "O' Valley",
      value: "o' valley",
      state: "Tamil Nadu",
    },
    {
      id: "1125",
      label: "Raghunathpur",
      value: "raghunathpur",
      state: "West Bengal",
    },
    {
      id: "1126",
      label: "Suriyampalayam",
      value: "suriyampalayam",
      state: "Tamil Nadu",
    },
    {
      id: "1127",
      label: "Qadian",
      value: "qadian",
      state: "Punjab",
    },
    {
      id: "1128",
      label: "Rairangpur",
      value: "rairangpur",
      state: "Odisha",
    },
    {
      id: "1129",
      label: "Silvassa",
      value: "silvassa",
      state: "Dadra and Nagar Haveli",
    },
    {
      id: "1130",
      label: "Nowrozabad (Khodargama)",
      value: "nowrozabad (khodargama)",
      state: "Madhya Pradesh",
    },
    {
      id: "1131",
      label: "Mangrol",
      value: "mangrol",
      state: "Rajasthan",
    },
    {
      id: "1132",
      label: "Soyagaon",
      value: "soyagaon",
      state: "Maharashtra",
    },
    {
      id: "1133",
      label: "Sujanpur",
      value: "sujanpur",
      state: "Punjab",
    },
    {
      id: "1134",
      label: "Manihari",
      value: "manihari",
      state: "Bihar",
    },
    {
      id: "1135",
      label: "Sikanderpur",
      value: "sikanderpur",
      state: "Uttar Pradesh",
    },
    {
      id: "1136",
      label: "Mangalvedhe",
      value: "mangalvedhe",
      state: "Maharashtra",
    },
    {
      id: "1137",
      label: "Phulera",
      value: "phulera",
      state: "Rajasthan",
    },
    {
      id: "1138",
      label: "Ron",
      value: "ron",
      state: "Karnataka",
    },
    {
      id: "1139",
      label: "Sholavandan",
      value: "sholavandan",
      state: "Tamil Nadu",
    },
    {
      id: "1140",
      label: "Saidpur",
      value: "saidpur",
      state: "Uttar Pradesh",
    },
    {
      id: "1141",
      label: "Shamgarh",
      value: "shamgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "1142",
      label: "Thammampatti",
      value: "thammampatti",
      state: "Tamil Nadu",
    },
    {
      id: "1143",
      label: "Maharajpur",
      value: "maharajpur",
      state: "Madhya Pradesh",
    },
    {
      id: "1144",
      label: "Multai",
      value: "multai",
      state: "Madhya Pradesh",
    },
    {
      id: "1145",
      label: "Mukerian",
      value: "mukerian",
      state: "Punjab",
    },
    {
      id: "1146",
      label: "Sirsi",
      value: "sirsi",
      state: "Uttar Pradesh",
    },
    {
      id: "1147",
      label: "Purwa",
      value: "purwa",
      state: "Uttar Pradesh",
    },
    {
      id: "1148",
      label: "Sheohar",
      value: "sheohar",
      state: "Bihar",
    },
    {
      id: "1149",
      label: "Namagiripettai",
      value: "namagiripettai",
      state: "Tamil Nadu",
    },
    {
      id: "1150",
      label: "Parasi",
      value: "parasi",
      state: "Uttar Pradesh",
    },
    {
      id: "1151",
      label: "Lathi",
      value: "lathi",
      state: "Gujarat",
    },
    {
      id: "1152",
      label: "Lalganj",
      value: "lalganj",
      state: "Uttar Pradesh",
    },
    {
      id: "1153",
      label: "Narkhed",
      value: "narkhed",
      state: "Maharashtra",
    },
    {
      id: "1154",
      label: "Mathabhanga",
      value: "mathabhanga",
      state: "West Bengal",
    },
    {
      id: "1155",
      label: "Shendurjana",
      value: "shendurjana",
      state: "Maharashtra",
    },
    {
      id: "1156",
      label: "Peravurani",
      value: "peravurani",
      state: "Tamil Nadu",
    },
    {
      id: "1157",
      label: "Mariani",
      value: "mariani",
      state: "Assam",
    },
    {
      id: "1158",
      label: "Phulpur",
      value: "phulpur",
      state: "Uttar Pradesh",
    },
    {
      id: "1159",
      label: "Rania",
      value: "rania",
      state: "Haryana",
    },
    {
      id: "1160",
      label: "Pali",
      value: "pali",
      state: "Madhya Pradesh",
    },
    {
      id: "1161",
      label: "Pachore",
      value: "pachore",
      state: "Madhya Pradesh",
    },
    {
      id: "1162",
      label: "Parangipettai",
      value: "parangipettai",
      state: "Tamil Nadu",
    },
    {
      id: "1163",
      label: "Pudupattinam",
      value: "pudupattinam",
      state: "Tamil Nadu",
    },
    {
      id: "1164",
      label: "Panniyannur",
      value: "panniyannur",
      state: "Kerala",
    },
    {
      id: "1165",
      label: "Maharajganj",
      value: "maharajganj",
      state: "Bihar",
    },
    {
      id: "1166",
      label: "Rau",
      value: "rau",
      state: "Madhya Pradesh",
    },
    {
      id: "1167",
      label: "Monoharpur",
      value: "monoharpur",
      state: "West Bengal",
    },
    {
      id: "1168",
      label: "Mandawa",
      value: "mandawa",
      state: "Rajasthan",
    },
    {
      id: "1169",
      label: "Marigaon",
      value: "marigaon",
      state: "Assam",
    },
    {
      id: "1170",
      label: "Pallikonda",
      value: "pallikonda",
      state: "Tamil Nadu",
    },
    {
      id: "1171",
      label: "Pindwara",
      value: "pindwara",
      state: "Rajasthan",
    },
    {
      id: "1172",
      label: "Shishgarh",
      value: "shishgarh",
      state: "Uttar Pradesh",
    },
    {
      id: "1173",
      label: "Patur",
      value: "patur",
      state: "Maharashtra",
    },
    {
      id: "1174",
      label: "Mayang Imphal",
      value: "mayang imphal",
      state: "Manipur",
    },
    {
      id: "1175",
      label: "Mhowgaon",
      value: "mhowgaon",
      state: "Madhya Pradesh",
    },
    {
      id: "1176",
      label: "Guruvayoor",
      value: "guruvayoor",
      state: "Kerala",
    },
    {
      id: "1177",
      label: "Mhaswad",
      value: "mhaswad",
      state: "Maharashtra",
    },
    {
      id: "1178",
      label: "Sahawar",
      value: "sahawar",
      state: "Uttar Pradesh",
    },
    {
      id: "1179",
      label: "Sivagiri",
      value: "sivagiri",
      state: "Tamil Nadu",
    },
    {
      id: "1180",
      label: "Mundargi",
      value: "mundargi",
      state: "Karnataka",
    },
    {
      id: "1181",
      label: "Punjaipugalur",
      value: "punjaipugalur",
      state: "Tamil Nadu",
    },
    {
      id: "1182",
      label: "Kailasahar",
      value: "kailasahar",
      state: "Tripura",
    },
    {
      id: "1183",
      label: "Samthar",
      value: "samthar",
      state: "Uttar Pradesh",
    },
    {
      id: "1184",
      label: "Sakti",
      value: "sakti",
      state: "Chhattisgarh",
    },
    {
      id: "1185",
      label: "Sadalagi",
      value: "sadalagi",
      state: "Karnataka",
    },
    {
      id: "1186",
      label: "Silao",
      value: "silao",
      state: "Bihar",
    },
    {
      id: "1187",
      label: "Mandalgarh",
      value: "mandalgarh",
      state: "Rajasthan",
    },
    {
      id: "1188",
      label: "Loha",
      value: "loha",
      state: "Maharashtra",
    },
    {
      id: "1189",
      label: "Pukhrayan",
      value: "pukhrayan",
      state: "Uttar Pradesh",
    },
    {
      id: "1190",
      label: "Padmanabhapuram",
      value: "padmanabhapuram",
      state: "Tamil Nadu",
    },
    {
      id: "1191",
      label: "Belonia",
      value: "belonia",
      state: "Tripura",
    },
    {
      id: "1192",
      label: "Saiha",
      value: "saiha",
      state: "Mizoram",
    },
    {
      id: "1193",
      label: "Srirampore",
      value: "srirampore",
      state: "West Bengal",
    },
    {
      id: "1194",
      label: "Talwara",
      value: "talwara",
      state: "Punjab",
    },
    {
      id: "1195",
      label: "Puthuppally",
      value: "puthuppally",
      state: "Kerala",
    },
    {
      id: "1196",
      label: "Khowai",
      value: "khowai",
      state: "Tripura",
    },
    {
      id: "1197",
      label: "Vijaypur",
      value: "vijaypur",
      state: "Madhya Pradesh",
    },
    {
      id: "1198",
      label: "Takhatgarh",
      value: "takhatgarh",
      state: "Rajasthan",
    },
    {
      id: "1199",
      label: "Thirupuvanam",
      value: "thirupuvanam",
      state: "Tamil Nadu",
    },
    {
      id: "1200",
      label: "Adra",
      value: "adra",
      state: "West Bengal",
    },
    {
      id: "1201",
      label: "Piriyapatna",
      value: "piriyapatna",
      state: "Karnataka",
    },
    {
      id: "1202",
      label: "Obra",
      value: "obra",
      state: "Uttar Pradesh",
    },
    {
      id: "1203",
      label: "Adalaj",
      value: "adalaj",
      state: "Gujarat",
    },
    {
      id: "1204",
      label: "Nandgaon",
      value: "nandgaon",
      state: "Maharashtra",
    },
    {
      id: "1205",
      label: "Barh",
      value: "barh",
      state: "Bihar",
    },
    {
      id: "1206",
      label: "Chhapra",
      value: "chhapra",
      state: "Gujarat",
    },
    {
      id: "1207",
      label: "Panamattom",
      value: "panamattom",
      state: "Kerala",
    },
    {
      id: "1208",
      label: "Niwai",
      value: "niwai",
      state: "Uttar Pradesh",
    },
    {
      id: "1209",
      label: "Bageshwar",
      value: "bageshwar",
      state: "Uttarakhand",
    },
    {
      id: "1210",
      label: "Tarbha",
      value: "tarbha",
      state: "Odisha",
    },
    {
      id: "1211",
      label: "Adyar",
      value: "adyar",
      state: "Karnataka",
    },
    {
      id: "1212",
      label: "Narsinghgarh",
      value: "narsinghgarh",
      state: "Madhya Pradesh",
    },
    {
      id: "1213",
      label: "Warud",
      value: "warud",
      state: "Maharashtra",
    },
    {
      id: "1214",
      label: "Asarganj",
      value: "asarganj",
      state: "Bihar",
    },
    {
      id: "1215",
      label: "Sarsod",
      value: "sarsod",
      state: "Haryana",
    },
    {
      id: "1216",
      label: "Gandhinagar",
      value: "gandhinagar",
      state: "Gujarat",
    },
    {
      id: "1217",
      label: "Kullu",
      value: "kullu",
      state: "Himachal Pradesh",
    },
    {
      id: "1218",
      label: "Manali",
      value: "manali",
      state: "Himachal Praddesh",
    },
    {
      id: "1219",
      label: "Mirzapur",
      value: "mirzapur",
      state: "Uttar Pradesh",
    },
    {
      id: "1220",
      label: "Kota",
      value: "kota",
      state: "Rajasthan",
    },
    {
      id: "1221",
      label: "Dispur",
      value: "dispur",
      state: "Assam",
    },
  ];
  

  return (
    <div className="wrapper relative flex flex-col items-center">
      <div className="relative flex justify-center w-full !lg:w-[100%] h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="heading absolute z-50 text-[42px] sm:text-[58px] md:text-[66px] lg:text-[78px] w-[65%] leading-10 sm:leading-[50px] md:leading-[60px] font-fatFace text-white -mt-16 text-center top-1/2 left-1/2 translate-x-[-50%]">
          More than Just a Stay
        </div>
        <div className="darkoverlay absolute h-full w-full bg-[#00000069] z-20"></div>

        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="w-full flex-shrink-0">
            <Image src={img1} alt="Slide 1" className="w-full object-cover object-center h-full" />
          </div>
          <div className="w-full flex-shrink-0">
            <Image src={img2} alt="Slide 2" className="w-full object-cover object-center h-full" />
          </div>
          <div className="w-full flex-shrink-0">
            <Image src={img3} alt="Slide 3" className="w-full object-cover object-center h-full" />
          </div>
        </div>
        <button
          className="absolute transition-all hover:scale-90 hover:text-opacity-90 scale-[0.85] hover:pr-4 z-50 p-3 pl-6 pr-4 md:pl-4 md:p-2 md:pr-3 text-opacity-60 top-1/2 mt-4 left-4 lg:left-16 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl rounded-md"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute transition-all hover:scale-90 hover:text-opacity-90 hover:pl-4 scale-[0.85] z-50 p-3 pl-6 pr-4 md:pr-4 md:pl-3 md:p-2 top-1/2 right-4 text-opacity-60 mt-4 lg:right-16 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl rounded-md"
          onClick={nextSlide}
        >
          &#10095;
        </button>
        <div className="absolute bottom-4 z-50 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span key={index} className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-white" : "bg-black bg-opacity-50"}`} onClick={() => setSlide(index)}></span>
          ))}
        </div>
      </div>

      {/* Search Field */}
      <div className="searchBox lg:px-12 min-h-32 w-[95%] max-w-[550px] lg:max-w-[84%] md:pl-6 bg-white absolute z-50 lg:-bottom-16 -bottom-44 rounded-2xl shadow-xl gap-5 items-center p-2 flex flex-wrap justify-center lg:flex-nowrap">
        <div className="flex w-full justify-center flex-wrap lg:flex-nowrap">
          <div className="flex w-full gap-1">
            <div className="search cursor-pointer  h-24 lg:h-36 w-[50%] pt-6 ">
              <h5 className="mb-4 font-primaryMedium relative text-xs ml-8 sm:ml-0">Destination</h5>
              <div className="input relative cursor-pointer flex h-12 w-[100%] bg-[#F8F8FA] rounded-lg p-4 font-primaryMedium items-center overflow-hidden">
                  <input
                    type="text"
                    placeholder="Choose City"
                    className="ml-5 p-4 cursor-pointer outline-none text-sm w-[90%] bg-[#F8F8FA]"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onFocus={handleInputFocus}
                  />
                  <Image className="h-20 w-20 absolute -ml-8" src={svg1} alt="dropdown icon" />
                </div>

                {showDropdown && (
                  <ul
                    ref={dropdownRef}
                    className="absolute w-[300px] bg-white border border-gray-300 rounded-lg mt-1 max-h-64 overflow-auto z-10"
                  >
                    {cityArray
                      .filter((item) =>
                        item.label.toLowerCase().includes(city.toLowerCase())
                      )
                      .map((cityItem) => (
                        <li
                          key={cityItem.id}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleCitySelect(cityItem)}
                        >
                          {cityItem.label}
                        </li>
                      ))}
                  </ul>
                )}
            </div>
            <div className="h-24 lg:h-36 w-[50%] pt-6">
            <h5 className="mb-4 font-primaryMedium text-xs ml-8 sm:ml-0">
                Check-In
              </h5>
            <div
              className="input flex items-center relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg p-4 font-primaryMedium"
              onClick={openDatePicker}
            >
              <input
                ref={dateInputRef}
                type="date"
                className="ml-5 text-xs bg-transparent opacity-65 pl-3 outline-none w-[90%]"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <Image
                className="h-20 w-20 absolute -ml-8"
                src={svg2} // Assuming svg2 is passed as a prop
                alt=""
              />
            </div>
            </div>
          </div>
          <div className="flex w-full gap-1">
            <div className="search h-24 lg:h-36 w-[50%] pt-6 ">
              <h5 className="mb-4 font-primaryMedium text-xs">Check-out</h5>
              <div className="input flex items-center relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg p-4 font-primaryMedium">
                <input type="date" className="ml-5 bg-transparent pl-3 text-xs opacity-65 outline-none w-[100%]" vlaue={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                <Image className="h-20 w-20 absolute -ml-8" src={svg2} alt="" />
              </div>
            </div>
            <div className="search h-24 lg:h-36 w-[50%] pt-6">
              <h5 className="mb-4 font-primaryMedium text-xs">Guests</h5>
              <div onClick={openHandler} className="mainBox cursor-pointer input flex items-center text-sm relative h-12 w-[100%] bg-[#F8F8FA] rounded-lg py-1 px-2 font-primaryMedium">
                <Image className="h-20 w-20 -ml-8 absolute" src={svg3} alt="" />
                <div className="text-xs ml-12 w-[90%] bg-[#F8F8FA] whitespace-nowrap">
                  {formatNumber(adults + children + infants)} Guest{adults + children + infants > 1 ? "s" : ""} {/*, {formatNumber(rooms)} Room{rooms > 1 ? "s" : ""} */}
                </div>
                <div
                  className={`guest transition-transform duration-300 absolute h-[280px] min-w-[290px] bg-white rounded-lg shadow-lg top-[110%] w-[100%] right-0 md:-right-[26%]  overflow-auto ${
                    open ? "flex translate-y-0" : "hidden translate-y-5"
                  }`}
                >
                  <div className="p-4 w-full">
                    <div className="flex justify-between text-xs items-center mb-4">
                      Adults
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setAdults);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">{formatNumber(adults)}</span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setAdults);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs items-center mb-4">
                      Children
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setChildren);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">{formatNumber(children)}</span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setChildren);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs items-center mb-4">
                      infants
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setInfants);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">{formatNumber(infants)}</span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setInfants);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    {/* <div className="flex justify-between text-xs items-center mb-2">
                      No. of Rooms
                      <div className="flex justify-between gap-1">
                        <span
                          className="p-2 px-3 rounded-md border-2 border-black border-opacity-15 text-opacity-50 text-black cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrement(setRooms);
                          }}
                        >
                          -
                        </span>
                        <span className="p-2 pl-4 pr-4 min-w-[42px] bg-[#f8f8f854] border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md">{formatNumber(rooms)}</span>
                        <span
                          className="p-2 px-3 border-2 border-black border-opacity-15 text-opacity-50 text-black rounded-md cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            increment(setRooms);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div> */}

                    <div className="button flex justify-between mt-6">
                      <button
                        className="py-2 px-4 border-2 border-opacity-[0.4] border-black rounded-sm font-primaryRegular text-xs hover:bg-black hover:text-white transition-all"
                        onClick={resetCounters}
                      >
                        CLEAR
                      </button>
                      <button className="py-2 px-4 rounded-sm font-primaryRegular text-xs bg-[#702B58] text-white">APPLY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button className="search h-12 mt-2 w-[100%] lg:w-[12%] bg-[#702B58] rounded-md text-white" asChild>
          <Link href={`/explore?city=${city}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}&infants=${infants}`}>Search</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomeSlider;
