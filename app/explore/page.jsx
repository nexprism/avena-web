import React from "react";
import Explore from "./Explore";
import { BASE_URL, IMAGE_URL } from "@/utils/utils";

const page = () => {
  const base_url = BASE_URL;
  const image_url = IMAGE_URL;

  return <Explore base_url={base_url} IMAGE_URL={image_url} />;
};

export default page;
