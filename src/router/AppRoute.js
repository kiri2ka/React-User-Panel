import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CourcesPage from "../pages/CourcesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import RefundPage from "../pages/RefundPage";
import TermsOfUsePage from "../pages/TermsOfUsePage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourcesDetailsPage from "../pages/CourcesDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/cources" component={CourcesPage} />
                    <Route exact path="/protfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/services" component={ServicesPage} />
                    <Route exact path="/Refund" component={RefundPage} />
                    <Route exact path="/TermsOfUse" component={TermsOfUsePage} />
                    <Route exact path="/ProjectDetails" component={ProjectDetailsPage} />
                    <Route exact path="/CourcesDetails" component={CourcesDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;