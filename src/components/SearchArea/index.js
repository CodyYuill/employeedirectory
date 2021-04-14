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
        employees: [],
        originalList: []
    };

    componentDidMount() {
        this.getEmployees();
        //console.log(this.state.employees);
    }

    getEmployees = () => {
        this.search().then(res => {
            res.data.results.sort((a, b)=>(a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : ((a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? -1 : 0));

            //res.data.results.sort(this.sortArr);
            this.setState({...this.state, employees: res.data.results, originalList: res.data.results})
            console.log(this.state.originalList);
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
            this.setState({...this.state, employees: filteredEmployees});
        } else{
            this.setState({...this.state, employees: this.state.originalList})
        }
        //console.log(this.state.employees);
    }

    handleFilterChange = event => {
        var newList = [];
        switch(event.target.id){
            case("name"):
                newList = this.state.originalList.sort((a, b)=>(a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : ((a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? -1 : 0));
                this.setState({...this.state, employees: newList})
                break;
            case("email"):
                newList = this.state.originalList.sort((a, b)=>(a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : ((a.email.toLowerCase() < b.email.toLowerCase()) ? -1 : 0));
                this.setState({...this.state, employees: newList})
                break;
            case("phone"):
                newList = this.state.originalList.sort((a, b)=>(a.phone.toLowerCase() > b.phone.toLowerCase()) ? 1 : ((a.phone.toLowerCase() < b.phone.toLowerCase()) ? -1 : 0));
                this.setState({...this.state, employees: newList})
                break;
            case("dob"):
                newList = this.state.originalList.sort((a, b)=>(a.dob.date.toLowerCase() > b.dob.date.toLowerCase()) ? 1 : ((a.dob.date.toLowerCase() < b.dob.date.toLowerCase()) ? -1 : 0));
                this.setState({...this.state, employees: newList})
                break;
            default:
                console.log("no filter value");
        }
    }

    render() {
        console.log(this.state.employees);

        return (
            <div className="container">
                <form className="input-group mb-3" style={styles}>
                    <input type="text" className="form-control"aria-describedby="button-addon2" placeholder="Search by name, email, etc."onChange={this.handleInputChange}/>
                </form>
                <EmployeeList employees={this.state.employees} filterChange={this.handleFilterChange}/> 
            </div>
        );
    }
}

export default SearchArea;