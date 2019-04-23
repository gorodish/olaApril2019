import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Landing from '../components/Landing';
import LogoBar from '../components/LogoBar';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <LogoBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Home} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;