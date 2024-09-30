import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userid, postid } = params;
  console.log(`user Id is ${userid} and post Id is ${postid}`);
  return NextResponse.json(params);
}
