import { useTheme } from "./ThemeContext";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`fixed top-0 left-0 w-full ${isDarkMode ? 'bg-[rgba(10,10,10,0.8)]' : 'bg-[rgba(240,240,240,0.9)]'} z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}>
            <button onClick={() => setMenuOpen(false)}
                className={`absolute top-6 right-6 ${isDarkMode ? 'text-white' : 'text-black'} text-3xl focus:outline-none cursor-pointer`}
                aria-label="Close Menu"
            >
                &times;
            </button>
            <a href="#home"
                className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                onClick={() => setMenuOpen(false)}
            >
                Home
            </a>
            <a href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            >
                About
            </a>
            <a href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
            >
                Projects
            </a>
            <a href="#contact"
                className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                onClick={() => setMenuOpen(false)}
            >
                Contact
            </a>
        </div>
    )
}