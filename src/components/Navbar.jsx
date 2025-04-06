import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className={`fixed top-0 w-full z-40 ${isDarkMode ? 'bg-[rgba(10,10,10,0.8)]' : 'bg-[rgba(240,240,240,0.8)]'} backdrop-blur-lg border-b ${isDarkMode ? 'border-white/10' : 'border-black/10'} shadow-lg transition-colors duration-300`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className={`font-mono text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {" "}
                        saketh<span className="text-blue-600">.dev</span> {" "}
                    </a>
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            className={`mr-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-colors`}
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                        <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                            <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>&#9776;</div>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                                {" "}Home{" "}
                            </a>
                            <a href="#about" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                                {" "}About{" "}
                            </a>
                            <a href="#projects" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                                {" "}Projects{" "}
                            </a>
                            <a href="#contact" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                                {" "}Contact{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}