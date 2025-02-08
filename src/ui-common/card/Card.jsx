import React, { useState, useEffect } from "react";
import HoverCard from "./HoverCard";
import { KeepMountedModal } from "../Model";

const Card = (props) => {
  const [showHoverCard, setShowHoverCard] = useState(false);

  // Function to toggle HoverCard visibility when clicking the image
  const toggleHoverCard = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    setShowHoverCard(!showHoverCard);
  };

  // Close HoverCard when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".card-container")) {
        setShowHoverCard(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative border border-gray-200 rounded-lg shadow-md card-container p-4">
      {/* Click on Image to Toggle HoverCard */}
      <img 
        src={props.imgsrc} 
        className="w-full h-72 object-cover cursor-pointer" 
        alt={props.name} 
        onClick={toggleHoverCard} 
      />

      {/* Basic Info */}
      <div className="p-4 text-center">
        <h5 className="font-bold text-lg mb-1">{props.name}</h5>
        <h5 className="text-md mb-2">Email: {props.email}</h5>
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          🔗 Connect on LinkedIn
        </a>
      </div>

      {/* Show HoverCard on Image Click */}
      {showHoverCard && <KeepMountedModal/> }
    </div>
  );
};

export default Card;
