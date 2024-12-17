'use client';
import {  FormEvent, useState } from 'react'
import './post.css'
// import { Airports } from '../lib/api/data';

export default function CreatePost() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSending, setFormSending] = useState(false);
    const [formError, setFormError] = useState(false);

    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        // reset form state
        setFormError(false);
        setFormSubmitted(false);

        setFormSending(true);
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        try {
            const response = await fetch('', {
                method: 'POST',
                body: formData,
            })
            setFormSending(false);

            if (!response.ok) {
                setFormError(true);
            } else {
                setFormSubmitted(true);
            }
        } catch (error) {
            console.log(error)
            setFormSubmitted(false)
            setFormSending(false)
            setFormError(true)
            return
        }
    }

    return (
        <div id="create_post" className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 items-center justify-center">
            <div className="mx-auto text-center">
                <h2 className="text-balance text-5xl font-semibold text-gray-900 sm:text-5xl">
                    Create Post
                </h2>
            </div>
            <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20 tracking-wider">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-lg font-light">
                            Username (Optional)
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="username"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="airport" className="block text-lg font-light">
                            Airport
                        </label>
                        <div className="mt-2.5">
                            <select
                                id="airport"
                                name="airport"
                                // onSelect={}
                                defaultValue="---"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base tracking-wider text-gray-900"
                            >
                                <option>---</option>
                                <option>SFO</option>
                                <option>CDG</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-lg font-light tracking-wider">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-lg font-light">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-lg bg-white px-3.5 py-2 text-base text-gray-900"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 px-3.5 py-2.5 text-center text-md tracking-wider font-regular shadow-sm hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200">
                        Send
                    </button>
                </div>
            </form>

            {formError && (
                <div className="mt-8 text-center text-red-600 text-lg">
                    There was an error sending your message. Please try again.
                </div>
            )}

            {formSending && (
                <div className="mt-8 text-center text-gray-600 text-lg">
                    Sending...
                </div>
            )}

            {formSubmitted && (
                <div className="mt-8 text-center text-green-600 text-lg">
                    Thank you! Your message has been sent.
                </div>
            )}
        </div>
    )
}