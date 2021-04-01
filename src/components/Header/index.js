import React from 'react';

let styles = {
    backgroundColor: "DodgerBlue",
    display: "flex",
    justify: "centered"
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