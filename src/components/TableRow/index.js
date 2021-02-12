import React from "react";

function TableRow (props) {
    return (
        <tr>
      <td><img src={props.image}></img></td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.dob}</td>

    </tr>
    )
}

export default TableRow;