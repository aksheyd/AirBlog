import { UnitAirport, UnitTerminal } from "../api/definitions";

export interface Post {
    username: string; // created at random if unsupplied
    created_at: string; // inputted on call
    message: string;
    airport: UnitAirport;
    terminal: UnitTerminal;
    rating: number;
}

export interface UnitPost extends Post {
    id: number;
}

export interface Posts {
    [key: string]: UnitPost;
}
