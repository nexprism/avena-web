"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      toast.error("Please fill all the fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const user = {
      name,
      email,
      password,
      phone,
    };

    try {
      const response = await fetch("api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (data.success == true) {
        toast.success(`${data.message} please sign-in now. `);
        router.push("/sign-in");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form className="min-w-[290px] max-w-[380px] flex flex-col items-center mt-2" onSubmit={handleSubmit}>
      <input
        className="min-w-[290px] max-w-[380px] p-2 border-none rounded-lg mb-4 bg-gray-100"
        type="text"
        placeholder="Name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="min-w-[290px] max-w-[380px] p-2 border-none rounded-lg mb-4 bg-gray-100"
        type="text"
        placeholder="Email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="min-w-[290px] max-w-[380px] p-2 border-none rounded-lg mb-4 bg-gray-100"
        type="number"
        placeholder="Phone Number"
        name="phone"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="min-w-[290px] max-w-[380px] p-2 border-none rounded-lg bg-gray-100"
        type="password"
        placeholder="Password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="mt-8 p-2 pl-8 pr-8 rounded-md bg-[#702B58] text-white font-primaryRegular transition-all text-md hover:bg-[#000]">
        Register
      </button>
    </form>
  );
};

export default SignUp;
