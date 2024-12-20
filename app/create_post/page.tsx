'use client';

import React, { FormEvent, useState, useEffect } from "react";
import Nav from "../nav";
import { findAll } from "../lib/api/data";
import { UnitAirport, UnitTerminal } from "../lib/api/definitions";
import { Rating } from 'react-simple-star-rating'
import '../star.css'
import { Post } from "../lib/posts/definitions";


export default function CreatePost() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [airport, setAirport] = useState<UnitAirport | undefined>();
    const [terminal, setTerminal] = useState<UnitTerminal | undefined>();
    const [airportOptions, setAirportOptions] = useState<UnitAirport[]>([]);
    const [terminalOptions, setTerminalOptions] = useState<UnitTerminal[]>([]);
    const [rating, setRating] = useState(0)


    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
    }

    // Fetch airports on mount
    useEffect(() => {
        const fetchAirports = async () => {
            const airports = await findAll();
            setAirportOptions(airports);
        };
        fetchAirports();
    }, []);

    // Fetch terminals whenever `airport` changes
    useEffect(() => {
        if (airport) {
            setTerminalOptions(airport.terminals);
        } else {
            setTerminalOptions([]);
        }
    }, [airport]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!airport || !terminal ) {
            alert("Please select an airport and/or terminal");
            return;
        }

        // Log form data (example)
        console.log({ name, message, airport, terminal, rating });

        const formPost: Post = {
            username: name ? name : "Anonymous",
            message: message,
            airport: airport,
            terminal: terminal,
            rating: rating,
            created_at: new Date().toISOString(),
        }

        // Send form data to server
        const url = process.env.NEXT_PUBLIC_URL
        const response = await fetch(url + "/api/v1/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formPost),
        })

        if (!response.ok) {
            alert("Failed to upload post, please try again. If the issue persists, gg");
            return;
        }

        // Reset form fields
        setName("");
        setMessage("");
        setAirport(undefined);
        setRating(0);

        alert("Post uploaded!");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navigation Section */}
            <header className="bg-white shadow">
                <Nav />
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-6">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 w-full max-w-md space-y-6"
                >
                    {/* Username Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            Username (optional)
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="mt-2 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Airport Selection */}
                    <div>
                        <label htmlFor="airport" className="block text-sm font-semibold text-gray-700">
                            Select Airport
                        </label>
                        <select
                            id="airport"
                            value={airport?.iata || ""}
                            onChange={(e) =>
                                setAirport(airportOptions.find((a) => a.iata === e.target.value))
                            }
                            className="mt-2 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="" disabled>
                                Select an airport
                            </option>
                            {airportOptions.map((airport) => (
                                <option key={airport.id} value={airport.iata}>
                                    {airport.name} ({airport.iata})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Terminal Selection */}
                    <div>
                        <label htmlFor="terminal" className="block text-sm font-semibold text-gray-700">
                            Select Terminal
                        </label>
                        <select
                            id="terminal"
                            disabled={!terminalOptions.length}
                            onChange={(e) =>
                                setTerminal(terminalOptions.find((a) => a.name === e.target.value))
                            }
                            className={`mt-2 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 ${!terminalOptions.length ? "bg-gray-100 cursor-not-allowed" : ""
                                }`}
                        >
                            <option value="" disabled>
                                {terminalOptions.length
                                    ? "Select a terminal"
                                    : "No terminals available"}
                            </option>
                            {terminalOptions.map((terminal) => (
                                <option key={terminal.id} value={terminal.name}>
                                    {terminal.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rating Section */}
                    <div>
                        <label htmlFor="rating" className="block text-sm font-semibold text-gray-700">
                            Rating
                        </label>
                        <div className="mt-2 flex space-x-2">
                            <Rating
                                onClick={handleRating}
                                initialValue={rating}
                                fillColorArray={[
                                    '#ff3c00',
                                    '#f16c45',
                                    '#f7ac7d',
                                    '#c8db3a',
                                    '#59f145'
                                  ]}
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                            Message (optional)
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            className="mt-2 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}