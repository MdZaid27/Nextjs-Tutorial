import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb();

// Get request function
export async function GET(request) {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse({
      message: "failed to get users",
      succes: false,
    });
  }
  return NextResponse.json(users);
}

// Post request function
// Create User
export async function POST(request) {
  // fetch user data
  const { name, email, password, about, profileURL } = await request.json();

  // create user object with user model

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    // save the object to database
    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      status: 201,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user",
      status: false,
    });
  }

  //   const body = request.body;
  //   console.log(body);
  //   console.log(request.method);
  //     console.log(request.cookies);
  //     console.log(request.headers);
  //   console.log(request.nextUrl.pathname);
  //   console.log(request.nextUrl.searchParams);

  //   const jsonData = await request.json();
  // const textData = await request.text();
  //   console.log(jsonData);
  // console.log(textData);
  // return NextResponse.json({
  //   message: "Posting user data",
  // });
}

// Delete request function
export function DELETE(request) {
  console.log("This is Delete api");
  return NextResponse.json(
    {
      message: "Deleted!",
      status: true,
    },
    { status: 201, statusText: "Delete status true" }
  );
}

// Put request function
export function PUT() {}
