import React from "react";
import "./index.css";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";


function MainNavbar() {
    return (
        <div>
            <Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="">HOMEPAGE</Nav.Link>
                        <NavDropdown title="PAGES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Full Width Content</NavDropdown.Item>
                            <NavDropdown.Item href="">Content + Left Sidebar</NavDropdown.Item>
                            <NavDropdown.Item href="">Content + Right Sidebar</NavDropdown.Item>
                            <NavDropdown.Item href="">Content + Both Sidebars</NavDropdown.Item>
                            <NavDropdown.Item href="">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="">404</NavDropdown.Item>
                            <NavDropdown.Item href="">Testimonials</NavDropdown.Item>
                            <NavDropdown.Item href="">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="">Team Member</NavDropdown.Item>
                            <NavDropdown.Item href="">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="ELEMENTS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Buttons</NavDropdown.Item>
                            <NavDropdown.Item href="">Alert Messages</NavDropdown.Item>
                            <NavDropdown.Item href="">Font Icons</NavDropdown.Item>
                            <NavDropdown.Item href="">Call To Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Columns</NavDropdown.Item>
                            <NavDropdown.Item href="">Columns - No Gutter</NavDropdown.Item>
                            <NavDropdown.Item href="">Lists</NavDropdown.Item>
                            <NavDropdown.Item href="">Accordions</NavDropdown.Item>
                            <NavDropdown.Item href="">Tabs</NavDropdown.Item>
                            <NavDropdown.Item href="">Toggles</NavDropdown.Item>
                            <NavDropdown.Item href="">Pricing Tables</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PORTFOLIO LAYOUTS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Full Width Content</NavDropdown.Item>
                            <NavDropdown.Item href="">Content + Left Sidebar</NavDropdown.Item>
                            <NavDropdown.Item href="">Content + Right Sidebar</NavDropdown.Item>
                            <NavDropdown.Item href="">Content + Both Sidebars</NavDropdown.Item>
                            <NavDropdown.Item href="">Contact</NavDropdown.Item>
                            <NavDropdown.Item href="">404</NavDropdown.Item>
                            <NavDropdown.Item href="">Testimonials</NavDropdown.Item>
                            <NavDropdown.Item href="">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="">Team Member</NavDropdown.Item>
                            <NavDropdown.Item href="">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="GALLERY LAYOUTS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Buttons</NavDropdown.Item>
                            <NavDropdown.Item href="">Alert Messages</NavDropdown.Item>
                            <NavDropdown.Item href="">Font Icons</NavDropdown.Item>
                            <NavDropdown.Item href="">Call To Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Columns</NavDropdown.Item>
                            <NavDropdown.Item href="">Columns - No Gutter</NavDropdown.Item>
                            <NavDropdown.Item href="">Lists</NavDropdown.Item>
                            <NavDropdown.Item href="">Accordions</NavDropdown.Item>
                            <NavDropdown.Item href="">Tabs</NavDropdown.Item>
                            <NavDropdown.Item href="">Toggles</NavDropdown.Item>
                            <NavDropdown.Item href="">Pricing Tables</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="">LINK TEXT</Nav.Link>
                        <Nav.Link href="">A VERY LONG LINK TEXT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;