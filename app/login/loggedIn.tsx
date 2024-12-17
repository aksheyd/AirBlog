'use client';

import { signOut } from 'next-auth/react';
import Nav from '../nav';
import Image from 'next/image';
import { Session } from 'next-auth';

export default function LoggedInView({ session }: { session: Session }) {
    return (
        <div className="relative flex flex-col h-screen overflow-hidden max-w-screen bg-white">
            <section className="relative z-10 flex-none">
                <Nav />
            </section>
            <div className="flex flex-col items-center justify-center h-screen overflow-hidden">

                <div className="absolute top-10 left-0 m-4 justify-left items-center space-y-4">
                    <Image
                        height="100"
                        width="100"
                        className="relative"
                        src={session.user?.image ?? ''}
                        alt={(session.user?.name ?? '') + ' photo'}
                    />
                    <h1>{session.user?.name}</h1>
                    <h1>{session.user?.email}</h1>
                    <button
                        className="text-black bg-gray-100 hover:bg-gray-200 font-light rounded-lg text-sm px-5 py-1 me-2 mb-2"
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </div>
            </div >
        </div>

    );
}