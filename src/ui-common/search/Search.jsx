import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <>
    <div className="relative group hidden sm:flex justify-center items-center h-12">
          <motion.div 
            className="relative w-[350px]"
            whileHover={{ scale: 1.05 }} // Hover effect
          >
            <input
              type="text"
              placeholder="Search"
              className="search-bar w-full px-4 py-2 border rounded-lg focus:outline-none 
              focus:scale-105 transition-transform duration-200 hover:shadow-lg"
            />
            <IoMdSearch className="text-xl text-gray-900 group-hover:text-primary dark:text-gray-700 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
          </motion.div>
        </div>
        </>
  )
}

export default Search