// "use client";

import Nav from "./nav"
// import { gsap } from "gsap"
// import { useGSAP } from "@gsap/react"
// import { useRef } from "react";
// import { MotionPathPlugin } from "gsap/all";
// import "./page.css"

// gsap.registerPlugin(MotionPathPlugin)

export default function Home() {
  // const ref = useRef<HTMLElement | null>(null);
  // const selec = gsap.utils.selector(ref)

  // useGSAP(() => {
  //   let tl = gsap.timeline({ repeat: -1 });

  //   tl.to(selec(".world-map"), {
  //     x: '100%',
  //     ease: "linear.inOut",
  //     duration: 15,
  //   })

  //   let tl2 = gsap.timeline({ repeat: -1 })
  //   tl2.fromTo(selec(".plane-image"),
  //   {
  //     y:-75, 
  //     ease: "sine.inOut",
  //     duration: 5,
  //   },
  //   {
  //     y:50, 
  //     ease: "sine.inOut",
  //     duration: 5,
  //     yoyo: true,
  //     repeat: -1,
  //     stagger:0.5
  //   }
  //   )

  // }, [])

  return (
    <div className="relative flex flex-col min-h-screen max-w-screen bg-white">
      <section className="relative z-10 flex-none">
        <Nav />
      </section>

      <section className="main-page relative flex-grow overflow-hidden flex justify-center items-center">
        {/* <img 
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/56901/bg-clouds.png"
        className="world-map absolute z-0 h-1/4 rotate-180 object-cover top-0 left-0 blur-sm"
        >
        </img>

        <img 
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/56901/bg-clouds.png"
        className="world-map absolute z-1 h-1/4 rotate-180 object-cover top-0 right-full blur-sm"
        >
        </img>

        <img
        src="https://cdn.creazilla.com/cliparts/3173600/airplane-clipart-xl.png"
        className="plane-image absolute rotate-30 z-2 flex w-1/2 blur-sm"
        >
        </img> */}

        <div className="absolute z-20">
          <h1 className="flex text-8xl font-thin mb-0">AirBlog</h1>

          <p className="flex font-light items-center justify-center mb-4">
            The blog for airports
          </p>

          <div className="flex justify-center items-center">
            <button
              type="button"
              className="text-black bg-gray-100 hover:bg-gray-200 font-light rounded-lg text-sm px-5 py-1 me-2 mb-2"
            >
              Create your first post!
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}