import React from "react";
import CheckOut from "./CheckOut";
import { BASE_URL, IMAGE_URL, key_id } from "@/utils/utils";
import { auth } from "@/auth";

const page = async ({ params }) => {
  const noOfGuests = params.slug[0];
  const checkIn = params.slug[1];
  const checkOut = params.slug[2];
  const propertyid = params.slug[3];
  const base_url = BASE_URL;
  const rzr_key = key_id;

  const session = await auth();
  const image_url = IMAGE_URL;

  return <CheckOut IMAGE_URL={image_url} guests={noOfGuests} checkin={checkIn} checkout={checkOut} propertyid={propertyid} base_url={base_url} rzr_key={rzr_key} user={session?.user} />;
};

export default page;
