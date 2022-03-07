import React, { useContext } from "react";
import AppContext from '../context/context';
import DragDrop from "./uploadZone";
import '../style/header.css'

function Header() {
  const { fileName } = useContext(AppContext)
	return(
    <header>
      <div className="initialHeader">
        <h1>CSV TABLE READER</h1>
        <DragDrop/>
      </div>
      <div className="fileName">
        { fileName ? <h2>WORKING AT: { fileName }</h2> : null }
      </div>
    </header>
  )
}

export default Header;