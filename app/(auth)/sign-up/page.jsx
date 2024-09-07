import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUp from "./SignUp";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import slide1 from "../../../public/Images/slide2.jpg";

const page = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <div className="form min-h-[70vh] p-14 pt-32 mb-12 overflow-hidden">
      <div className="wrapper min-h-[75vh] md:h-[75vh] w-full flex justify-center items-center">
        <div className="content h-full w-[1050px] rounded-xl flex border-2 border-black border-opacity-20 shadow-lg">
          <div className="left relative hidden md:flex h-full w-1/2 rounded-xl overflow-hidden">
            <Image src={slide1} className="h-full w-full object-cover" alt="" />
            <div className="text w-[80%]">
              <h1 className="uppercase text-[50px] absolute z-50 top-24 left-9 font-fatFace text-white w-[80%] leading-[55px]">
                Find your perfect <span className="text-[#43ffa1]">hotel</span> now
              </h1>
            </div>
          </div>
          <div className="right flex flex-col items-center w-full p-10 md:w-1/2">
            <h1 className="text-3xl font-primaryBold mb-2">Create Account</h1>
            <div className="min-w-[290px] max-w-[380px] flex flex-col items-center mt-2">
              <div className="options flex gap-4 h-10 mt-4">
                <form
                  action={async () => {
                    "use server";
                    await signIn("google");
                  }}
                >
                  <button type="submit">
                    <FaGoogle className="h-8 w-8" />
                  </button>
                </form>
              </div>

              <p className="mb-3">or</p>
              <SignUp />
            </div>
            <span className="font-primaryRegular text-sm mt-4">
              Already have an account?
              <Link href="/sign-in">
                <span className="text-[#5D0E41] font-primaryMedium"> Log In</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
