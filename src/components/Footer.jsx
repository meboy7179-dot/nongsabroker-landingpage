import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/images/농인중개사_로고.png" alt="Nongin Broker" className="footer-logo" />
                        <p className="footer-desc">
                            Connecting global talent with Korean opportunities.
                            Safe, legal, and reliable.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-section">
                            <h4>Service</h4>
                            <a href="#">For Workers</a>
                            <a href="#">For Employers</a>
                            <a href="#">Pricing</a>
                        </div>

                        <div className="footer-section">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">News</a>
                        </div>

                        <div className="footer-section">
                            <h4>Legacy</h4>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Nongin Broker. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
