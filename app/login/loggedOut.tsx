'use client';

import { signIn } from 'next-auth/react';
import Nav from '../nav';

export default function LoggedOutView() {
    return (
        <div className="relative flex flex-col h-screen overflow-hidden max-w-screen bg-white">
        <section className="relative z-10 flex-none">
          <Nav />
        </section>
            <div className="flex items-center justify-center h-screen overflow-hidden">

                <button
                    className="text-black bg-gray-100 hover:bg-gray-200 font-light rounded-lg text-sm px-5 py-1 me-2 mb-2"
                    onClick={() => signIn('google')}
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}