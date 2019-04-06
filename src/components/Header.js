import React from 'react';

const Header = () => (
    <div className="container">
        <header>
            <ul id="toplinks">
                <li>
                    <img className="cherrySm" src="/assets/dent-button-cherry-apple-active.png"alt="cherry" />
                </li>
                <li id="toplinksLog">Login</li>
                <li>
                    <img className="cherrySm" src="/assets/dent-button-cherry-apple-active.png"alt="cherry" />
                </li>
                <li id="toplinksReg">Register</li>
            </ul>
        </header>
    </div>
);

export default Header;