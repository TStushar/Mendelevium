import React from 'react';


const Card = (props) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md ">
      <img src={props.imgsrc} className="w-full h-72 object-cover" alt={props.imgsrc} />
      <div className="p-4">
        <h5 className="font-bold text-lg mb-1 text-center">{props.name}</h5>
        <h5 className=" text-md mb-2 text-center">Degree: {props.degree}</h5>
        <p className="text-sm mb-2 text-center">Year of passing: {props.yearofpassing}</p>
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link text-center">
                        🔗 Connect on LinkedIn
                    </a>
        
        
      </div>
    </div>
  );
};

export default Card;
