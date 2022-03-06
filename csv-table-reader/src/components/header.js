import React, { useContext } from "react";
import AppContext from '../context/context';
import DragDrop from "./uploadZone";
import '../style/header.css'

function Header() {
  const { fileName } = useContext(AppContext)
	return(
    <header>
      <h1>wellcome to csv table reader</h1>
      <DragDrop/>
      {fileName ? <h2>working on { fileName }</h2> : null}
    </header>
  )
}

export default Header;