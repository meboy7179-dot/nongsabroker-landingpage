import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="container navbar-content">
                    <div className="navbar-logo">
                        <img src="/images/농인중개사_로고.png" alt="농인중개사" className="logo-img" />
                    </div>
                    <div className="navbar-links">
                        <a href="#">서비스 소개</a>
                        <a href="#">일자리 찾기</a>
                        <a href="#">인재 찾기</a>
                        <a href="#">고객센터</a>
                    </div>
                    <div className="navbar-actions">
                        <button className="icon-btn">
                            <span className="material-icons-round">language</span>
                        </button>
                        <button className="login-btn">로그인</button>
                    </div>
                </div>
            </nav>

            <header className="hero-section">
                <div className="hero-pattern"></div>
                <div className="container hero-content">
                    <div className="hero-grid">
                        <div className="hero-text-col">
                            <div className="badge">
                                <span className="badge-dot-container">
                                    <span className="badge-dot-ping"></span>
                                    <span className="badge-dot"></span>
                                </span>
                                <span className="badge-text">5,000+ 농가 인증</span>
                            </div>

                            <h1 className="hero-title">
                                일손 부족으로 <br className="break-sm" />
                                <span className="highlight-text">
                                    농사가 멈추지 않게
                                    <svg className="highlight-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                                    </svg>
                                </span>
                            </h1>

                            <p className="hero-description">
                                검증된 외국인 인력 매칭 플랫폼, 농인중개사.<br />
                                복잡한 절차 없이 앱 하나로 신뢰할 수 있는 일손을 만나보세요.
                            </p>

                            <div className="hero-buttons">
                                <button className="btn-primary">
                                    <span>농인중개사 시작하기</span>
                                    <span className="material-icons-round">arrow_forward</span>
                                </button>
                                <button className="btn-secondary">
                                    <span className="material-icons-round text-primary">play_circle</span>
                                    <span>서비스 소개 영상</span>
                                </button>
                            </div>

                            <div className="hero-trust-badges">
                                <div className="trust-item">
                                    <span className="material-icons-round text-green">check_circle</span>
                                    <span>신원 인증 완료</span>
                                </div>
                                <div className="trust-item">
                                    <span className="material-icons-round text-green">check_circle</span>
                                    <span>안전 결제 시스템</span>
                                </div>
                                <div className="trust-item">
                                    <span className="material-icons-round text-green">check_circle</span>
                                    <span>24시간 지원</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-image-col">
                            <div className="blob blob-1"></div>
                            <div className="blob blob-2"></div>
                            <div className="image-grid">
                                <div className="image-card card-large">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMghHGQNYFKilpTjO1FVkkdNYru_vxKxmAFfPJy_vOxZBGPKhKyiY-NHrrs3bWoPJF54ZxHEuASprWsuwlz6s4xu-JP-LhtDhe28uRs8eBxG73lIydbA97u8nA2xWdJYcJz77mpVYgbrxmMQ16fl-MttNNBv_BB9c9P2ERVBvHpHL8MH9fD21FJv8-gu9WX1DX_aFSDqA_pRuDsM9r_UyF73QRAuIYvmeQfFBTHdmlfRX35EscekYsbZwQ6ddGZrLkxzsVx0f4aA" alt="Farm worker" className="card-img" />
                                    <div className="card-overlay">
                                        <div className="overlay-icon">
                                            <span className="material-icons-round">eco</span>
                                        </div>
                                        <div className="overlay-text">
                                            <p className="overlay-label">오늘의 예상 수익</p>
                                            <p className="overlay-value">₩ 130,000</p>
                                        </div>
                                        <div className="overlay-badge">작업 중</div>
                                    </div>
                                </div>

                                <div className="image-card card-small-top">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQofGhS8lBckqzv3pr6u0-ihVp55Q-naBOVxX3f3ro4j-3dTtHOGWzKhy7TTok0mcoGlW-cmpJwVW_0R6R_RFbBwBw4RnUS-9n7bMQ00RlZLTYZge9bRzqMwStGe9irUSBkzfZbKIZRn6s5jC-kY2CVDWSonrYmTY_HMRTOiKGhyZ0QYjtH0k7SzX6shpWZWwVAty7xi1fQbuHzw32jy5MF6KoiEFff-ZESsBkb_V7HK8h3mLzz4tgi7JQJgXQ7s_OpW6sbblVyE" alt="Greenhouse" className="card-img" />
                                    <div className="rating-badge">
                                        <span className="material-icons-round star-icon">star</span>
                                        <span>4.8</span>
                                    </div>
                                </div>

                                <div className="stat-card">
                                    <div className="stat-header">
                                        <span className="stat-label">매칭 성공률</span>
                                        <span className="stat-icon-bg">
                                            <span className="material-icons-round text-green">trending_up</span>
                                        </span>
                                    </div>
                                    <div className="stat-value">98%</div>
                                    <div className="stat-bar-bg">
                                        <div className="stat-bar-fill" style={{ width: '98%' }}></div>
                                    </div>
                                    <p className="stat-subtext">지난 달 2,400건 매칭 완료</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="partners-section">
                <div className="container">
                    <p className="partners-title">전국 주요 농협 및 파트너사와 함께합니다</p>
                    <div className="partners-grid">
                        <div className="partner-logo">
                            <span className="material-icons-round">spa</span> GREEN FARM
                        </div>
                        <div className="partner-logo">
                            <span className="material-icons-round">local_florist</span> AGRITECH
                        </div>
                        <div className="partner-logo">
                            <span className="material-icons-round">wb_sunny</span> SUNNY DAY
                        </div>
                        <div className="partner-logo">
                            <span className="material-icons-round">water_drop</span> PURE GROW
                        </div>
                        <div className="partner-logo">
                            <span className="material-icons-round">grass</span> FRESH FIELD
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Hero;
