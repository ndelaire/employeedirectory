import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTable from "./components/Table";
import TableRow from "./components/TableRow";
import Table from "react-bootstrap/Table"

class App extends Component {
  
  state = {
    employees:[],
    search:"",
    filteredEmployees: []
  };

  componentDidMount() {

    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({ employees: res.data.results })})
      .catch(err => console.log(err));
      console.log(this.state.employees);
  };

  handleInputChange = (event) => {
    console.log(event.target.value)
   this.setState({
     search:event.target.value
   })
   this.filterEmployees(this.state.search)
  };

filterEmployees = (search) => {
  let searchEmployees = this.state.employees.filter(employee => {
    return employee.name.first.includes(search)
  })
  console.log(searchEmployees)
this.setState({
  employees:searchEmployees
})
};

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <input type="text" onChange={this.handleInputChange}
          name="user" 
></input>
        <MyTable> 
        {this.state.employees.map(employee => (
          <TableRow
          
            key={employee.id.value}
            first={employee.name.first}
            last={employee.name.last}
            email={employee.email}
            city={employee.location.city}
            state={employee.location.state}
            phone={employee.phone}
            image={employee.picture.thumbnail}
            dob={employee.dob.date}

          />
        ))}
        </MyTable>
       
      </Wrapper>
    );
  }
}

export default App;
