import React, { useContext } from "react";
import AppContext from '../context/context';
import { Button } from "react-bootstrap";

import { saveAs } from "file-saver";

function Download() {
  const { fileName, data } = useContext(AppContext);
  const downloadFile = () => {
    return(
      saveAs(
        new Blob([data], { type: "text/csv;charset=utf-8;" }),
        `edited-${fileName}`
      )
    )
  }
	return (
    <div className="download">
      <Button onClick={ () => downloadFile() }>Download Table</Button>
    </div>
  )
}

export default Download