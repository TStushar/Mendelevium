import React from 'react';
import { motion } from "framer-motion";
import Card from "../ui-common/card/Card.jsx";
import C_data from "../ui-common/card/C_data.js";
import Search from "../ui-common/search/Search.jsx";
import Filter from "../ui-common/filter/Filter.jsx"



const Network_tab = () => {
  return (
    <>
      <div className="mx-8 mt-32">
        
        {/* Search Bar */}
        <div className='mx-8 mt-32 flex items-center gap-4'>
        <Search/>
        <Filter/>
        </div>
        
      </div>

      {/* Card Container */}
      <div className="container mx-auto mb-5 px-2 hover:cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {C_data.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} // Initial animation (fade-in from bottom)
              animate={{ opacity: 1, y: 0 }} // Final state
              transition={{ duration: 0.5, delay: idx * 0.1 }} // Staggered effect
              whileHover={{ scale: 1.05 }} // Hover effect
            >
              <Card
                imgsrc={val.imgsrc}
                name={val.name}
                email={val.email}
                
                linkedin={val.linkedin}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Network_tab;
