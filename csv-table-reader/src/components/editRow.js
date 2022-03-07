import React, { useContext, useState } from "react";
import AppContext from '../context/context';
import { Button } from "react-bootstrap";

import '../style/editRow.css'

function EditRow() {
  const { data, setData, renderForm, editElement, setRenderForm } = useContext(AppContext);
  const [newRow, setNewRow] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewRow({ ...newRow, [name]: value });
  };

  const submitEdit = () => {
    const inputs = document.querySelectorAll('.editInput')
    const inputsValue = []
    Array.prototype.slice.call(inputs).map((item) => {
      if(item.value === '' ){
        return inputsValue.push('--')
      }
      return inputsValue.push(item.value)
    })
    const newData = []
    data.map((item, index) => {
      if( index === Number(editElement)){
        return newData.push(inputsValue)
      }
      return newData.push(item)
    })
    setRenderForm(false)
    setData(newData)
  };

  const generateForm = (data) => {
    return(
      <div className="editForm">
        <h2>UPDATE ROW</h2>
        <div className="formInputs">
          {data[0].map((collum, index) => (
            <label key={index}>
              { collum.toUpperCase() }: 
              <input
                className="editInput"
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
              onClick={submitEdit}
              >
              Criar nova linha
            </Button>
            <Button variant="info" onClick={ () => setRenderForm(false)}>
              CANCEL
            </Button>
        </div>
      </div>
    );
  }

  return (
    <div>  
      {
        renderForm ? generateForm(data) : null
      }
    </div>
  );
}

export default EditRow;