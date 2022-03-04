import React, { useContext } from "react";
import AppContext from '../context/context';

function Table() {
  const { stateA } = useContext(AppContext);
  return (
    <table>
      {
        stateA.map((element, index) => {
          if(index===0){
          return element.map((item) => {
            return <th>{ item }</th>
          })
        }
        })
      }
      {
        stateA.map((element, index) => {
          if(index !== 0 && element.length !== 1){
            console.log(element.length)
            return (
              <tr>
                {
                  element.map((item) => {
                    return <td>{item}</td>
                  })
                }
                <td><button>edit</button></td>
                <td><button>delete</button></td>
              </tr>
            )
          }
        })
      }
    </table>
  )
}

export default Table