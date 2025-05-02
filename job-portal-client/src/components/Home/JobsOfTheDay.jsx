import React from "react";
import { FiMapPin, FiClock, FiDollarSign, FiBriefcase, FiStar } from "react-icons/fi";

const JobsOfTheDay = () => {
    const jobs = [
        {
            title: "Software Engineer (Android), Libraries",
            company: "Segment",
            location: "London, UK",
            time: "11 hours ago",
            salary: "$35k - $45k",
            type: "Full Time",
            badges: ["Private", "Urgent"],
            featured: true
        },
        {
            title: "Recruiting Coordinator",
            company: "Catalyst",
            location: "London, UK",
            time: "11 hours ago",
            salary: "$35k - $45k",
            type: "Freelancer",
            badges: ["Private", "Urgent"],
            featured: false
        },
        // Add more jobs here...
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Jobs of the Day</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Know your worth and find the job that qualifies your life
                    </p>
                </div>

                <div className="flex justify-center mb-8 border-b border-gray-200">
                    <div className="flex space-x-1">
                        <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                            Popular
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                            Recent
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border ${job.featured ? 'border-blue-100 ring-1 ring-blue-50' : 'border-gray-100'}`}
                        >
                            {job.featured && (
                                <div className="bg-blue-50 px-4 py-2 flex items-center">
                                    <FiStar className="text-blue-500 mr-2" />
                                    <span className="text-sm font-medium text-blue-600">Featured</span>
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                                        <p className="text-gray-700 font-medium mb-3">{job.company}</p>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-3 mt-4">
                                    <div className="flex items-center text-gray-600">
                                        <FiMapPin className="mr-2 text-gray-400" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FiClock className="mr-2 text-gray-400" />
                                        <span>{job.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FiDollarSign className="mr-2 text-gray-400" />
                                        <span>{job.salary}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FiBriefcase className="mr-2 text-gray-400" />
                                        <span>{job.type}</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                                    {job.badges.map((badge, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${badge === "Urgent"
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300">
                        View All Jobs
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobsOfTheDay;