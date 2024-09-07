"use client";
import { login } from "@/actions/sign-in";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);

    if (!email || !password) {
      //   setLoading(false);
      return toast.error("Please enter both email and password");
    }

    const toastId = toast.loading("Logging in...");

    try {
      const error = await login(email, password);
      if (!error) {
        toast.success("Login successful", { id: toastId });
      } else {
        toast.error(String(error), { id: toastId });
      }
    } catch (error) {
      toast.error("An unexpected error occurred", { id: toastId });
    } finally {
      //   setLoading(false);
    }
  };
  return (
    <form className="min-w-[290px] max-w-[380px] flex flex-col items-center mt-2" onSubmit={handleSubmit}>
      <input
        className="w-[290px] max-w-[380px] p-2 border-none rounded-lg mb-4 bg-gray-100"
        type="text"
        placeholder="email"
        name="name"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="min-w-[290px] max-w-[380px] p-2 border-none rounded-lg bg-gray-100"
        type="password"
        placeholder="********"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link href={"/"}>
        <p className="text-sm w-full mt-2 pl-1 opacity-65">Forgot Pasword?</p>
      </Link>

      <button type="submit" className="flex-nowrap mt-8 p-2 pl-8 pr-8 rounded-md bg-[#702B58] text-white  font-primaryRegular transition-all text-md hover:bg-[#000]">
        Log In
      </button>
    </form>
  );
};

export default SignIn;
