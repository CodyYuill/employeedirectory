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

    render() {
        console.log(this.state.employees[0]);

        return (
            <div className="container">
                <form className="input-group mb-3" style={styles}>
                    <input type="text" className="form-control"aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </form>
                <EmployeeList employees={this.state.employees}/> 
            </div>
        );
            //LOOK INTO CHILD COMPONENT NOT UPDATING WHEN PARENT DOES
    }
}

export default SearchArea;