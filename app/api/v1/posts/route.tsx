import { ErrorResponse, TerminalsResponse } from '@/app/lib/api/definitions';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(
  request: NextRequest
) {
    console.log(request.body);

    const response = NextResponse.json({ message: 'success' });
    return response;
}


