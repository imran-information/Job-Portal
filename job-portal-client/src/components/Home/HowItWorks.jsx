import React from "react";
import { FiUserPlus, FiSearch, FiAward, FiCheckCircle } from "react-icons/fi";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FiUserPlus className="w-6 h-6" />,
            title: "Register Your Account",
            description: "Create your company profile in minutes and get immediate access to our talent pool.",
            accent: "from-blue-500 to-blue-600"
        },
        {
            icon: <FiSearch className="w-6 h-6" />,
            title: "Explore Resumes",
            description: "Filter through qualified professionals using advanced search criteria.",
            accent: "from-purple-500 to-purple-600"
        },
        {
            icon: <FiAward className="w-6 h-6" />,
            title: "Find Top Talent",
            description: "Our smart matching system identifies ideal candidates for your needs.",
            accent: "from-emerald-500 to-emerald-600"
        },
        {
            icon: <FiCheckCircle className="w-6 h-6" />,
            title: "Hire Confidently",
            description: "Verified candidates with our satisfaction guarantee.",
            accent: "from-amber-500 to-amber-600"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                        Streamlined Hiring
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        How Our Platform Works
                    </h2>
                    <p className="text-xl text-gray-600">
                        Discover qualified candidates through our efficient four-step process
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent"
                        >
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                <div className={`w-12 h-12 bg-gradient-to-r ${step.accent} rounded-xl flex items-center justify-center shadow-lg text-white`}>
                                    {step.icon}
                                </div>
                            </div>
                            <div className="pt-8">
                                <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 group-hover:text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="mt-6 text-center">
                                <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-10 text-white relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white bg-opacity-5 rounded-full"></div>

                    <div className="relative max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-5">Ready to Transform Your Hiring?</h3>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join thousands of companies who found their ideal candidates through our platform
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                                Get Started Now
                            </button>
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;