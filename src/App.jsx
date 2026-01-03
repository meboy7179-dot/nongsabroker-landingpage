import React from 'react';
import Hero from './components/Hero';
import ProblemRecognition from './components/ProblemRecognition';
import SolutionSteps from './components/SolutionSteps';
import TrustMetrics from './components/TrustMetrics';
import FinalCallToAction from './components/FinalCallToAction';

function App() {
    return (
        <div className="app">
            <Hero />
            <ProblemRecognition />
            <SolutionSteps />
            <TrustMetrics />
            <FinalCallToAction />
        </div>
    );
}

export default App;
