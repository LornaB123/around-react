import React from 'react';

function Header(props) {
    return(
        <header>
            <img src={props.logo} alt="Around the US" className="logo" />
        </header>
    );
}

export default Header;