import { FaGithub } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    const { isDarkMode } = useTheme();

    return (
        <section
            id="projects"
            className={`min-h-screen flex items-center justify-center py-20 ${isDarkMode ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className={`p-6 rounded-xl border ${isDarkMode ? 'border-white/10 bg-gray-900/30' : 'border-black/10 bg-[#eff1f5]'} hover:-translate-y-1 hover:border-blue-600/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Prediction Models</h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                Developed a machine learning-based web application to
                                predict diseases using patient data with over 80% accuracy
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Streamlit"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/SakethKanchi/Multiple_Disease_Prediction"
                                    className="text-blue-500 hover:text-blue-400 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <a href="https://github.com/SakethKanchi/Multiple_Disease_Prediction">{<FaGithub className={isDarkMode ? 'text-white' : 'text-gray-900'} />}</a>
                            </div>
                        </div>

                        {/* Project - 2 */}
                        <div
                            className={`p-6 rounded-xl border ${isDarkMode ? 'border-white/10 bg-gray-900/30' : 'border-black/10 bg-[#eff1f5]'} hover:-translate-y-1 hover:border-blue-600/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Movie App</h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                Developed a responsive movie discovery app using React
                                and integrated TMDB API to fetch real-time data.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "API"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://skmoviesapp.netlify.app/"
                                    className="text-blue-500 hover:text-blue-400 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <a href="https://github.com/SakethKanchi/Movies_App">{<FaGithub className={isDarkMode ? 'text-white' : 'text-gray-900'} />}</a>
                            </div>
                        </div>

                        {/* Project - 3 */}
                        <div
                            className={`p-6 rounded-xl border ${isDarkMode ? 'border-white/10 bg-gray-900/30' : 'border-black/10 bg-[#eff1f5]'} hover:-translate-y-1 hover:border-blue-600/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Finance Tracking CLI</h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                Developed a command-line tool for expense management
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Pandas"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/SakethKanchi/Finance_Tracking"
                                    className="text-blue-500 hover:text-blue-400 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <a href="https://github.com/SakethKanchi/Finance_Tracking">{<FaGithub className={isDarkMode ? 'text-white' : 'text-gray-900'} />}</a>
                            </div>
                        </div>

                        {/* Project - 4 */}
                        <div
                            className={`p-6 rounded-xl border ${isDarkMode ? 'border-white/10 bg-gray-900/30' : 'border-black/10 bg-[#eff1f5]'} hover:-translate-y-1 hover:border-blue-600/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}
                        >
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kitty</h3>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                Custom Visual Studio Code theme with a focus on aesthetics and readability.
                                Over 10k downloads on the VS Code Marketplace
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Node.js", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://marketplace.visualstudio.com/items?itemName=SakethKanchi.kitty-vscode-theme"
                                    className="text-blue-500 hover:text-blue-400 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                                <a href="https://marketplace.visualstudio.com/items?itemName=SakethKanchi.kitty-vscode-theme">{<FaGithub className={isDarkMode ? 'text-white' : 'text-gray-900'} />}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}