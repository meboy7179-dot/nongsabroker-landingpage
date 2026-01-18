import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ userType, setUserType }) => {
    const { language, changeLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('navbar.service'), href: '#service' },
        { name: t('navbar.findJob'), href: '#find-job' },
        { name: t('navbar.findTalent'), href: '#find-talent' },
        { name: t('navbar.support'), href: '#support' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <img src="/images/농인중개사_로고.png" alt="Nongin Broker" />
                </div>

                <div className="navbar-desktop">
                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="navbar-user-toggle">
                        <div className="toggle-bg">
                            <button
                                className={`toggle-item ${userType === 'employer' ? 'active' : ''}`}
                                onClick={() => setUserType('employer')}
                            >
                                {t('common.employer')}
                            </button>
                            <button
                                className={`toggle-item ${userType === 'worker' ? 'active' : ''}`}
                                onClick={() => setUserType('worker')}
                            >
                                {t('common.worker')}
                            </button>
                        </div>
                    </div>

                    <div className="navbar-actions">
                        <button className="lang-btn" onClick={() => {/* Toggle lang menu logic or simple cycle for now */ }}>
                            <Globe size={20} />
                            <span>{language.toUpperCase()}</span>
                        </button>
                        <button className="btn-login">{t('navbar.login')}</button>
                    </div>
                </div>

                <div className="navbar-mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {isMobileMenuOpen && (
                    <div className="navbar-mobile-menu">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <div className="mobile-actions">
                            <button className="btn-login full-width">{t('navbar.login')}</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
