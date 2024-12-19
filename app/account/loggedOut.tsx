'use client';

import { signIn } from 'next-auth/react';
import Nav from '../nav';

export default function LoggedOutView() {
    return (
        <div className="relative flex flex-col min-h-screen bg-white">
            <section className="relative z-10 flex-none">
                <Nav />
            </section>
            <div className="flex flex-1 items-center justify-center">
                <div className="flex border border-transparent rounded-lg shadow-xl p-10">
                    <button
                        className="text-black bg-gray-100 hover:bg-gray-200 font-light rounded-lg text-sm px-5 py-1"
                        onClick={() => signIn('google')}
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}