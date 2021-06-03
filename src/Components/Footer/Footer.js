import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <ui className="list-unstyled">
                            <li>Scholar for Bussiness</li>
                            <li>Teach on Scholar</li>
                            <li>Get the app</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ui>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <ui className="list-unstyled">
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Help and Support</li>
                            <li>Affiliate</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <ui className="list-unstyled">
                            <li>Terms</li>
                            <li>Privacy policy</li>
                            <li>Sitemap</li>
                            <li>Featured cources</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <h2 className="col-sm">Logo</h2>
                    <p className="col-sm">&copy;{new Date().getFullYear()} Scholar, Inc.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;