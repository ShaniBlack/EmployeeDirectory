import React from "react";

const EmployeeContainer = function (props) {

    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => {
                    if(employee.name.first.toLowerCase().includes(props.search)){
                        return(
                            <tr>
                                <td>
                                    <img src={employee.picture.thumbnail} alt="employee"/>
                                </td>
                                <td>
                                    {employee.name.first} {employee.name.last}
                                </td>
                                <td>
                                    {employee.phone}
                                </td>
                                <td>
                                    {employee.email}
                                </td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
    )
}

export default EmployeeContainer;