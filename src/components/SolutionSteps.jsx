import React from 'react';
import './SolutionSteps.css';

const SolutionSteps = () => {
    return (
        <section className="steps-section">
            <div className="container">
                <div className="steps-header">
                    <h2 className="steps-title">
                        How Nongin Broker Works
                    </h2>
                    <p className="steps-description">
                        Connecting hard-working people with trusted farms in three simple steps.<br className="break-md" /> Reliable, transparent, and fast.
                    </p>
                </div>

                <div className="steps-grid">
                    <div className="step-card group">
                        <div className="step-card-inner">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">app_registration</span>
                            </div>
                            <div className="step-badge">Step 1</div>
                            <h3 className="step-title">Create Your Profile</h3>
                            <p className="step-text">
                                Sign up quickly and build your trusted profile. Add your skills, location, and work preferences to get matched instantly.
                            </p>
                        </div>
                    </div>

                    <div className="step-card group">
                        <div className="step-divider"></div>
                        <div className="step-card-inner relative z-10">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">travel_explore</span>
                            </div>
                            <div className="step-badge">Step 2</div>
                            <h3 className="step-title">Find & Accept Jobs</h3>
                            <p className="step-text">
                                Browse verified agricultural jobs near you. Check the daily wage, farm location, and requirements upfront before accepting.
                            </p>
                        </div>
                    </div>

                    <div className="step-card group">
                        <div className="step-divider"></div>
                        <div className="step-card-inner relative z-10">
                            <div className="step-icon-wrapper group-hover-scale">
                                <span className="material-icons-round step-icon">payments</span>
                            </div>
                            <div className="step-badge">Step 3</div>
                            <h3 className="step-title">Work & Get Paid</h3>
                            <p className="step-text">
                                Complete your shift and receive guaranteed payment. Build your reputation score to unlock higher-paying opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="steps-footer">
                    <button className="steps-cta">
                        Start Earning Today
                        <span className="material-icons-round ml-2 -mr-1">arrow_forward</span>
                    </button>
                    <p className="steps-footer-text">
                        Join over 10,000 workers finding jobs daily.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSteps;
