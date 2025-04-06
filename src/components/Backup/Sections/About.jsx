export const About = () => {
    const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Vite", "Streamlit"]
    const backendSkills = ["Node.js", "Python", "Java", "SQL", "PHP"]
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3lx mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 translate-all">
                    <p className="text-gray-300 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident repellat reprehenderit, rem illo facilis facere perferendis mollitia.
                    </p>
                    {/* BACKEND AND FRONTEND SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-600/10 text-blue-600 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* EDUCAITON / WORK EXPERIENCE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> {/* change to grid-cols-2 for 2 grids and for work section */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏢 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Masters in Computer Science</strong> - Stevens Institute of Technology
                                (2024 - 2026)
                            </li>
                            <li>
                                Relevant Coursework: Data Structures, Cyber Security, Machine Learning...
                            </li>
                        </ul>
                    </div>
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
        </section>
    )
}