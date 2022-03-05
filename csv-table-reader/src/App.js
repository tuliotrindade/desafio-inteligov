import React, { useContext } from 'react';
import AppContext from './context/context';
import DragDrop from './components/uploadZone';
import Table1 from './components/table';
import './style/app.css'

function App() {
  const { stateA } = useContext(AppContext);
  return (
    <div className='app'>
      <DragDrop/>
      { stateA  ? <Table1/> : null }
    </div>
  );
}

export default App;
