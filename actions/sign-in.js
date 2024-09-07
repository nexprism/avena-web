"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

async function login(email, password) {
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return error.code; // This will be "Invalid identifier or password"
    }
    return "An unexpected error occurred";
  }

  redirect("/");
}

export { login };
