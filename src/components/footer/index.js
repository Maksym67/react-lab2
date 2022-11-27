import React from "react";
import "./index.css"
import Pic1 from "./img/1.gif";
import { Form } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-elem">
                <div className="footer-title">Footer Navigation</div>
                <hr className="footer-divider"/>
                <a href="http://www.google.com" className="footer-nav-link">Home Page</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Our Services</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Meet the Team</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Blog</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Contact Us</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Gallery</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Portfolio</a>
                <hr className="footer-divider-mini"/>
                <a href="http://www.google.com" className="footer-nav-link">Online Shop</a>
            </div>
            <div className="footer-elem">
                <div className="footer-title">Latest Gallery</div>
                <hr className="footer-divider"/>
                <div className="pics-grid">
                    <div class="pic1"><img src={Pic2}/></div>
                    <div class="pic2"><img src={Pic1}/></div>
                    <div class="pic3"><img src={Pic1}/></div>
                    <div class="pic4"><img src={Pic1}/></div>
                    <div class="pic5"><img src={Pic1}/></div>
                    <div class="pic6"><img src={Pic1}/></div>
                    <div class="pic7"><img src={Pic1}/></div>
                    <div class="pic8"><img src={Pic1}/></div>
                    <div class="pic9"><img src={Pic1}/></div>
                </div>
            </div>
            <div className="footer-elem">
                <div className="footer-title">From Twitter</div>
                <hr className="footer-divider"/>
            </div>
            <div className="footer-elem">
                <div className="footer-title">Contact Us</div>
                <hr className="footer-divider"/>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Name *</Form.Label>
                        <Form.Control size="sm"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Email *</Form.Label>
                        <Form.Control size="sm" type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control size="sm" as="textarea" rows={4}/>
                    </Form.Group>
                </Form>
                <p>
                    <input type="submit" class="button small orange"/>
                    <input type="reset" class="button small grey"/>
                </p>
            </div>
        </div>
    );
}

export default Footer;