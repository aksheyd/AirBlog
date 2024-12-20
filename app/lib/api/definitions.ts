// Terminal definitions
export interface Terminal {
    name: string
};

export interface UnitTerminal extends Terminal {
    id: number
}

// Airport defintions
export interface Airport {
    name: string,
    iata: string,
    coordinates: {
        latitude: number,
        longitude: number
    },
    terminals: UnitTerminal[]
}

export interface UnitAirport extends Airport {
    id: number,
}

export interface Airports {
    [key : string]: UnitAirport;
};
