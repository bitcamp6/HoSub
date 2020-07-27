import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler,
    MDBNavbarToggler, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,
    MDBDropdownItem, MDBIcon, MDBSideNavLink,MDBSideNavNav, MDBSideNavCat,
    MDBRow, MDBBtn, MDBSideNav } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/images/logo3.png'


const Navbars= () => {

    const [isOpen,setisOpenIsopen] = useState(false)
    const onClickToggleCollapse = e => {

    }
    const onHandleToggle = e => {

    }

    return (
        <div>
            <Router>
                <MDBNavbar color="default-color" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">IZZI</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={onClickToggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Pricing</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="twitter" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="google-plus-g" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <MDBContainer>
                    <MDBRow>
                        <MDBBtn onClick={onHandleToggle}><MDBIcon icon="bars" size="5x" /></MDBBtn>
                    </MDBRow>
                    <MDBSideNav
                        hidden
                        triggerOpening={isOpen}
                        breakWidth={1300}
                        className="deep-purple darken-4"
                    >
                        <li>
                            <ul className="social">
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="google-plus-g" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <MDBSideNavNav>
                            <MDBSideNavCat
                                name="Submit blog"
                                id="submit-blog"
                                icon="chevron-right"
                            >
                                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                                <MDBSideNavLink>Registration form</MDBSideNavLink>
                            </MDBSideNavCat>
                            <MDBSideNavCat
                                name="Instruction"
                                id="instruction"
                                iconRegular
                                icon="hand-pointer"
                                href="#"
                            >
                                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                                <MDBSideNavLink>For authors</MDBSideNavLink>
                            </MDBSideNavCat>
                            <MDBSideNavCat name="About" id="about" icon="eye">
                                <MDBSideNavLink>Instruction</MDBSideNavLink>
                                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                            </MDBSideNavCat>
                            <MDBSideNavCat name="Contact me" id="contact-me" iconRegular icon="envelope">
                                <MDBSideNavLink>FAQ</MDBSideNavLink>
                                <MDBSideNavLink>Write a message</MDBSideNavLink>
                            </MDBSideNavCat>
                        </MDBSideNavNav>
                    </MDBSideNav>
                </MDBContainer>
            </Router>
        </div>
    );
};

export default Navbars;