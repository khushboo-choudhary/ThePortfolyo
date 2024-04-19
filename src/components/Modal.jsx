function Modal({ showModal, handleCloseModal, project }) {
    if (!showModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 overflow-y-auto">
            <div className="relative bg-gray-900 p-6 mx-4 md:mx-auto rounded-lg max-w-3xl w-full">
                <button
                    className="absolute top-2 right-2 md:top-4 md:right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                    onClick={handleCloseModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-blue-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full p-2 md:p-4 shadow-lg transition duration-300 transform hover:scale-105"
                            src={project.image.url}
                            alt={project.title}
                        />
                    </div>
                    <div className="text-white">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-4">{project.title}</h2>
                        <p className="text-sm md:text-base text-purple-200">{project.description}</p>
                        <div className="mt-4 flex flex-col md:flex-row md:justify-center md:items-center md:gap-10">
                            <button className="px-3 py-1 md:px-4 md:py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 shadow-lg shadow-purple-500/50 mb-2 md:mb-0">
                                Live Link
                            </button>
                            <button className="px-3 py-1 md:px-4 md:py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 shadow-lg shadow-purple-500/50">
                                Github Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
