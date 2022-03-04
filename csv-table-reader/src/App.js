import React, { useContext } from 'react';
import AppContext from './context/context';
import DragDrop from './components/uploadZone';
import Table from './components/table';

function App() {
  const { stateA } = useContext(AppContext);
  return (
    <div>
      <DragDrop/>
      <button onClick={()=> console.log(stateA)} >aaa</button>
      { stateA  ? <Table/> : null }
    </div>
  );
}

export default App;
