import { Airports, UnitAirport, Airport } from '@/app/lib/api/definitions';

let airports: Airports = await loadAirports();


async function loadAirports(): Promise<Airports> {
    try {
        const base = process.env.NEXT_PUBLIC_URL
        console.log(`Fetching data from ${base}/api/v1/airports`);
        const response = await fetch(base + '/api/v1/airports');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error ${error}`);
        return {};
    }
}

async function saveAirports(): Promise<Boolean> {
    try {
        const response = await fetch(process.env.URL + '/api/v1/airports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(airports),
        });

        if (response.ok) {
            console.log(`Airport saved successfully!`);
            return true;
        } else {
            console.log(`Error saving data: ${response.statusText}`);
            return false;
        }

    } catch (error) {
        console.log(`Error saving data: ${error}`);
        return false;
    }
}

export const findAll = async (): Promise<UnitAirport[]> => Object.values(airports);

export const findOne = async (iata: string): Promise<UnitAirport> => airports[iata];

export const create = async (input: Airport): Promise<UnitAirport | null> => {
    const id = Object.keys(airports).length + 1;

    const airport: UnitAirport = {
        id: id,
        name: input.name,
        iata: input.iata,
        coordinates: input.coordinates,
        terminals: input.terminals
    };

    try {
        airports[airport.iata] = airport;
    } catch (error) {
        console.log(`Error inputting data: ${error}`)
        return null
    }

    if (await saveAirports()) {
        return airport;
    } 

    return null
}