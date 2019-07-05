import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Landing from '../components/Landing';
import Login from '../components/Login';
import LogoBar from '../components/LogoBar';
import NotFoundPage from '../components/NotFoundPage';
import Register from '../components/Register';
import CreateProfilePage from '../components/CreateProfilePage';
import EditProfilePage from '../components/EditProfilePage';
import ViewProfilePage from '../components/ViewProfilePage';
import AboutPage from '../components/AboutPage';
import PoliciesPage from '../components/PoliciesPage';
import HelpPage from '../components/HelpPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <LogoBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/create" component={CreateProfilePage} />
              <Route path="/edit/:id" component={EditProfilePage} />
              <Route path="/view" component={ViewProfilePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/policies" component={PoliciesPage} />
              <Route path="/help" component={HelpPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;