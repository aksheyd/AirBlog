import { NextResponse } from "next/server";
// import { headers } from 'next/headers';
// import { decrypt } from "@/app/lib/session"; // import your decrypt function

export async function GET(request: Request) {    
    // const authorization = ((await headers()).get('authorization') || '').split("Bearer ").at(1);

    // if (!authorization) {
    //   return NextResponse.json({ message: 'Authorization token missing' }, { status: 401 });
    // }

    // const token = await decrypt(authorization);
    
    // // if (token === null) {
    // //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    // // }

    // console.log("Token verified successfully");

    return NextResponse.json({ Terminals: [
        "Harvey Milk Terminal 1",
        "Terminal 2",
        "Terminal 3",
        "International Terminal A",
        "International Terminal G",
        "Dianne Feinstein International Terminal"
    ]}, { status: 200 });
}