import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ko'); // Default language
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadTranslations(language);
    }, [language]);

    const loadTranslations = async (lang) => {
        setLoading(true);
        try {
            const response = await import(`../locales/${lang}.json`);
            setTranslations(response.default || response);
        } catch (error) {
            console.error(`Failed to load translations for ${lang}:`, error);
            // Fallback to Korean if loading fails
            if (lang !== 'ko') {
                const fallback = await import('../locales/ko.json');
                setTranslations(fallback.default || fallback);
            }
        } finally {
            setLoading(false);
        }
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('userLanguage', lang);
    };

    const value = {
        language,
        translations,
        changeLanguage,
        loading,
        t: (key) => {
            // Support nested keys like "hero.headline"
            const keys = key.split('.');
            let value = translations;
            for (const k of keys) {
                value = value?.[k];
                if (value === undefined) break;
            }
            return value || key;
        }
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
