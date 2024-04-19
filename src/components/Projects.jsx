/* eslint-disable react/prop-types */
import React from 'react';
import Modal from './Modal';

function Projects(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const handleOpenModal = (props) => {
        setSelectedProject(props);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section id="#projects" className="mt-10">
            <div className="container px-5 py-10 mx-auto text-center mt-10">
                <h1 className="sm:text-4xl text-3xl font-medium text-black mt-10 pt-5">Projects</h1>
                <div className="flex flex-wrap mt-12">
                    {props.data?.map((project, index) => (
                        <div
                            key={index}
                            className="lg:w-1/4 md:w-1/2 p-4 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
                        >
                            <div className="border border-blue-200 rounded-lg overflow-hidden shadow-lg shadow-blue-500/50">
                                <img
                                    className="w-full p-2 shadow-lg shadow-blue-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    src={project.image.url}
                                    alt={project.title}
                                />
                                <div className="p-6">
                                    <h2 className="text-xl text-start text-violet-600 font-bold title-font mb-1">{project.title}</h2>
                                    <div className="flex justify-center mt-4 flex-wrap">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-blue-600 font-bold text-sm md:text-xs bg-blue-100 px-3 py-2 rounded-full shadow-lg shadow-blue-500/50 mr-2 mb-2"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => handleOpenModal(project)}
                                        className="flex mx-auto mt-6 text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded shadow-lg shadow-blue-500/50"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedProject && <Modal showModal={showModal} handleCloseModal={handleCloseModal} project={selectedProject} />}
            </div>
        </section>
    );
}

export default Projects;
