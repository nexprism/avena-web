import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import Booking from "./Booking";
import { BASE_URL } from "@/utils/utils";

const page = async () => {
  const session = await auth();
  const base_url = BASE_URL;
  if (!session) {
    redirect("/sign-in");
  }
  return <Booking user={session.user} base_url={base_url} />;
};

export default page;
