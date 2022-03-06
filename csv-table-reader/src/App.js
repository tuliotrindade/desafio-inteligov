import React, { useContext } from 'react';
import AppContext from './context/context';
import Header from './components/header';
import RenderTable from './components/table';
import './style/app.css'

function App() {
  const { data } = useContext(AppContext);
  return (
    <div className='app'>
      <Header/>
      <div>
        { data  ? <RenderTable/> : null }
      </div>
    </div>
  );
}

export default App;
