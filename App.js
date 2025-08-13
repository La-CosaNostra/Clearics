import React from 'react';
import { TuningProvider } from './TuningContext';
import { SongProvider } from './SongContext';
import SongLoader from './SongLoader';
import './App.css';

function App() {
  return (
    <TuningProvider>
      <SongProvider>
        <SongLoader />
      </SongProvider>
    </TuningProvider>
  );
}

export default App;
