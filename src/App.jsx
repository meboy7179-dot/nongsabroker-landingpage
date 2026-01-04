import React, { useState } from 'react';
import EntryScreen from './components/EntryScreen';
import Hero from './components/Hero';
import ProblemRecognition from './components/ProblemRecognition';
import SolutionSteps from './components/SolutionSteps';
import TrustMetrics from './components/TrustMetrics';
import FinalCallToAction from './components/FinalCallToAction';

function App() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountrySelect = (countryCode) => {
        console.log("Selected country:", countryCode);
        setSelectedCountry(countryCode);
        // Here you could also save to localStorage if persistent choice is desired
        // localStorage.setItem('userCountry', countryCode);
    };

    if (!selectedCountry) {
        return <EntryScreen onSelect={handleCountrySelect} />;
    }

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
