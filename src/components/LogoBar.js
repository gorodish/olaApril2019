import React from 'react';
import Logo from './Logo';
import AdBar from './AdBar';

const LogoBar = () => (
    <div className="container">
        <div className="logo-bar">
            <Logo />
            <AdBar />
        </div>
    </div> 
);

export default LogoBar;