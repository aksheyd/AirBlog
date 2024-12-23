import Link from 'next/link'

export const sites = [
    { name: "Home", link: "/", external: false },
    { name: "Browse", link: "/browse", external: false },
    { name: "About", link: "/about", external: false },
    { name: "Repo", link: "https://github.com/aksheyd/AirBlog", external: true },
    { name: "API", link: "/api", external: true },
]

export default function Nav() {
    return (
        <nav className="top-0 w-full bg-black py-2 text-white">
            <ul className="flex justify-around">
                {sites.map(site => (
                    <li 
                    key={site.name}
                    className="mr-5 transition-all duration-700 ease-in-out origin-center inline-block hover:scale-110"
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