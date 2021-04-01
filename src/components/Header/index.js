import React from 'react';

let styles = {
    backgroundColor: "DodgerBlue",
    display: "flex",
    justifyContent: "center",
    padding: "25px",
    marginBottom: "20px",
    color: "white"
}

class Header extends React.Component {
    render() {
        return (
            <header style={styles}>
                <h1>Employee Directory</h1>
            </header>
        );
    }
}

export default Header;