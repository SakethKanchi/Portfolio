import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
const LoadingScreen = ({ onComplete }) => {
    const { isDarkMode } = useTheme();
    const [text, setText] = useState("");
    const fullText = "<Saketh />"

    useEffect(() => {
        let index = 0;
        const interavl = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interavl);

                setTimeout(() => {
                    onComplete();
                }, 1000)
            }
        }, 100);

        return () => clearInterval(interavl);
    }, [onComplete])

    return (
        <div className={`fixed inset-0 z-50 ${isDarkMode ? 'bg-black text-gray-100' : 'bg-gray-50 text-gray-900'} flex flex-col items-center justify-center transition-colors duration-300`}>
            <div className="mb-4  text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"> | </span>
            </div>
            <div className={`w-[200px] h-[2px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded relative overflow-hidden`}>
                <div className="w-[40%] h-full bg-blue-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen