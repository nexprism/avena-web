import React from "react";
import { auth } from "@/auth";
import { ViewBooking } from "./ViewBooking";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/utils/utils";

const page = async ({ params }) => {
  const session = await auth();
  const user = session?.user;
  const base_url = BASE_URL;
  if (!user) {
    redirect("/sign-in");
  }

  return <ViewBooking bookingId={params.bookingId} base_url={base_url} />;
};

export default page;
