import React from 'react';
import './TrustMetrics.css';

const TrustMetrics = () => {
    return (
        <section className="metrics-section">
            <div className="container" style={{ maxWidth: '72rem' }}>
                <div className="metrics-header">
                    <h2 className="metrics-title">
                        숫자로 증명하는<br />
                        <span className="text-primary">확실한 신뢰</span>
                    </h2>
                    <p className="metrics-description">
                        농인 브로커는 데이터로 투명하게 일합니다.
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
                        <p className="metric-label">누적 매칭 인력 수</p>
                        <span className="metric-subtext">검증된 인력 공급</span>
                    </div>

                    <div className="metric-card">
                        <div className="metric-icon-wrapper">
                            <span className="material-icons-round metric-icon">check_circle</span>
                        </div>
                        <h3 className="metric-value text-primary">
                            98.5<span className="metric-unit">%</span>
                        </h3>
                        <p className="metric-label">평균 출근율</p>
                        <span className="metric-subtext">높은 성실도</span>
                    </div>

                    <div className="metric-card">
                        <div className="metric-icon-wrapper">
                            <span className="material-icons-round metric-icon">published_with_changes</span>
                        </div>
                        <h3 className="metric-value">
                            92<span className="metric-unit">%</span>
                        </h3>
                        <p className="metric-label">재이용 농가 비율</p>
                        <span className="metric-subtext">높은 만족도</span>
                    </div>
                </div>

                <div className="metrics-footer">
                    <p className="footer-note">
                        * 2023년 10월 기준 내부 데이터
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustMetrics;
