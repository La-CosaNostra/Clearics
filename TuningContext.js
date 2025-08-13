import React, { createContext, useState } from 'react';

export const TuningContext = createContext();

export const TuningProvider = ({ children }) => {
  const [tuning, setTuning] = useState('standard');
  const offsets = {
    standard: [0, 0, 0, 0, 0, 0], // EADGBE
    dropD: [2, 0, 0, 0, 0, 0]    // DADGBE
  };
  return (
    <TuningContext.Provider value={{ tuning, setTuning, offsets: offsets[tuning] }}>
      {children}
    </TuningContext.Provider>
  );
};
