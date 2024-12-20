import { promises as fs } from 'fs';
import { NextResponse } from "next/server";


const path = process.cwd() + '/app/lib/api/airports.json';

export async function GET() {
    const data = await fs.readFile(path, 'utf-8');
    const res = JSON.parse(data);
    return NextResponse.json(res);
}

export async function POST() {
  return NextResponse.json(
    { message: "Invalid API route, coming soon.." },
    { status: 404 }
  );
}

