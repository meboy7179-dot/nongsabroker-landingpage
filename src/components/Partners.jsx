import React from 'react';
import './Partners.css';

const Partners = () => {
    // Placeholder partners since images are missing
    const partners = [
        "Global HR Tech",
        "Woori Bank",
        "Samsung C&T",
        "Hyundai E&C",
        "Korea Immigration Service",
        "Ministry of Labor"
    ];

    return (
        <section className="partners-section">
            <div className="container">
                <p className="partners-label">Trusted by industry leaders</p>
                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-item">
                            {/* In real implementation, this would be an img tag */}
                            <span className="partner-name">{partner}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
