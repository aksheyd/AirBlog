
import Link from "next/link";
import { posts } from "../lib/posts/data";
import Nav from "../nav";

export default function Browse() {


    return (
        <div className="relative flex flex-col h-screen max-w-screen bg-white">
            <section className="relative z-10 flex-none">
                <Nav />
            </section>

            <ul className="flex flex-col p-10">
                {posts.map(post => (
                    <li
                        key={post.id}
                    >
                        <h1>{post.title}</h1>
                        <p>{post.airport} | {post.terminal}</p>
                        <Link href={`/browse/${post.id}`}
                        >
                            Read More
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}