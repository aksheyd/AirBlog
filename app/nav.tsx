import Link from 'next/link'
import { Site } from './lib/definitions';

export default function Nav() {
    const sites: Site[] = [
        { name: "Home", link: "/", external: false },
        { name: "About", link: "/about", external: false },
        { name: "Repo", link: "https://github.com/aksheyd/AirBlog", external: true },
        { name: "API", link: "/api", external: false },
        { name: "Login", link: "/login", external: false}
    ]

    return (
        <nav className="top-0 w-full bg-black py-2 text-white">
            <ul className="flex justify-around">
                {sites.map(site => (
                    <li 
                    key={site.name}
                    className="mr-5"
                    >
                        <Link
                            href={site.link}
                            target={site.external ? "_blank" : undefined}
                        >
                            {site.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}