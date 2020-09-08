import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Cources from "../components/Cources/Cources";
import Footer from "../components/Footer/Footer";

class CourcesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Cources"/>
                <PageTop pagetitle="Cources"/>
                <Cources/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourcesPage;