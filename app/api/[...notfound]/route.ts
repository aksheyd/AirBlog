import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Invalid API route." },
    { status: 404 }
  );
}

export async function POST() {
  return NextResponse.json(
    { message: "Invalid API route." },
    { status: 404 }
  );
}
