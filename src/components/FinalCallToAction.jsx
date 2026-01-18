import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './FinalCallToAction.css';

const FinalCallToAction = ({ userType }) => {
    const { t } = useLanguage();

    return (
        <section className="cta-section">
            <div className="container cta-container">
                <div className="cta-header">
                    <h2 className="cta-title">
                        {t(`${userType}.finalCta.title`).split('\n').map((line, i, arr) => {
                            // Check if this line contains the titleHighlight text
                            const highlightText = t(`${userType}.finalCta.titleHighlight`);
                            if (line.includes(highlightText)) {
                                const parts = line.split(highlightText);
                                return (
                                    <React.Fragment key={i}>
                                        {parts[0]}
                                        <span className="text-primary">{highlightText}</span>
                                        {parts[1]}
                                        {i < arr.length - 1 && <><br className="break-md" /></>}
                                    </React.Fragment>
                                );
                            }
                            return (
                                <React.Fragment key={i}>
                                    {line}{i < arr.length - 1 && <><br className="break-md" /></>}
                                </React.Fragment>
                            );
                        })}
                    </h2>
                    <p className="cta-description">
                        {t(`${userType}.finalCta.description`).split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}{i < t(`${userType}.finalCta.description`).split('\n').length - 1 && <><br className="break-sm" /></>}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className="cta-card">
                    <div className="cta-blob cta-blob-1"></div>
                    <div className="cta-blob cta-blob-2"></div>

                    <div className="cta-card-content">
                        <div className="cta-icon-wrapper">
                            <span className="material-icons-round cta-main-icon">agriculture</span>
                        </div>
                        <h3 className="cta-card-title">{t(`${userType}.finalCta.cardTitle`)}</h3>
                        <p className="cta-card-text">
                            {t(`${userType}.finalCta.cardDescription`).split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}{i < t(`${userType}.finalCta.cardDescription`).split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>

                        <div className="cta-buttons">
                            <button className="cta-btn-primary group">
                                <span>{t(`${userType}.finalCta.ctaPrimary`)}</span>
                                <span className="material-icons-round cta-btn-icon group-hover-translate">arrow_forward</span>
                            </button>
                            <button className="cta-btn-secondary">
                                <span>{t(`${userType}.finalCta.ctaSecondary`)}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cta-features">
                    <div className="cta-feature-item">
                        <span className="material-icons-round text-primary">check_circle</span>
                        <span>{t(`${userType}.finalCta.feature1`)}</span>
                    </div>
                    <div className="cta-feature-item">
                        <span className="material-icons-round text-primary">check_circle</span>
                        <span>{t(`${userType}.finalCta.feature2`)}</span>
                    </div>
                    <div className="cta-feature-item">
                        <span className="material-icons-round text-primary">check_circle</span>
                        <span>{t(`${userType}.finalCta.feature3`)}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCallToAction;
