import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="toplinks">
      <div className="toplinks-login">
        <NavLink to="/home" activeClassName="is-active" exact={true}>
        <div className="icon-berry-small">
        </div></NavLink>
        <div className="login">Login</div>
      </div>
      <div className="toplinks-register">
        <div className="icon-berry-small"></div>
        <div className="register">Register</div>
      </div>
    </div>
  </header>
);

export default Header;