import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="mt-20">
      <div className="grid place-items-center">
        <div className="bg-white p-6  container">
          <h2 className="text-3xl font-bold mb-8 text-center">About Avena</h2>

          <p className="mb-4">
            At Avena, we are dedicated to revolutionizing the hospitality industry by providing a platform that connects property owners with guests in a seamless and mutually beneficial way. Our
            mission is to create a dynamic network that empowers property owners to maximize their rental income while offering guests exceptional accommodations.
          </p>
          <p className="mb-4">
            What sets Avena apart is our commitment to innovation and customer satisfaction. We are proud to offer a groundbreaking revisionary service that sets new standards in the hospitality
            sector. Avena is the pioneer in introducing a minimum rental rent policy, ensuring that property owners receive fair compensation for their offerings.
          </p>
          <p className="mb-4">
            Our team at Avena is driven by a passion for redefining hospitality and fostering meaningful connections between property owners and guests. We strive to provide a platform that is both
            user-friendly and efficient, making the rental process effortless for all parties involved.
          </p>
          <p className="mb-4">
            Join us at Avena and be a part of a vibrant community that is shaping the future of the hospitality industry. Experience the difference with Avena - where innovation meets
            exceptional service.
          </p>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
