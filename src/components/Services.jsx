import React from 'react';
import { motion } from 'framer-motion';

function Services(props) {
    const colors = ['bg-blue-200', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100', 'bg-red-100'];

    return (
        <section id="#services" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 pt-5">Services</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever project you have in mind, we have a service for you. Check out our offerings below.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {props?.data?.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center shadow-md flex flex-col justify-center items-center shadow-lg shadow-blue-500/50 ${colors[index % colors.length]}`}
                            whileHover={{ scale: 1.05 }} // Scale up on hover
                            transition={{ duration: 0.3 }} // Smooth transition duration
                        >
                            <div className="p-8 mx-auto text-center">
                                <h2 className="text-2xl font-medium text-gray-900 mb-1">{service.name}</h2>
                                <motion.img
                                    src={service.image.url}
                                    alt={service.name}
                                    width={'50%'}
                                    whileHover={{ scale: 1.25 }}
                                    transition={{ duration: 0.3 }}
                                    className="object-cover object-center rounded-full inline-block mb-4 border-2 border-gray-200 bg-gray-100"
                                />
                                <h1 className="text-2xl font-bold text-gray-900 mb-3">{service.charge}</h1>
                                <p className="leading-relaxed mb-3">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
