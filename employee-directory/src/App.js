import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import EmployeeContainer from "./components/EmployeeContainer";
import API from "./utils/API"


class App extends Component {
  state = {
    employees: [],
    search: "",
    order: "descend"
  }

  componentDidMount() {
    API.getEmployees()
    .then(res => this.setState({...this.state, employees: res.data.results}))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  // Updating the input's state
  this.setState({
    search: event.target.value
  });
};


render () {
  return <EmployeeContainer employees={this.state.employees} search={this.state.search}/>;
  

}
}

export default App;
