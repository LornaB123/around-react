import React from 'react';
import logoPic from '../images/logo.svg';

function Header() {
    return(
        <header className = 'header'>
            <img src={logoPic} alt='Around the US' className='logo' />
        </header>
    );
}

export default Header;