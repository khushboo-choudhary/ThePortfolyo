import React from 'react';
import Typewriter from 'typewriter-effect';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowDownLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Hero(props) {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <section id="hero">
            <div className="container mx-auto text-center pt-2">
                <div className="flex flex-col items-center justify-center text-center mt-12">
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text p-2 mt-12">
                        <Typewriter
                            options={{
                                strings: ['Welcome to My Universe'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                    <img src={props?.data?.avatar?.url} alt={props?.data?.name} className="w-40 h-40 rounded-full mt-6" />
                    <h1 className="text-4xl font-bold mt-4 text-black">
                        Hi, I am <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">{props.data.name}</span>
                    </h1>
                    <Typewriter
                        options={{
                            strings: [props.data.title],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            wrapperClassName: 'text-xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text font-bold',
                        }}
                    />
                    <p className="mt-4 text-2xl text-black">{props?.data?.subTitle}</p>
                    <div className="flex justify-center gap-5 mt-4">
                        <a href={props?.data?.contactEmail} target="_blank" rel="noreferrer" className="link text-pink-500">
                            <MdOutlineMailOutline size={28} />
                        </a>
                        <a href={props?.data?.phoneNumber} target="_blank" rel="noreferrer" className="link text-pink-500">
                            <LuPhone size={28} />
                        </a>
                    </div>
                    <button
                        className={`flex items-center text-lg gap-3 border-2 border-blue-500 text-black rounded-md px-4 py-2 mt-4 transition-colors ${isHovered ? 'hover:border-violet-500' : ''}`}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    >
                        let's talk {isHovered ? <FaArrowDownLong size={20} /> : <FaArrowRightLong size={20} />}
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Hero;
