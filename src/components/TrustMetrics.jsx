import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './TrustMetrics.css';

const TrustMetrics = () => {
    const { t } = useLanguage();

    return (
        <section className="metrics-section">
            <div className="container" style={{ maxWidth: '72rem' }}>
                <div className="metrics-header">
                    <h2 className="metrics-title">
                        {t('metrics.title')}<br />
                        <span className="text-primary">{t('metrics.titleHighlight')}</span>
                    </h2>
                    <p className="metrics-description">
                        {t('metrics.description')}
                    </p>
                </div>

                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-icon-wrapper">
                            <span className="material-icons-round metric-icon">groups</span>
                        </div>
                        <h3 className="metric-value">
                            15,000<span className="metric-unit">+</span>
                        </h3>
                        <p className="metric-label">{t('metrics.metric1Label')}</p>
                        <span className="metric-subtext">{t('metrics.metric1Subtext')}</span>
                    </div>

                    <div className="metric-card">
                        <div className="metric-icon-wrapper">
                            <span className="material-icons-round metric-icon">check_circle</span>
                        </div>
                        <h3 className="metric-value text-primary">
                            98.5<span className="metric-unit">%</span>
                        </h3>
                        <p className="metric-label">{t('metrics.metric2Label')}</p>
                        <span className="metric-subtext">{t('metrics.metric2Subtext')}</span>
                    </div>

                    <div className="metric-card">
                        <div className="metric-icon-wrapper">
                            <span className="material-icons-round metric-icon">published_with_changes</span>
                        </div>
                        <h3 className="metric-value">
                            92<span className="metric-unit">%</span>
                        </h3>
                        <p className="metric-label">{t('metrics.metric3Label')}</p>
                        <span className="metric-subtext">{t('metrics.metric3Subtext')}</span>
                    </div>
                </div>

                <div className="metrics-footer">
                    <p className="footer-note">
                        {t('metrics.footerNote')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustMetrics;
