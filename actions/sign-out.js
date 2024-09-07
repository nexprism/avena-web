"use server";

import { signOut } from "@/auth";

export const signout = async () => {
  console.log("signout");
  await signOut();
};
