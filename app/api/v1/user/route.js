import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import User from "@/models/User";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";

export async function POST(req) {
  try {
    const user = await req.json();
    // console.log(user);
    const imagePath = "uploads/default.jpg";
    await connectDB();

    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return NextResponse.json({
        data: null,
        success: false,
        message: "User already exists",
        status: 400,
      });
    }

    const hashedPassword = await hash(user.password, 12);
    const newUser = {
      name: user.name || "",
      email: user.email,
      phone: user.phone,
      password: hashedPassword || "",
      image: imagePath,
      description: "",
      schedule: "",
      role: "user", // Default to "vendor" or handle as needed
      address: "",
      accountHolderName: "",
      accountNumber: "",
      bankName: "",
      ifscCode: "",
      status: true, // Set default status
    };

    const doc = await User.create(newUser);

    if (!doc) {
      return NextResponse.json({
        data: null,
        success: false,
        message: "Error creating user",
        status: 400,
      });
    }

    return NextResponse.json({
      data: doc,
      success: true,
      message: "User Added Successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      error,
      success: false,
      message: "Error adding User",
      status: 500,
    });
  }
}

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({
      data: null,
      success: false,
      message: "User not authenticated",
      status: 401,
    });
  }

  try {
    await connectDB();
    const users = await User.find({ role: "vendor" });
    return NextResponse.json({
      data: users,
      success: true,
      message: "Users fetched successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error,
      success: false,
      message: "Error fetching users",
      status: 500,
    });
  }
}
