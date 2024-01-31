
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react'
const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
   
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div class="p-8 bg-[#f0fdf4] shadow-md rounded-md">
    <h1 class="text-3xl font-bold mb-4">Show Details</h1>
    {show ? (
      <div>
        <h2 class="text-xl font-semibold mb-2">{show.name}</h2>
        <p class="text-gray-700">{show.summary}</p>
        <Link to="/" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Back to List
        </Link>
      </div>
    ) : (
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    )}
  </div>
  
  );
};

export default ShowSummary;
