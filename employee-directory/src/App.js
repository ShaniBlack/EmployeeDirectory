// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import EmployeeContainer from "./components/EmployeeContainer";
import EmployeeTable from "./components/EmployeeTable";

 function App() {
  return (
    <>
    <Header />; 
    <EmployeeTable />;
    <EmployeeContainer />;
    </>
  )
  }

export default App;
