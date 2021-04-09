import React from 'react';
import EmployeeList from '../EmployeeList';
import axios from "axios";



let styles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
}


class SearchArea extends React.Component {

    state = {
        employees: []
    };

    componentDidMount() {
        this.getEmployees();
        //console.log(this.state.employees);
    }

    getEmployees = () => {
        this.search().then(res => {
            this.setState({employees: res.data.results})
            //console.log(this.state.employees);
        }).catch(err => console.log(err));
    };

    search = async () => {
        return await axios.get("https://randomuser.me/api/?results=200&nat=us");
    }

    handleInputChange = event => {
        let value = event.target.value.toLowerCase();
        console.log(value);
        if(value.length > 0){
            let filteredEmployees = this.state.employees.filter(employee => {
    
                if(employee.name.first.toLowerCase().includes(value)
                    || employee.name.last.toLowerCase().includes(value)
                    || employee.email.toLowerCase().includes(value)
                    || employee.phone.toLowerCase().includes(value)
                    || employee.dob.date.toLowerCase().includes(value)){
                        return employee;
                } else {
                    return false;
                }
            });
            this.setState({employees: filteredEmployees});
        } else{
            this.getEmployees();
        }
        console.log(this.state.employees);
    }

    render() {
        console.log(this.state.employees);

        return (
            <div className="container">
                <form className="input-group mb-3" style={styles}>
                    <input type="text" className="form-control"aria-describedby="button-addon2" placeholder="Search by name, email, etc.trsac"onChange={this.handleInputChange}/>
                    {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button> */}
                </form>
                <EmployeeList employees={this.state.employees}/> 
            </div>
        );
    }
}

export default SearchArea;