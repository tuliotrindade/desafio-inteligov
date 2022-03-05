import React, { useContext } from "react";
import AppContext from '../context/context';
import { Table, Button } from "react-bootstrap";
import '../style/table.css'

function Table1() {
  const { stateA } = useContext(AppContext);

  const deleteRow = (e) => {
    return e.target.parentNode.parentNode.remove()
  };


  return (
    <Table striped bordered hover variant="dark" className="table" >
      <thead>
        <tr>
          {
            stateA.map((element, index) => {
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
        stateA.map((element, index) => {
          if(index !== 0 && element.length !== 1){
            return (
              <tr>
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

export default Table1;