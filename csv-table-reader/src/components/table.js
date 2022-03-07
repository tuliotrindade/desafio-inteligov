import React, { useContext } from "react";
import AppContext from '../context/context';
import Download from '../components/download';
import { Table, Button } from "react-bootstrap";
import '../style/table.css'

function RenderTable() {
  const { data, setData, setRenderForm, setEditElement } = useContext(AppContext);

  /* remove um elemento tanto da tabela vizualmente e também dos dados no context */
  const deleteRow = (e) => {
    const elementRemove = e.target.parentNode.parentNode.firstChild.textContent;
    const header = data[0];
    const updatedData = data.slice(1).filter((arr) => {
      if (arr[0] !== elementRemove) {
        return arr;
      }
    });
    setData([header, ...updatedData]);
    console.log(data)
  };

  /* envia o id do elemento a ser editado e permite a renderização do formulario de edição */
  const editRow = (e) => {
    const editElementId = e.target.parentNode.parentNode;
    setEditElement(editElementId.id);
    setRenderForm(true);
  }


  return (
    <div className="tableContainer">
      <Table striped bordered hover variant="dark" className="table" >
        <thead>
          <tr key='thead'>
            {
              data.map((element, index) => {
                if(index===0){
                return element.map((item) => {
                  return <th key={ item }>{ item }</th>
                })
              }
              })
            }
          </tr>
        </thead>
        <tbody>
        {
          data.map((element, index) => {
            if(index !== 0 && element.length !== 1){
              return (
                <tr key={ index } id={ index }>
                  {
                    element.map((item) => {
                      return <td key={ item }>{item}</td>
                    })
                  }
                  <td><Button variant="secondary" className="options" onClick={ (e) => editRow(e) }>edit</Button></td>
                  <td><Button variant="secondary" className="options" onClick={(e) => deleteRow(e)}>delete</Button></td>
                </tr>
              )
            }
          })
        }
        </tbody>
      </Table>
      <Download/>
    </div>
  )
}

export default RenderTable;