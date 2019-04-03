import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>olaApril2019</h1>
        <ul>
            <li>
                <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </li>
        </ul>
    </header>
);

export default Header;