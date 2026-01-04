import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SolutionSteps.css';

const SolutionSteps = () => {
    const { t } = useLanguage();

    return (
        <section className="steps-section">
            <div className="container">
                <div className="steps-header">
                    <h2 className="steps-title">
                        {t('steps.title')}
                    </h2>
                    <p className="steps-description">
                        {t('steps.description').split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}{i < t('steps.description').split('\n').length - 1 && <><br className="break-md" /></>}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className="steps-grid">
                    <div className="step-card group">
                        <div className="step-card-inner">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">app_registration</span>
                            </div>
                            <div className="step-badge">STEP 1</div>
                            <h3 className="step-title">{t('steps.step1Title')}</h3>
                            <p className="step-text">
                                {t('steps.step1Desc')}
                            </p>
                        </div>
                    </div>

                    <div className="step-card group">
                        <div className="step-divider"></div>
                        <div className="step-card-inner relative z-10">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">travel_explore</span>
                            </div>
                            <div className="step-badge">STEP 2</div>
                            <h3 className="step-title">{t('steps.step2Title')}</h3>
                            <p className="step-text">
                                {t('steps.step2Desc')}
                            </p>
                        </div>
                    </div>

                    <div className="step-card group">
                        <div className="step-divider"></div>
                        <div className="step-card-inner relative z-10">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">payments</span>
                            </div>
                            <div className="step-badge">STEP 3</div>
                            <h3 className="step-title">{t('steps.step3Title')}</h3>
                            <p className="step-text">
                                {t('steps.step3Desc')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="steps-footer">
                    <button className="steps-cta">
                        {t('steps.ctaButton')}
                        <span className="material-icons-round ml-2 -mr-1">arrow_forward</span>
                    </button>
                    <p className="steps-footer-text">
                        {t('steps.footerText')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSteps;
