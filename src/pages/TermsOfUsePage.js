import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsOfUse from "../components/TermsOfUse/TermsOfUse";

class TermsOfUsePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms Of Use"/>
                <PageTop pagetitle=" Terms Of Use"/>
                <TermsOfUse/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsOfUsePage;