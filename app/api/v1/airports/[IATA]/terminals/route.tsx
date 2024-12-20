import { FindTerminals } from '@/app/lib/api/data';
import { ErrorResponse, TerminalsResponse } from '@/app/lib/api/definitions';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ IATA: string }> }
): Promise<NextResponse<ErrorResponse | TerminalsResponse>> {
  const reqIATA = (await params).IATA;
  const response = await FindTerminals(reqIATA);
  return response;
}


