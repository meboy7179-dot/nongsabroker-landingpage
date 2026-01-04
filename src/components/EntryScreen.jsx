import React from 'react';
import { motion } from 'framer-motion';

import './EntryScreen.css';

const countries = [
    { code: 'KR', name: 'South Korea', native: '한국어', flag: 'kr' },
    { code: 'VN', name: 'Vietnam', native: 'Tiếng Việt', flag: 'vn' },
    { code: 'KH', name: 'Cambodia', native: 'Khmer', flag: 'kh' },
    { code: 'NP', name: 'Nepal', native: 'नेपाली', flag: 'np' },
    { code: 'LA', name: 'Laos', native: 'Lao', flag: 'la' },
    { code: 'TH', name: 'Thailand', native: 'ไทย', flag: 'th' },
    { code: 'RU', name: 'Russia', native: 'Русский', flag: 'ru' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const EntryScreen = ({ onSelect }) => {
    return (
        <div className="entry-screen-container">
            <div className="brand-logo-container">
                <img src="/images/농인중개사_로고.png" alt="Nongin Broker Logo" className="brand-logo" />
            </div>
            <div className="entry-background-image" />
            <div className="entry-overlay" />

            <motion.div
                className="glass-card"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="header-section">
                    <motion.h1 variants={itemVariants}>
                        🌐 언어를 선택하세요
                    </motion.h1>
                </div>

                <motion.div className="country-grid" variants={itemVariants}>
                    {countries.map((country) => (
                        <motion.button
                            key={country.code}
                            className="country-card"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onSelect(country.code)}
                        >
                            <div className="flag-wrapper">
                                <img
                                    src={`https://flagcdn.com/w80/${country.flag}.png`}
                                    srcSet={`https://flagcdn.com/w160/${country.flag}.png 2x`}
                                    alt={`${country.name} flag`}
                                    className="country-flag"
                                />
                            </div>
                            <div className="country-info">
                                <span className="country-name">{country.name}</span>
                                <span className="country-native">{country.native}</span>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>


            </motion.div>


        </div>
    );
};

export default EntryScreen;
