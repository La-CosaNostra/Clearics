import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { SongContext } from './SongContext';
import SongDisplay from './SongDisplay';

const SongLoader = () => {
  const { setSong } = useContext(SongContext);

  useEffect(() => {
    axios.get('[invalid url, do not cite])
      .then(response => setSong(response.data[0]))
      .catch(error => console.error('Error fetching song:', error));
  }, [setSong]);

  return <SongDisplay />;
};

export default SongLoader;
