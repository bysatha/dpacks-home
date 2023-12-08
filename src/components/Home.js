import React, {Component} from "react";
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>Dpacks | First ever database and language exempt post-apply CMS</title>
                </Helmet>
                <div className={"hero"}>
                    <div className="row pc-hero-header">
                        <div className={"col-4"}>
                            <img src={"/img/dpacks-logo.png"} className={"hero-logo"} alt={"dpacks logo"}/>
                        </div>
                        <div className={"col-8"}>
                            <h1 className={"hero-title"}>
                                the first ever <span style={{color: "#737dff"}}>database and language</span> exempt
                                post-apply CMS
                            </h1>
                        </div>
                    </div>

                    <div className="row mob-hero-header">
                        <div className={"col-lg"}>
                            <img src={"/img/dpacks-logo.png"} className={"hero-logo"} alt={"dpacks logo"}/>
                        </div>
                        <div className={"col-lg"}>
                            <h1 className={"hero-title"}>
                                the first ever <span style={{color: "#737dff"}}>database and language</span> exempt
                                post-apply CMS
                            </h1>
                        </div>
                    </div>

                    <div className={"row edition-list"}>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS</p>
                            <p className={"edition-desc"}>Open-Source Edition</p>
                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                Coming Soon
                            </p>
                        </div>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS PRO</p>
                            <p className={"edition-desc"}>Centralized Premium Edition</p>
                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                Coming Soon
                            </p>
                        </div>
                        <a href={"https://dpacks-nightly.vercel.app/"}
                           className={"col con-mid dpacks-edition-block"}>
                            <p className={"edition-name"}>DPACKS NIGHTLY</p>
                            <p className={"edition-desc"}>Web 3.0 Edition</p>
                            <p className={"edition-availability-badge edition-availability-badge-green"}>
                                V 1.0.0 BETA
                            </p>
                        </a>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS CORE</p>
                            <p className={"edition-desc"}>The core technology</p>
                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                Coming Soon
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer 1 */}
                {/* Section 7 */}
                <div className={"footer"} id={"technology"}>
                    <div className={"container additional-page-sec-1"}>
                        <div className={"footer-about-body"}>

                            <h3><span style={{color: "#737dff"}}>Dpacks</span></h3>
                            <p>
                                There are a bunch of CMS in the world. But they don't only manage your content. The
                                result is your website would be CMS dependent. Finally, You have created a website on
                                its own, not your own. Dpacks gives your power back to say no more CMS depended on
                                websites. You create your website, your own. Dpacks will take the rest of the content
                                management.
                            </p>
                            <p>
                                Dpacks is the world's first language independent, flexible, and effortless headless
                                public CMS. Also, the only CMS that you can easily apply after the complete web
                                development.
                            </p>
                            <h5><span style={{color: "#737dff"}}>The  Technology</span></h5>
                            <p>
                                Dpacks is a technology that allows you to manage web variable DATA lightning-fast. And
                                Nightly is its web 3.0 edition. Dpacks Nightly stores all your data packets on the
                                decentralized internet. That allows you to make all your all web content decentralized.
                            </p>
                            <p>
                                Dpacks scans and identifies every variable data in a webpage and package them into data
                                packets. That allows you to manage them anytime via the dpacks admin console.
                            </p>
                        </div>
                    </div>
                    <div className={"footer-section"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <img src={"/img/footer-logo.png"} className={"footer-logo-1"}
                                         alt={"Dpacks logo"}/>
                                    <span className={"by-satha-vr"}>|</span><span className={"by-satha"}>BY <a
                                    href={"https://bysatha.com/"} target={"_blank"}
                                    rel="noopener noreferrer">SATHA</a></span>
                                </div>
                                <div className={"col"}>
                                    <a className={"footer-page-link"} href={"/privacy"}>Privacy Policy</a>
                                    <span className={"privacy-divider"}>•</span>
                                    <a className={"footer-page-link"} href={"/terms"}>Terms & Conditions</a>
                                </div>
                                <div className={"col"}>
                                    <p className={"copyright-text"}>©{new Date().getFullYear()} DPACKS
                                        TECHNOLOGY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer 2 */}

            </div>
        );
    }
}
