import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
                <div className={"container"}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none"
                             className="css-1170n61">
                            <rect x="1" y="5" width="14" height="1.5" rx="1" fill="#737dff"></rect>
                            <rect x="1" y="9" width="14" height="1.5" rx="1" fill="#737dff"></rect>
                        </svg>
                    </button>
                    <Link onClick={this.topFunction} to="/" className="navbar-brand">
                        <img src={"/img/dpacks-nav.png"} alt={"dpacks logo"} className={"nav-logo nav-logo-filter"}/>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item con-mid">
                                <a href={"#technology"} className="nav-link">
                                    Technology
                                </a>
                            </li>
                            <li className="nav-item con-mid">
                                <a href={"https://bysatha.com/"} target={"_blank"} rel="noopener noreferrer"
                                   className="nav-link">
                                    bySatha
                                </a>
                            </li>
                            <li className="nav-item con-mid">
                                <a href={"https://gitcoin.co/tip?username=sathninduk"} target={"_blank"} rel="noopener noreferrer"
                                   className="nav-link">
                                    Crypto Donate
                                </a>
                            </li>
                            <li className="nav-item con-mid">
                                <a href={"https://ko-fi.com/sathnindu"} target={"_blank"} rel="noopener noreferrer"
                                   className="nav-link">
                                    ko-fi Donate
                                </a>
                            </li>
                        </ul>

                        <div className="nav-right navbar-nav ml-auto">
                            <li className="nav-item con-mid">
                                <a href={"https://dpacks-nightly.vercel.app/"} target={"_blank"} rel="noopener noreferrer" className="nav-link nav-sites-btn">
                                    <span className="sites-nav-link">
                                        <span style={{textAlign: "left"}}>Nightly 1.0.0 - Beta</span>
                                    </span>
                                </a>
                            </li>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}
