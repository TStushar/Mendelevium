import React from "react";

const HoverCard = ({ imgsrc, name, email, linkedin, industry, location, graduation, degree, company, position, contactEmail, helpingHand }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 max-w-lg bg-white p-6 rounded-lg shadow-2xl border border-gray-300 z-50">
      
      {/* Profile Image */}
      <img src={imgsrc} alt={name} className="w-24 h-24 rounded-full border-2 border-gray-300 mx-auto mb-3" />

      {/* Name & Email */}
      <h2 className="text-lg font-semibold text-center">{name}</h2>
      <p className="text-gray-700 text-sm text-center">{email}</p>

      {/* LinkedIn Link */}
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm mt-1 block text-center">
        🔗 Connect on LinkedIn
      </a>

      {/* Additional Details */}
      <p className="text-gray-700 mt-2"><strong>Industry:</strong> {industry}</p>
      <p className="text-gray-700"><strong>Location:</strong> {location}</p>
      <p className="text-gray-700"><strong>Graduation:</strong> {graduation}</p>
      <p className="text-gray-700"><strong>Degree:</strong> {degree}</p>
      <p className="text-gray-700"><strong>Company:</strong> {company}</p>
      <p className="text-gray-700"><strong>Position:</strong> {position}</p>
      <p className="text-gray-700"><strong>Contact:</strong> {contactEmail}</p>

      {helpingHand && (
        <p className="text-green-600 font-semibold mt-2">🤝 Helping Hand</p>
      )}
    </div>
  );
};

export default HoverCard;
