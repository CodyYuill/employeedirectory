import React from 'react';
import EmployeeCard from '../EmployeeCard';

let styles = {
    textAlign: "center"
}

class EmployeeList extends React.Component {
    render() {
        return (
            <ul className="list-group" style={styles}>
                <li className="list-group-item">
                    <div className="row">
                        <b className="col-lg-2">Image</b>
                        <b className="col-lg-2">Name</b>
                        <b className="col-lg-3">Email</b>
                        <b className="col-lg-3">Phone</b>
                        <b className="col-lg-2">DOB</b>
                    </div>
                </li>
                <li className="list-group-item"><EmployeeCard /></li>
            </ul>
        );
    }
}

export default EmployeeList;