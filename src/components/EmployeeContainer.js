import React, { Component } from "react";
import API from "../utils/API";


class EmployeeContainer extends Component {
    state = {
      employees: [],
      search: "",
      filteredEmployees: [],
      sortOrder: this.initalSortOrder
    };

    get initialSortOrder() {
        return {
            name: "",
            phone: "",
            email: ""
        };
    };
  
    componentDidMount() {
      API.getEmployees()
      .then(res => this.setState({employees: res.data.results, filteredEmployees: res.data.results}))
      .catch(err => console.log(err));
  };


  
  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
      event.preventDefault();
  }
  
  
  render () {
    return <EmployeeContainer employees={this.state.employees} search={this.state.search}/>;
  }
  }

export default EmployeeContainer