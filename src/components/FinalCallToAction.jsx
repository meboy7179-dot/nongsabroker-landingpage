import React from 'react';
import './FinalCallToAction.css';

const FinalCallToAction = () => {
    return (
        <section className="cta-section">
            <div className="container cta-container">
                <div className="cta-header">
                    <h2 className="cta-title">
                        농촌 일자리의 새로운 기준,<br className="break-md" />
                        <span className="text-primary">농인중개사</span>와 함께하세요.
                    </h2>
                    <p className="cta-description">
                        검증된 농장과 성실한 근로자를 연결하는 가장 빠르고 안전한 방법.<br className="break-sm" />
                        지금 바로 시작하여 효율적인 농업 인력 관리를 경험해보세요.
                    </p>
                </div>

                <div className="cta-card">
                    <div className="cta-blob cta-blob-1"></div>
                    <div className="cta-blob cta-blob-2"></div>

                    <div className="cta-card-content">
                        <div className="cta-icon-wrapper">
                            <span className="material-icons-round cta-main-icon">agriculture</span>
                        </div>
                        <h3 className="cta-card-title">신뢰할 수 있는 파트너</h3>
                        <p className="cta-card-text">
                            오늘의 일자리 확인부터 급여 정산까지,<br />
                            모든 과정을 투명하고 간편하게 관리합니다.
                        </p>

                        <div className="cta-buttons">
                            <button className="cta-btn-primary group">
                                <span>농인중개사 시작하기</span>
                                <span className="material-icons-round cta-btn-icon group-hover-translate">arrow_forward</span>
                            </button>
                            <button className="cta-btn-secondary">
                                <span>더 알아보기</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cta-features">
                    <div className="cta-feature-item">
                        <span className="material-icons-round text-primary">check_circle</span>
                        <span>검증된 농장주</span>
                    </div>
                    <div className="cta-feature-item">
                        <span className="material-icons-round text-primary">check_circle</span>
                        <span>안전한 급여 지급</span>
                    </div>
                    <div className="cta-feature-item">
                        <span className="material-icons-round text-primary">check_circle</span>
                        <span>실시간 매칭 시스템</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCallToAction;
