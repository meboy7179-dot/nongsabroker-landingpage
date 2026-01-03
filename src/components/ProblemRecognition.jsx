import React from 'react';
import './ProblemRecognition.css';

const ProblemRecognition = () => {
    return (
        <section className="problem-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        Why Nongin Broker?
                    </span>
                    <h2 className="section-title">
                        농촌 인력난,<br className="break-md" /> 이제 걱정하지 마세요.
                        <span className="section-subtitle">
                            농업 인력난의 핵심 문제를 해결합니다.
                        </span>
                    </h2>
                </div>

                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="card-top-accent"></div>
                        <div className="icon-wrapper">
                            <span className="material-icons-outlined card-icon">elderly</span>
                        </div>
                        <h3 className="card-title">고령화로 줄어드는 인력</h3>
                        <p className="card-description">
                            일할 사람은 줄어들고, 평균 연령은 높아지는 현실.<br />
                            고령화로 인한 농촌 인력 감소 문제.
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="card-top-accent"></div>
                        <div className="icon-wrapper">
                            <span className="material-icons-outlined card-icon">person_off</span>
                        </div>
                        <h3 className="card-title">갑작스러운 노쇼</h3>
                        <p className="card-description">
                            바쁜 수확철, 예고 없이 연락이 두절되는 인부들.<br />
                            예고 없는 노쇼와 작업 중단.
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="card-top-accent"></div>
                        <div className="icon-wrapper">
                            <span className="material-icons-outlined card-icon">translate</span>
                        </div>
                        <h3 className="card-title">의사소통의 어려움</h3>
                        <p className="card-description">
                            외국인 근로자와의 언어 장벽으로 인한 작업 실수.<br />
                            의사소통 장벽으로 인한 작업 오류.
                        </p>
                    </div>
                </div>

                <div className="section-footer">
                    <a href="#" className="cta-button">
                        <span className="mr-2">해결책 보기</span>
                        <span className="material-icons-outlined text-sm">arrow_forward</span>
                    </a>
                    <p className="footer-text">
                        검증된 인력을 빠르고 쉽게 매칭해드립니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemRecognition;
