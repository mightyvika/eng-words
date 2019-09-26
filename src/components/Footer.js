import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MdSettings as Settings, MdSettingsEthernet as Learning, MdFormatListBulleted as Categories, MdShowChart as Statistics } from "react-icons/md";

import './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <nav>
                    <ul className="footer-nav">
                        <li className="footer-icon">
                            <Link to="/"><Learning /></Link>
                        </li>
                        <li className="footer-icon">
                            <Link to="/categories/"><Categories /></Link>
                        </li>
                        <li className="footer-icon">
                            <Link to="/statistics/"><Statistics /></Link>
                        </li>
                        <li className="footer-icon">
                            <Link to="/settings/"><Settings /></Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        )

    }
}

export default Footer;