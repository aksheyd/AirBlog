import Link from "next/link"
import Nav from "./nav"


export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen max-w-screen bg-white">
      <section className="relative z-10 flex-none">
        <Nav />
      </section>

      <section className="main-page relative flex-grow overflow-hidden flex justify-center items-center">
        <div className="absolute z-20">
          <h1 className="flex text-8xl font-thin mb-0">AirBlog</h1>

          <p className="flex font-light items-center justify-center mb-4">
            The blog for airports
          </p>

          <div className="flex justify-center items-center">
            <Link href="/create_post">
              <button
                type="button"
                className="text-black bg-gray-100 hover:bg-gray-200 font-light rounded-lg text-sm px-5 py-1 me-2 mb-2"
              >
                
              <span className="">
              Create your first post!
              </span>
            </button>

            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}