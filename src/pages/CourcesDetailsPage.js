import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import CourcesDetails from "../components/CourcesDetails/CourcesDetails";

class CourcesDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <CourcesDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourcesDetailsPage;