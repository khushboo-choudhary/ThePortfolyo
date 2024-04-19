import React from 'react';
import { GrClose } from 'react-icons/gr';
import { TiThMenu } from 'react-icons/ti';

function Header(props) {
    const [showNavList, setShowNavList] = React.useState(false);
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const offset = navbar.offsetTop;

            if (window.pageYOffset > offset) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavList = (id) => {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
        setShowNavList(!showNavList);
    };

    return (
        <header className="sticky top-0 bottom-10 z-10 bg-gray-800 py-4" id="navbar">
            <nav className="container w-full mx-auto flex justify-between items-center">
                <div className="flex items-center gap-5 mx-5">
                    <img src={props?.data?.avatar?.url} alt={props?.data?.name} className="w-16 h-16 rounded-full" />
                    <a href="/" className="text-white focus:outline-none ">
                        {props.data.name}
                    </a>
                </div>

                {/* Menu items */}
                <div className={`md:flex ${showNavList ? 'block' : 'hidden'}`}>
                    <ul
                        className={`md:flex flex-wrap md:items-center ${showNavList ? 'flex-col md:flex-row md:top-4 md:bg-gray-800 md:right-0 absolute top-20 p-5 right-20 bg-gray-600' : ''}`}
                    >
                        <li>
                            <a
                                href="#home"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('hero')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#services')}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#timeline"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#timeline')}
                            >
                                Timeline
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#testimonials')}
                            >
                                Testimonial
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="border-b-4 border-transparent px-4 text-white cursor-pointer hover:border-rose-900 duration-300 transform hover:scale-105 transition-all"
                                onClick={() => toggleNavList('#contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Hamburger menu button */}
                <button type="button" onClick={toggleNavList} className="btn btn--icon md:hidden mr-5" aria-label="toggle navigation">
                    {showNavList ? <GrClose color="white" size={24} /> : <TiThMenu color="white" size={24} />}
                </button>
            </nav>
        </header>
    );
}

export default Header;
