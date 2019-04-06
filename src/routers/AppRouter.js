import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Landing from '../components/Landing';
import LogoBar from '../components/LogoBar';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <LogoBar />
            <Switch>
                <Route path="/" component={Landing} exact={true} />
                <Route path="/home" component={Home} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;