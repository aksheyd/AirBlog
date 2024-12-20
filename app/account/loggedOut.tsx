'use client';

import { signIn } from 'next-auth/react';
import Nav from '../nav';

export default function LoggedOutView() {
    return (
        <div className="relative flex flex-col min-h-screen bg-white">
            <section className="relative z-10 flex-none">
                <Nav />
            </section>
            <div className="flex items-center justify-center flex-1 p-4">
                <div className="space-y-4 border p-6 rounded-lg shadow-md">
                    <button
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={() => signIn('google')}
                    >
                        Sign in with Google
                    </button>

                    <div className="block text-sm font-medium text-gray-700 text-balance">
                        <p>Currently, there is no need to login for posting.</p>
                        <p>You can post anonymously. Cheers!  </p>

                    </div>
                </div>
            </div>
        </div>
    );
}