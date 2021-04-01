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
                <EmployeeCard image="image" name="First Last" email="email@email.com" phone="(111)111-1111" dob="11/11/1111"/>
            </ul>
        );
    }
}

export default EmployeeList;