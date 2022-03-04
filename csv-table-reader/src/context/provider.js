import React, { useState } from 'react';
import AppContext from './context';

function Provider({ children }) {
  const [stateA, setStateA] = useState([]);
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider