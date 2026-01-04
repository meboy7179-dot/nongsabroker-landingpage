import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import EntryScreen from './components/EntryScreen';
import Hero from './components/Hero';
import ProblemRecognition from './components/ProblemRecognition';
import SolutionSteps from './components/SolutionSteps';
import TrustMetrics from './components/TrustMetrics';
import FinalCallToAction from './components/FinalCallToAction';

function AppContent() {
    const [languageSelected, setLanguageSelected] = useState(false);
    const { changeLanguage } = useLanguage();

    const handleLanguageSelect = (langCode) => {
        console.log("Selected language:", langCode);
        changeLanguage(langCode);
        setLanguageSelected(true);
    };

    if (!languageSelected) {
        return <EntryScreen onSelect={handleLanguageSelect} />;
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

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
