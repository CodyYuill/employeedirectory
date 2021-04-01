import React from 'react';
import EmployeeList from '../EmployeeList';


let styles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
}

class SearchArea extends React.Component {
    render() {
        return (
            <div className="container">
                <form className="input-group mb-3" style={styles}>
                    <input type="text" className="form-control"aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </form>
                <EmployeeList />
            </div>
        );
    }
}

export default SearchArea;