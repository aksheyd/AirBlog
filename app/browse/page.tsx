"use client";

import Link from "next/link";
import Nav from "../nav";
import { useEffect, useState } from "react";
import { UnitPost } from "../lib/posts/definitions";
import { findAll } from "../lib/posts/data";
import { Rating } from "react-simple-star-rating";
import "../star.css";

export default function Browse() {
    const [posts, setPosts] = useState<UnitPost[]>([]);
    const [loading, setLoading] = useState(true); // New state to track loading
    const [error, setError] = useState<string | null>(null); // To handle errors

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await findAll();
                if (response) {
                    setPosts(response);
                } else {
                    setError("Failed to fetch posts");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to fetch posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navigation Section */}
            <header className="bg-white shadow">
                <Nav />
            </header>

            <div className="flex p-10 items-center">
                <Link href="/create_post">
                    <button
                        type="button"
                        className="text-black bg-gray-100 hover:bg-gray-200 font-light rounded-lg text-sm px-5 py-1 me-2 mb-2"
                    >
                        Create a post!
                    </button>
                </Link>
            </div>

            {posts.map((post) => (
                <div key={post.id} className="flex flex-col p-4 border-b border-gray-200">
                    <p>{post.username}</p>
                    <p>{post.created_at}</p>
                    <p>{post.airport.name}</p>
                    <p>{post.airport.iata}</p>
                    <p>{post.terminal.name}</p>
                    <p>{post.message}</p>
                    <Rating initialValue={post.rating} readonly size={20} />
                </div>
            ))}
        </div>
    );
}