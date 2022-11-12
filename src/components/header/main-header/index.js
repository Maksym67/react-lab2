import React from "react";
import "./index.css";
import phoneico from "./img/phone.svg";
import mailico from "./img/mail.svg";

function Header() {
    return (
        <div className="header-element">
            <div className="logo">
                <div className="main-logo-text">RS-1200 Prototype 35</div>
                <div className="sub-logo-text">Free Responsive Template</div>
            </div>
            <div className="contacts-part">
                <img className="contact-icon" src={mailico}/>
                <a href="http://www.google.com">info@domain.com</a>
                <hr/>
                <img className="contact-icon" src={phoneico}/>
                <span style={{ color: "#C0BAB6" }}>+xx xxx xxxxxxxxxx</span>
            </div>
        </div>
    );
}

export default Header;