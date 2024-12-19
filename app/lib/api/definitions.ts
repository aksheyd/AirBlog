export type ErrorResponse = {
    error: string
}

export const InvalidIATA: ErrorResponse = {
    error: 'Invalid IATA code'
}

export const InvalidAirport: ErrorResponse = {
    error: 'Airport not found'
}


export type Terminal = {
    id: string;
    name: string;
    location: string;
};

export type TerminalsResponse = {
    terminals: Terminal[];
};

export type AirportData = TerminalsResponse & {
    name: string;
};
