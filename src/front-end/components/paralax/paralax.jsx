import React, { useState } from 'react';
import './paralax.css';
import '../../assets/style/global.css';

const Parallax = ({ title, image }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleImage = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="parallax-container">
            <div className="title" onClick={toggleImage}>
                <h2 className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {title}
                </h2>

            </div>
            {isOpen && (
                <div className="image-container">
                    <img src={image} alt={title} className="project-image" />
                </div>
            )}
        </div>
    );
};

export default Parallax;
