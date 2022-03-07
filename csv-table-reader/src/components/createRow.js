import React, { useContext, useState } from "react";
import AppContext from '../context/context';
import { Button } from "react-bootstrap";

import '../style/newRow.css'

function NewRow() {
  const { data, setData } = useContext(AppContext);
  const [renderForm, setRenderForm] = useState(false)

  /* função para eviar os dados dos inputs para o context e atualizar tabela com nova linha */
  const submitRow = () => {
    const inputs = document.querySelectorAll('.createInput')
    const inputsValue = []
    Array.prototype.slice.call(inputs).map((item) => {
      if(item.value === '' ){
        return inputsValue.push('--')
      }
      return inputsValue.push(item.value)
    })
    setRenderForm(false)
    setData([...data, inputsValue])
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
                className="createInput"
                name={collum}
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