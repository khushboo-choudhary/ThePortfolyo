import React from 'react';

function About(props) {
    return (
        <section id="#about">
            <div className="container px-10 py-2 mx-auto">
                <div className="flex flex-col text-center w-full mt-10">
                    <h1 className="sm:text-4xl text-3xl font-medium text-black mb-5 text-center mt-8 pt-5">
                        About <span className="text-orange-500 font-bold">Me</span>
                    </h1>
                </div>
                <div className="container px-5 mx-auto lg:flex lg:justify-center lg:items-center">
                    <div className="lg:mr-5 mb-5 lg:mb-0 mx-auto text-center">
                        <h1 className="text-xl text-indigo-600 font-bold">"{props.data.quote}"</h1>
                        <p className="text-gray-700 text-lg">{props.data.description}</p>
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded text-white font-bold mt-5">
                            Learn More
                        </button>
                    </div>
                    <div className="lg:ml-5">
                        <img
                            src={props.data.avatar.url}
                            width={50}
                            height={50}
                            alt={props.data.name}
                            className="h-80 w-80 lg:max-w-sm mx-auto shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
