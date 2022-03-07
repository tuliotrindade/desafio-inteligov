import React, { useContext } from 'react';
import AppContext from './context/context';
import Header from './components/header';
import RenderTable from './components/table';
import NewRow from './components/createRow';
import EditRow from './components/editRow';
import './style/app.css'

function App() {
  const { data, renderForm } = useContext(AppContext);
  return (
    <div className='app'>
      <Header/>
      {data.length > 0 ? <NewRow /> : null}  
      { data.length > 0  ? <RenderTable/> : null }
      { renderForm ? <EditRow/> : null }
    </div>
  );
}

export default App;
