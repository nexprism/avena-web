import React from "react";
import ListYourProperty from "./ListYourProperty";
import { BASE_URL } from "@/utils/utils";

const page = () => {
  const base_url = BASE_URL;
  return <ListYourProperty base_url={base_url} />;
};

export default page;
