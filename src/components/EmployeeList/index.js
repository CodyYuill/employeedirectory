import React from 'react';
import EmployeeCard from '../EmployeeCard'



class EmployeeList extends React.Component {
    render() {
        return (
            <ul> this is an employee list
                <li><EmployeeCard /></li>
            </ul>
        );
    }
}

export default EmployeeList;