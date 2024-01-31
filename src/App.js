import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowList shows={shows} />} />
        <Route path="/details/:id" element={<ShowSummary />} />
      </Routes>
    </div>
  );
}

export default App;
