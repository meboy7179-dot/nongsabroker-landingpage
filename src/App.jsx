import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import EntryScreen from './components/EntryScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ProblemRecognition from './components/ProblemRecognition';
import SolutionSteps from './components/SolutionSteps';
import TrustMetrics from './components/TrustMetrics';
import FinalCallToAction from './components/FinalCallToAction';
import Footer from './components/Footer';

function AppContent() {
    const [languageSelected, setLanguageSelected] = useState(false);
    const { language, changeLanguage } = useLanguage();
    const [userType, setUserType] = useState('employer'); // 'employer' or 'worker'

    const handleLanguageSelect = (langCode) => {
        console.log("Selected language:", langCode);
        changeLanguage(langCode);
        setLanguageSelected(true);

        // Logic: Korean -> Employer default, Others -> Worker default
        if (langCode === 'ko') {
            setUserType('employer');
        } else {
            setUserType('worker');
        }
    };

    if (!languageSelected) {
        return <EntryScreen onSelect={handleLanguageSelect} />;
    }

    return (
        <div className="app">
            <Navbar userType={userType} setUserType={setUserType} />
            <Hero userType={userType} />
            <Partners />
            <ProblemRecognition userType={userType} />
            <SolutionSteps userType={userType} />
            <TrustMetrics userType={userType} />
            <FinalCallToAction userType={userType} />
            <Footer />
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
