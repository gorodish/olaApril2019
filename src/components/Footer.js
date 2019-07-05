import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
        <footer>
                <ul>
                        <li><NavLink to="/components/about" activeClassName="is-active" exact={true}>About</NavLink></li>
                        <li><NavLink to="/policies" activeClassName="is-active" exact={true}>Policies</NavLink></li>
                        <li><NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink></li>
                </ul>
        </footer>     
);

export default Footer;