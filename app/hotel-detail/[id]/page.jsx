import React from "react";
import HotelDetail from "./HotelDetail";
import { BASE_URL, IMAGE_URL } from "@/utils/utils";

const page = ({ params }) => {
  const base_url = BASE_URL;
  const image_url = IMAGE_URL;
  return <HotelDetail propId={params.id} base_url={base_url} IMAGE_URL={image_url} />;
};

export default page;
