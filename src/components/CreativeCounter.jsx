import React from 'react';
import { counterCreativeItems } from "../constants/index.js";
import CountUp from "react-countup";

const CreativeCounter = () => {
    return (
        <div id="counter" className="px-8 sm:px-10 lg:px-20 mt-1">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
                {counterCreativeItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#121212] rounded-xl px-6 py-10 shadow-lg flex flex-col justify-center group transition duration-300 ease-in-out"
                    >
                        <div className="text-white text-5xl font-bold mb-2 transition-all duration-500 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_15px_cyan]">
                            <CountUp end={item.value} suffix={item.suffix} />
                        </div>
                        <div className="text-cyan-400 text-lg font-medium">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreativeCounter;
