import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundPolice from "../components/RefundPolice/RefundPolice";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Police"/>
                <PageTop pagetitle=" Refund Police"/>
                <RefundPolice/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;