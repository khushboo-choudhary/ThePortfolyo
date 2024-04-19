import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';

function Contact({ socialHandles, data }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section id="#contact" className="bg-gray-100 py-12">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {/* Contact Information */}
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold mb-4 ">Contact Information</h2>
                            <div className="mb-6 p-5">
                                <p className="flex items-center mb-6 text-xl">
                                    <HiOutlineLocationMarker className="mr-4" color="#a654f5" size={30} />
                                    {data.address}
                                </p>
                                <p className="flex items-center mb-6 text-xl">
                                    <LuPhone className="mr-4" size={30} color="#a654f5" />
                                    {data.phoneNumber}
                                </p>
                                <p className="flex items-center text-xl">
                                    <MdOutlineMailOutline className="mr-4" size={30} color="#a654f5" />
                                    {data.contactEmail}
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="flex flex-col justify-center items-center md:items-start">
                            <h2 className="text-3xl font-medium mb-6">Contact Me</h2>
                            <form onSubmit={handleSubmit} className="max-w-md w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-800 py-2 px-4 leading-tight transition-colors duration-200"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-800 py-2 px-4 leading-tight transition-colors duration-200"
                                        placeholder="Your Email"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-800 py-2 px-4 leading-tight resize-none transition-colors duration-200"
                                        placeholder="Your Message"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section id="#social-handles" className="py-10 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-medium text-black mb-6">Follow Me</h2>
                    <div className="flex justify-center space-x-6">
                        {socialHandles.map((handle) => (
                            <a
                                key={handle._id}
                                href={handle.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-full bg-white p-3 hover:bg-gray-200 transition duration-300"
                            >
                                <img src={handle.image.url} alt={handle.platform} className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
