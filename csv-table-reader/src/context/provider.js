import React, { useState } from 'react';
import AppContext from './context';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState();
  const [renderForm, setRenderForm] = useState(false)
  const [editElement, setEditElement] = useState()
  const contextValue = {
    data,
    setData,
    fileName,
    setFileName,
    renderForm,
    setRenderForm,
    editElement,
    setEditElement
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.object
};