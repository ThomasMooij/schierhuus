import React from 'react'

export const ContactForm = () => {
  return (
    <form className="w-full max-w-md">
        <div className="mb-4">
            <label htmlFor="name" className="mb-2 text-gray-500">Name</label>
            <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
                className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="mb-2 text-gray-500">Email</label>
            <input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
                className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="mb-2 text-gray-500">Message</label>
            <textarea
                id="message"
                required
                placeholder="How can we assist you?"
                rows={4}
                className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
            ></textarea>
        </div>
        <button
            type="submit"
            className="py-2 px-4 bg-Terracota hover:bg-blue-700 text-white font-bold rounded transition-colors duration-300"
        >
            Send message
        </button>
    </form>
  )
}
