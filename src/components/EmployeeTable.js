import React from "react";
// import "./style.css";

function EmployeeTable(props) {

    return(
        <table className="table table-sortable text-center">
            <thead>
                <tr>
                    <th></th>
                    <th scop="col" data-field="name" data-sortable="true">
                        <span onClick={() => props.sortBy("name", "last", "first")}>
                            Name
                            </span>
                            </th>
                            <th>
                            Phone
                            </th>
                            <th>
                            Email
                            </th>
                            </tr> 
            </thead>
            <tbody>
                {props.filteredEmployees && props.filteredEmployees.map(employee => {
                    if(employee.first.toLowerCase().includes(props.search.toLowerCase())) {
                        return(
                            <tr>
                                <td>
                                    <img src={employee.picture.thumbnail} alt="employee"/>
                                </td>
                                <td className="align-middle">
                                    {employee.name.first} {employee.name.last}
                                </td>
                                <td className="align-middle">
                                    {employee.phone}
                                </td>
                                <td className="align-middle">
                                    {employee.email}
                                </td>
                            </tr>
                        )}
                    })
                }
            </tbody>
        </table>
    )}


export default EmployeeTable