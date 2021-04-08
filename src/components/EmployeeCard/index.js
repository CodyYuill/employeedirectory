import React from 'react';


class EmployeeCard extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <img alt="" src={this.props.image} className="col-lg-2"></img>
                    <p className="col-lg-2">{this.props.name}</p>
                    <p className="col-lg-3">{this.props.email}</p>
                    <p className="col-lg-3">{this.props.phone}</p>
                    <p className="col-lg-2">{this.props.dob}</p>
                </div>
            </li>
        );
    }
}

export default EmployeeCard;