import React, { useContext } from "react";
import AppContext from '../context/context';
import { Table, Button } from "react-bootstrap";
import '../style/table.css'

function RenderTable() {
  const { data, setData } = useContext(AppContext);

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


  return (
    <Table striped bordered hover variant="dark" className="table" >
      <thead>
        <tr>
          {
            data.map((element, index) => {
              if(index===0){
              return element.map((item) => {
                return <th>{ item }</th>
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
              <tr key={ index }>
                {
                  element.map((item) => {
                    return <td>{item}</td>
                  })
                }
                <td><Button variant="secondary" className="options">edit</Button></td>
                <td><Button variant="secondary" className="options" onClick={(e) => deleteRow(e)}>delete</Button></td>
              </tr>
            )
          }
        })
      }
      </tbody>
    </Table>
  )
}

export default RenderTable;