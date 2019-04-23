import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <ul id="toplinks">
            <li>
              <NavLink to="/home" activeClassName="is-active" exact={true}>
                  <img className="cherrySm" src="/assets/dent-button-cherry-apple-active.png"alt="cherry" />
              </NavLink>
            </li>
            <li id="toplinksLog">Login</li>
            <li>
                <img className="cherrySm" src="/assets/dent-button-cherry-apple-active.png"alt="cherry" />
            </li>
            <li id="toplinksReg">Register</li>
        </ul>
    </header>
);

export default Header;