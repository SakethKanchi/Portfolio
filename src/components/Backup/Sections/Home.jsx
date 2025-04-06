export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-right">
                    Hi, I'm Saketh K
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint accusantium esse officia, nulla possimus unde hic magni minima, voluptate ut quidem consequuntur consequatur quas nisi itaque laborum! Ex, magni! Cupiditate.
                    Cupiditate voluptas sint eius natus. Nobis asperiores hic modi ipsam nulla exercitationem explicabo magnam magni sed laudantium, cum assumenda. Nobis soluta obcaecati iste accusantium optio consequuntur molestiae in ea eum!
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
        </section>
    )
}