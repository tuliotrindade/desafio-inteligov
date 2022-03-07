import React, { useContext } from "react";
import AppContext from '../context/context';
import { Button } from "react-bootstrap";

import '../style/editRow.css'

function EditRow() {
  const { data, setData, renderForm, editElement, setRenderForm } = useContext(AppContext);

  /* função que envia a edição para o contexto e atualiza a tabela */
  const submitEdit = () => {
    const inputs = document.querySelectorAll('.editInput')
    const inputsValue = []

    /* verifica se todos os campos estão preenchidos se não insere uma string '--' para sinalizar que esta vazio */
    Array.prototype.slice.call(inputs).map((item) => {

      if(item.value === '' ){
        return inputsValue.push('--')
      }
      return inputsValue.push(item.value)
    })
    let newData = []

    /* busca o elemento elemento a ser editado e substitui suas informações pelos novos dados no context */
    data.map((item, index) => {
      if( index === Number(editElement)){
        return newData.push(inputsValue)
      }
      return newData.push(item)
    })
    setRenderForm(false)
    setData(newData)
    newData = []
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
              SUBMIT EDIT
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