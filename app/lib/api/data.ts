import { InvalidAirport, InvalidIATA, ErrorResponse, TerminalsResponse, AirportData } from '@/app/lib/api/definitions';
import { NextResponse } from 'next/server';

export async function FindTerminals(reqIATA: string): Promise<NextResponse<TerminalsResponse | ErrorResponse>> {
    if (reqIATA.length !== 3) {
        return NextResponse.json(InvalidIATA, { status: 400 });
    }

    const IATA: string = correctedString(reqIATA);
    const terminals: TerminalsResponse | undefined = Airports[IATA];

    if (!terminals) {
        return NextResponse.json(InvalidAirport, { status: 404 });
    }
    
    return NextResponse.json(terminals, { status: 200 });

}


// FIXME: add string input checking for safety
function correctedString(input: string): string {
    const res: string = input.toUpperCase()

    return res
}

// FIXME: move to database
export const Airports: Record<string, AirportData> = {
    SFO: {
        name: 'San Francisco International Airport',
        terminals: [
            { id: '1', name: 'Harvey Milk Terminal 1', location: 'North Wing' },
            { id: '2', name: 'Terminal 2', location: 'East Wing' },
        ],
    },
    LAX: {
        name: 'Los Angeles International Airport',
        terminals: [
            { id: '1', name: 'Terminal 3', location: 'West Wing' },
            { id: '2', name: 'Tom Bradley International Terminal', location: 'Central Hub' },
        ],
    },
    DTW: {
        name: 'Detroit Metropolitan Wayne County Airport',
        terminals: [
            { id: '1', name: 'McNamara Terminal', location: 'South Wing' },
            { id: '2', name: 'Evans Terminal', location: 'North Wing' },
        ],
    },
    JFK: {
        name: 'John F. Kennedy International Airport',
        terminals: [
            { id: '1', name: 'Terminal 1', location: 'East Wing' },
            { id: '2', name: 'Terminal 4', location: 'West Wing' },
        ],
    },
    ORD: {
        name: 'O\'Hare International Airport',
        terminals: [
            { id: '1', name: 'Terminal 1', location: 'North Wing' },
            { id: '2', name: 'Terminal 5', location: 'International Wing' },
        ],
    },
};
