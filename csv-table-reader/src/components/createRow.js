import React, { useContext, useState } from "react";
import AppContext from '../context/context';
import { Button } from "react-bootstrap";

import '../style/newRow.css'

function NewRow() {
  const { data, setData } = useContext(AppContext);
  const [newRow, setNewRow] = useState({});
  const [renderForm, setRenderForm] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewRow({ ...newRow, [name]: value });
  };

  const submitRow = () => {
    const newRowArray = Object.values(newRow);
    setData([...data, newRowArray]);
    console.log(data)
  };

  const generateForm = (data) => {
    return(
      <div className="addForm">
        <h2>CREATE NEW ROWS</h2>
        <div className="formInputs">
          {data[0].map((collum, index) => (
            <label key={index}>
              { collum.toUpperCase() }:
              <input
                name={collum}
                onChange={handleChange}
                value={newRow[collum]}
                />
            </label>
          ))}
        </div>
        <div className="buttonsForm">
          <Button
            variant="info"
            type='submit'
            onClick={submitRow}
            >
            CREATE NEW LINE
          </Button>
          <Button
            variant="info"
            onClick={ () => setRenderForm(false) }
          >
            CANCEL
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="newRowComponent">  
      {
        renderForm ? generateForm(data) :
        <div className="openForm">
          <Button 
            variant="primary"
            onClick={ () => setRenderForm(true)}
          >
            Click here to create a new row!
          </Button>
        </div>
      }
    </div>
  );
}

export default NewRow;