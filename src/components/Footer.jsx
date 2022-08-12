import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-container">
                <div className="item1">
             
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Edgar Lagos. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/champaincode"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/edgar-lagos/"
                    target="_blank"
                    className="item4"
                >
                   <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=542914400753&text=Hola%20Edgar%20Lagos.%20Me%20interesa%20saber%20m%C3%A1s%20de%20ti%20"
                    target="_blank"
                    className="item5"
                ><FontAwesomeIcon icon={faWhatsapp} />
                   
                </a>

          
            </div>
        </footer>
    );
};

export default Footer;