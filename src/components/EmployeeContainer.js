import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchForm from "./SearchForm"

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
      .then(res => this.setState({filteredEmployees: res.data.results}))
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
    return (
      // JSX fragment to allow return of multiple elements
      <>
      {/* <input
      onChange={() => this.handleInputChange}
      
      /> */}
    
    <SearchForm
    search={this.state.search}
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}
    />      
    <EmployeeTable  filteredEmployees={this.state.filteredEmployees} search={this.state.search}/>
    </>
    )
  }
  }

export default EmployeeContainer