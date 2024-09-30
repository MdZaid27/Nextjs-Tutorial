import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { userid } = params;

  try {
    await User.deleteOne({
      _id: userid,
    });

    return NextResponse.json({
      message: "user deleted! ",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete user",
      success: false,
    });
  }
}
