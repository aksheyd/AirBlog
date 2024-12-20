'use client';

import React, { FormEvent, useState } from "react";
import Nav from "../nav";
import { Airports } from "../lib/api/data";

export default function CreatePost() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [airport, setAirport] = useState("");
  const [terminal, setTerminal] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();


    // Reset form fields
    setName("");
    setMessage("");
    setAirport("");
    setTerminal("");
  };

  return (
    <div className="relative flex flex-col min-h-screen max-w-screen bg-white">
    <section className="relative z-10 flex-none">
        <Nav />
    </section>

    <div className="flex items-center justify-center flex-1">
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Username (optional)" 
      />

      <select

        value={airport}
        onChange={(e) => setAirport(e.target.value)}
        >
            {Array.isArray(Airports) && Airports.map((airport) => (
                <option key={airport.code} value={airport.code}>{airport.name}</option>
            ))}
        </select>

      <input 
        type="email" 
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Email" 
      />

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

