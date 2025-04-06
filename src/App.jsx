import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import LoadingScreen from './components/LoadingScreen.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Handle loading screen completion
    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <ThemeProvider>
            {isLoading ? (
                <LoadingScreen onComplete={handleLoadingComplete} />
            ) : (
                <>
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <main>
                        <Home />
                        <About />
                        <Projects />
                        <Contact />
                    </main>
                </>
            )}
        </ThemeProvider>
    );
}

export default App;