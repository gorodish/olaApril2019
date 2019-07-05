import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => (
  <header>
    <div className="toplinks">
      <div><NavLink to="/create" activeClassName="is-active" exact={true}>Create  </NavLink></div>
      <div><NavLink to="/view" activeClassName="is-active" exact={true}>--  View</NavLink></div>
      <div className="toplinks-login">
        <NavLink to="/login" activeClassName="is-active" exact={true}>
        <div className="icon-berry-small">
        </div>
        </NavLink>
        <div className="login">Login</div>
      </div>
      <div className="toplinks-register">
        <div className="icon-berry-small"></div>
        <div className="register">Register</div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
};

export default connect(mapStateToProps)(Header);