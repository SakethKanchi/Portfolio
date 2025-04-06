import { useTheme } from "../ThemeContext";
import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const { isDarkMode } = useTheme();
    const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Vite", "Streamlit"]
    const backendSkills = ["Node.js", "Python", "Java", "SQL", "PHP"]

    return (
        <section
            id="about"
            className={`min-h-screen flex items-center justify-center py-20 ${isDarkMode ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}
        >
            <RevealOnScroll>
                <div className="max-w-3lx mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className={`rounded-xl p-8 ${isDarkMode ? 'border-white/10' : 'border-black/10'} border hover:-translate-y-1 transition-all ${isDarkMode ? 'bg-gray-900/30' : 'bg-[#eff1f5]'}`}>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                            Aspiring Software Engineer with a strong foundation in Java and Machine Learning, and a passion for building innovative web applications and AI-driven solutions.
                        </p>
                        {/* BACKEND AND FRONTEND SECTION */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EDUCATION / WORK EXPERIENCE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className={`p-6 rounded-xl ${isDarkMode ? 'border-white/10 bg-gray-900/30' : 'border-black/10 bg-[#eff1f5]'} border hover:-translate-y-1 transition-all`}>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>🏢 Education</h3>
                            <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                                <li>
                                    <strong>Masters in Computer Science</strong> - Stevens Institute of Technology
                                    (2024 - 2026)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Cyber Security, Machine Learning...
                                </li>
                            </ul>
                        </div>
                        {/* Work Experience section */}
                        {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Software Engineer at ABC (2020-present)</h4>
                                <p>Developed and maintained ***** etc </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Intern at DEF (2019-2020)</h4>
                                <p>Assisted in building and maintaing ***** etc </p>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}