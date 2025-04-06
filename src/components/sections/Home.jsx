import { useTheme } from "../ThemeContext";
import { RevealOnScroll } from "../RevealOnScroll"
export const Home = () => {
    const { isDarkMode } = useTheme();

    return (
        <section id="home" className={`min-h-screen flex items-center justify-center relative ${isDarkMode ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}>
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-right">
                        Hi, I'm Saketh K
                    </h1>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8 max-w-lg mx-auto`}>
                        CS Grad Student 🧑🏻‍💻
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects"
                            className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow=[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            View Projects
                        </a>
                        <a href="#contact"
                            className="border border-blue-600/50 text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow=[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-600/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}