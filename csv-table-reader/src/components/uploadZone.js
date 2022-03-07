import React, { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import AppContext from '../context/context';
import Papa from 'papaparse';
import '../style/uploadZone.css'
const fileTypes = ["CSV"];

function DragDrop() {
  const { setData, setFileName} = useContext(AppContext);
  const handleChange = (file) => {
    setFileName(file.name)
    Papa.parse(file, {
      header: false,
      complete: results => {
      results.data.pop()
      setData(results.data)
    },
  });
  };
  return (
    <div className="uploadZone">
      <h3>UPLOAD YOUR FILE HERE:</h3>
      <div className="dragDrop">
        <FileUploader 
          handleChange={ handleChange }
          name="file"
          types={ fileTypes }
          onTypeError={(err) => alert(err)}
        />
      </div>
    </div>
  );
}

export default DragDrop;