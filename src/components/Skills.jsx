import React from 'react';

function Skills(props) {
    return (
        <>
            <section id="#skills">
                <div className="container px-5 py-5 mx-auto mt-12">
                    <div className="flex flex-col text-center w-full mt-10">
                        <h1 className="sm:text-4xl text-3xl font-medium text-black mt-5 pt-9">Skills</h1>
                    </div>
                    <div className="flex flex-wrap mt-12">
                        {props?.data?.map((skill, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div className="border border-gray-800 rounded-lg overflow-hidden">
                                    <div
                                        key={skill._id}
                                        className="inline-block py-4 px-2 bg-gray-800 text-white text-xs font-medium tracking-wider flex justify-between"
                                    >
                                        <img src={skill.image.url} alt={skill.name} className="w-20 h-20 mr-4 my-auto" />
                                        <div className="mx-auto w-full my-auto">
                                            <h3 className="text-lg font-bold mb-5">{skill.name}</h3>
                                            <div className="relative flex items-center">
                                                <div className="overflow-hidden h-2 flex-grow mr-4 bg-gray-200">
                                                    <div style={{ width: `${skill.percentage}%` }} className="h-full bg-blue-500"></div>
                                                </div>
                                                <p className="text-yellow-600 font-bold text-lg">{skill.percentage}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
