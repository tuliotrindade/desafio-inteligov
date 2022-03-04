import React, { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import AppContext from '../context/context';
import Papa from 'papaparse';

const fileTypes = ["CSV"];

function DragDrop() {
  const { setStateA } = useContext(AppContext);
  const handleChange = (file) => {
  	Papa.parse(file, {
    	header: false,
		  delimiter: ",",
    	complete: results => {
      	setStateA(results.data)
    },
  });
  };
  return (
    <FileUploader handleChange={ handleChange } name="file" types={ fileTypes } download/>
  );
}

export default DragDrop;