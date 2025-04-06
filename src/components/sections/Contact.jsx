import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const { isDarkMode } = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className={`min-h-screen flex items-center justify-center py-12 md:py-20 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
            <RevealOnScroll>
                <div className="px-4 w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full ${isDarkMode ? "bg-white/5 border-white/10 text-white focus:border-blue-600" : "bg-black/10 border-black/20 text-black focus:border-gray-600"} border rounded px-4 py-3 transition focus:outline focus:bg-blue-500/5`}
                                placeholder="Name..." />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full ${isDarkMode ? "bg-white/5 border-white/10 text-white focus:border-blue-600" : "bg-black/10 border-black/20 text-black focus:border-gray-600"} border rounded px-4 py-3 transition focus:outline focus:bg-blue-500/5`}
                                placeholder="example@gmail.com" />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className={`w-full ${isDarkMode ? "bg-white/5 border-white/10 text-white focus:border-blue-600" : "bg-black/10 border-black/20 text-black focus:border-gray-600"} border rounded px-4 py-3 transition focus:outline focus:bg-blue-500/5`}
                                placeholder="Your Message..." />
                        </div>
                        <button type="submit" className={`w-full ${isDarkMode ? "bg-blue-500 text-white" : "bg-blue-500 text-white"} py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]`}>
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};