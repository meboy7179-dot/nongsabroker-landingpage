import React from 'react';
import './SolutionSteps.css';

const SolutionSteps = () => {
    return (
        <section className="steps-section">
            <div className="container">
                <div className="steps-header">
                    <h2 className="steps-title">
                        농인중개사 이용 방법
                    </h2>
                    <p className="steps-description">
                        검증된 농장과 성실한 근로자를 3단계로 연결합니다.<br className="break-md" /> 믿을 수 있고, 투명하며, 빠릅니다.
                    </p>
                </div>

                <div className="steps-grid">
                    <div className="step-card group">
                        <div className="step-card-inner">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">app_registration</span>
                            </div>
                            <div className="step-badge">STEP 1</div>
                            <h3 className="step-title">프로필 생성</h3>
                            <p className="step-text">
                                빠르게 가입하고 신뢰할 수 있는 프로필을 만드세요. 기술, 위치, 작업 선호도를 등록하여 즉시 매칭받으세요.
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
                            <h3 className="step-title">일자리 찾기 및 수락</h3>
                            <p className="step-text">
                                주변의 검증된 농업 일자리를 둘러보세요. 수락하기 전에 일당, 농장 위치, 요구사항을 미리 확인하세요.
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
                            <h3 className="step-title">근무 및 급여 정산</h3>
                            <p className="step-text">
                                작업을 완료하고 보장된 급여를 받으세요. 평판 점수를 쌓아 더 높은 소득 기회를 얻으세요.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="steps-footer">
                    <button className="steps-cta">
                        지금 바로 시작하기
                        <span className="material-icons-round ml-2 -mr-1">arrow_forward</span>
                    </button>
                    <p className="steps-footer-text">
                        매일 일자리를 찾는 10,000명 이상의 근로자와 함께하세요.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSteps;
