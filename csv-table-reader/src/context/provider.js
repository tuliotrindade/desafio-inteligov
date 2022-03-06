import React, { useState } from 'react';
import AppContext from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState();
  const contextValue = {
    data,
    setData,
    fileName,
    setFileName,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider