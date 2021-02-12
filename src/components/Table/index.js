import React from "react";
import Table from "react-bootstrap/Table";


// import "./style.css";

function MyTable(props) {
  return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>City</th>
      <th>State</th>
      <th>Email</th>
      <th>Phone</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
    {props.children}
     
  </tbody>
  

</Table>
  )

}

export default MyTable;




