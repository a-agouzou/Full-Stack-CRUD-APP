import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";


const MovieCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src="https://images.unsplash.com/photo-1557683316-973673baf926"
        alt="movie"
      />
      <div className="p-4">
        <p className="text-2xl font-semibold mb-2">Movie Title</p>
        <p className="text-gray-500">Movie Description</p>
      </div>
        <div className="p-4 flex">
            <div className="flex items-center mr-4">
                <FaEdit className="mr-2" />
                <p>Edit</p>
            </div>
            <div className="flex items-center mr-4">
                <MdDelete className="mr-2" />
                <p>Delete</p>
            </div>
            <div className="flex items-center">
                <AiFillEye className="mr-2" />
                <p>Watched</p>
            </div>
        </div> 
    </div>
  );
};

export default MovieCard;
