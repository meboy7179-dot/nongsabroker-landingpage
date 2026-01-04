import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ProblemRecognition.css';

const ProblemRecognition = () => {
    const { t } = useLanguage();

    return (
        <section className="problem-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        {t('problems.badge')}
                    </span>
                    <h2 className="section-title">
                        {t('problems.title').split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}{i < t('problems.title').split('\n').length - 1 && <><br className="break-md" /></>}
                            </React.Fragment>
                        ))}
                        <span className="section-subtitle">
                            {t('problems.subtitle')}
                        </span>
                    </h2>
                </div>

                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="card-top-accent"></div>
                        <div className="icon-wrapper">
                            <span className="material-icons-outlined card-icon">elderly</span>
                        </div>
                        <h3 className="card-title">{t('problems.problem1Title')}</h3>
                        <p className="card-description">
                            {t('problems.problem1Desc').split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}{i < t('problems.problem1Desc').split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="card-top-accent"></div>
                        <div className="icon-wrapper">
                            <span className="material-icons-outlined card-icon">person_off</span>
                        </div>
                        <h3 className="card-title">{t('problems.problem2Title')}</h3>
                        <p className="card-description">
                            {t('problems.problem2Desc').split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}{i < t('problems.problem2Desc').split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="card-top-accent"></div>
                        <div className="icon-wrapper">
                            <span className="material-icons-outlined card-icon">translate</span>
                        </div>
                        <h3 className="card-title">{t('problems.problem3Title')}</h3>
                        <p className="card-description">
                            {t('problems.problem3Desc').split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}{i < t('problems.problem3Desc').split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="section-footer">
                    <a href="#" className="cta-button">
                        <span className="mr-2">{t('problems.ctaButton')}</span>
                        <span className="material-icons-outlined text-sm">arrow_forward</span>
                    </a>
                    <p className="footer-text">
                        {t('problems.footerText')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemRecognition;
