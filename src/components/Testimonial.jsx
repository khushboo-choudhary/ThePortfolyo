import React, { useState, useEffect } from 'react';

function Testimonial({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const colors = ['bg-blue-200', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100', 'bg-red-100'];

    return (
        <section id="#testimonials" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 pt-3">Testimonials</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-center -m-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-center p-4 mx-auto max-w-2xl w-full ${currentIndex === index ? 'block' : 'hidden'}`}
                        >
                            <div className={`h-full ${colors[index % colors.length]} p-8 rounded`}>
                                <img
                                    alt={testimonial.name}
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src={testimonial.image.url}
                                />
                                <p className="leading-relaxed mb-6">{testimonial.review}</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Testimonial;
