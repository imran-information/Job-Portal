import React, { useEffect, useState } from "react";
import { FiSearch, FiMapPin, FiBriefcase, FiArrowRight, FiLayers, FiChevronDown } from "react-icons/fi";

const Banner = () => {
    const [count, setCount] = useState(0);
    const targetCount = 1200;


    useEffect(() => {
        const easeOutQuad = (t) => t * (2 - t);
        let start = null;
        const duration = 2000; // 2 seconds

        const animateCount = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const easedProgress = easeOutQuad(progress);
            setCount(Math.floor(easedProgress * targetCount));

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };
        requestAnimationFrame(animateCount);
    }, []);



    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen opacity-10 animate-float1"></div>
                <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen opacity-10 animate-float2"></div>
                <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-indigo-500 rounded-full mix-blend-screen opacity-10 animate-float3"></div>
            </div>

            <div className="relative z-10 bg-white bg-opacity-5 backdrop-blur-lg p-8 md:p-12 rounded-2xl max-w-6xl w-full border border-white border-opacity-20 shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                        Elevate Your Career
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white text-opacity-90 max-w-2xl mx-auto">
                        Connect with <span className="font-medium">5,000+</span> companies hiring now
                    </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiBriefcase className="h-5 w-5 text-blue-500" />
                            </div>
                            <input
                                type="text"
                                placeholder="Job title, skills, or company"
                                className="w-full pl-10 bg-white/95 text-gray-800 border-none focus:bg-white focus:ring-2 focus:ring-blue-500 h-16 text-lg rounded-xl px-4 py-2 outline-none"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMapPin className="h-5 w-5 text-blue-500" />
                            </div>
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full pl-10 bg-white/95 text-gray-800 border-none focus:bg-white focus:ring-2 focus:ring-blue-500 h-16 text-lg rounded-xl px-4 py-2 outline-none"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                            <FiLayers className="h-5 w-5 text-blue-500" />
                        </div>
                        <select
                            className="w-full pl-10 bg-white/95 text-gray-800 border-none focus:bg-white focus:ring-2 focus:ring-blue-500 h-16 text-lg rounded-xl px-4 py-2 appearance-none"
                        >
                            <option value="">All Categories</option>
                            <option>Technology</option>
                            <option>Healthcare</option>
                            <option>Finance</option>
                            <option>Education</option>
                            <option>Marketing</option>
                            <option>Design</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FiChevronDown className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="btn w-full h-16 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold text-lg border-none transition-all duration-300 rounded-xl flex items-center justify-center space-x-2 group"
                        >
                            <span>Search</span>
                            <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </form>

                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        <span className="text-white text-opacity-80 font-medium">Trending Now:</span>
                        <a href="#" className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full transition-all duration-200 text-sm font-medium">Remote Jobs</a>
                        <a href="#" className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full transition-all duration-200 text-sm font-medium">Frontend Developer</a>
                        <a href="#" className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full transition-all duration-200 text-sm font-medium">UX Designer</a>
                        <a href="#" className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full transition-all duration-200 text-sm font-medium">Data Scientist</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <img
                                    key={item}
                                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                    alt="Candidate"
                                />
                            ))}
                        </div>
                        <p className="text-white text-opacity-80 text-sm">
                            <span className="font-semibold">{count.toLocaleString()}+</span> candidates hired this week
                        </p>
                    </div>
                </div>
            </div>

            {/*  some animation styles */}
            <style jsx>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-10px, -20px); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(15px, 10px); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(5px, -15px); }
                }
                .animate-float1 { animation: float1 8s ease-in-out infinite; }
                .animate-float2 { animation: float2 10s ease-in-out infinite; }
                .animate-float3 { animation: float3 12s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default Banner;