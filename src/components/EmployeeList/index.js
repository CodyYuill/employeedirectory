import React from 'react';
import EmployeeCard from '../EmployeeCard';


let styles = {
    textAlign: "center"
} 


class EmployeeList extends React.Component {

    render() {
        if(this.props.employees[0]){
            return (
                <ul className="list-group" style={styles}>
                    <li className="list-group-item">
                        <div className="row">
                            <b className="col-lg-2">Image</b>
                            <b className="col-lg-2" onClick={this.props.filterChange} id="name">Name</b>
                            <b className="col-lg-3" onClick={this.props.filterChange} id="email">Email</b>
                            <b className="col-lg-3" onClick={this.props.filterChange} id="phone">Phone</b>
                            <b className="col-lg-2" onClick={this.props.filterChange} id="dob">DOB</b>
                        </div>
                    </li>
                    {/* <EmployeeCard image={this.props.employees[0].picture.large} name={this.props.employees[0].name.first + " " +this.props.employees[0].name.last} email={this.props.employees[0].email} phone={this.props.employees[0].phone} dob={this.props.employees[0].dob.date} /> */}
                    {this.props.employees.map((employee, index) => (
                        <EmployeeCard 
                            image={employee.picture.large}
                            name={employee.name.first + " " + employee.name.last}
                            email={employee.email}
                            phone={employee.phone}
                            dob={employee.dob.date}
                            key={index}
                        />
                    ))}
                </ul>
            );
        }else{
            return <>Employee not found</>
        }
    }
}

export default EmployeeList;