import React, {Component, Fragment} from 'react';
import {Navbar,Nav,NavDropdown,} from "react-bootstrap";
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.main.css'
import whiteLogo from '../../asset/img/navlogo.svg'
import blueLogo from '../../asset/img/navlogoScroll.svg'
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if (window.scrollY>100) {
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:"navBackgroundScroll", navBarItem:"navItemScroll"})
        }
        else if(window.scrollY<100) {
            this.setState({navVariant:'dark',navBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack:"navBackground",navBarItem:"navItem"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.navVariant} className={this.state.navBarBack} fixed={"top"} collapseOnSelect expand="lg"  >
                    <Navbar.Brand > <NavLink className={this.state.navBarTitle} to="/" > <img src={this.state.navBarLogo}/> Komol Chandra</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/cources">COURCES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/protfolio">PROTFOLIO</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;