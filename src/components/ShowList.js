
import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => (
 
  
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-[#1da1f2] shadow-md">
        <h1 className=" flex items-center justify-center text-3xl font-bold mb-4">TV Shows</h1>
        <ul className="border p-4 shadow-md">
          {shows.map(show => (
            <li key={show.show.id} className="mb-4 p-4 border rounded-md shadow-md">
              <strong className="text-lg">{show.show.name}</strong> - {show.show.genres.join(', ')}
              <Link to={`/details/${show.show.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full ml-4">
                Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  
export default ShowList;
