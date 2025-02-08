import React, { useState, useEffect } from 'react';

import H1 from "../images/H1.jpeg";
import H2 from "../images/H2.jpeg";
import H3 from "../images/H3.jpeg";


const slides = [
    {
        id: 1,
        image: H1,
        // points: ["High-quality care", "Trusted by families", "Experienced staff", "24/7 Support", "Personalized nursing", "Specialized treatments", "Modern facilities", "Comfortable environment", "Expert doctors"]
    },
    {
        id: 2,
        image: H2,
        // points: ["High-quality care", "Trusted by families", "Experienced staff", "24/7 Support", "Personalized nursing", "Specialized treatments", "Modern facilities", "Comfortable environment", "Expert doctors"]
    },
    {
        id: 3,
        image: H3,
        // points: ["High-quality care", "Trusted by families", "Experienced staff", "24/7 Support", "Personalized nursing", "Specialized treatments", "Modern facilities", "Comfortable environment", "Expert doctors"]
    },
    // {
    //     id: 4,
    //     image: img4,
    //     // points: ["High-quality care", "Trusted by families", "Experienced staff", "24/7 Support", "Personalized nursing", "Specialized treatments", "Modern facilities", "Comfortable environment", "Expert doctors"]
    // },
];

const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    

    return (
<div className="relative mx-auto xl:mx-0 2xl:mx-0">
    <div className="overflow-hidden">
        {/* Image with light overlay */}
        <div className="relative">
            <img
                src={slides[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[450px] sm:h-[550px] lg:h-[650px] object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-white opacity-20"></div> {/* Light overlay */}
        </div>

        {/* Bullet Points and Button Overlay */}
        <div className="absolute bottom-5 left-5 sm:left-10 md:left-20 lg:left-40 bg-opacity-50 text-zinc-50 p-4 sm:p-6 md:p-8 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
            <ul className="text-base sm:text-xl md:text-2xl font-bold mb-4">
                {
                (slides[currentIndex].points)?
                
                slides[currentIndex].points.map((point, index) => (
                    <li key={index} className="mb-1 sm:mb-2">
                        &#8226; {point}
                    </li>
                )) : <></>}
            </ul>
        </div>
    </div>

    {/* Navigation Buttons */}
    <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 sm:left-5 md:left-10 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2"
    >
        &#10094; {/* Left Arrow */}
    </button>
    <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 sm:right-5 md:right-10 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2"
    >
        &#10095; {/* Right Arrow */}
    </button>
</div>

    );
};

export default LandingPage;
