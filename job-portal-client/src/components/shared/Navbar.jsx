import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [scrolled, setScrolled] = useState(false);

    // Memoized scroll handler
    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Memoized navigation links
    const renderLinks = useCallback(() => {
        const linkClasses = `hover:bg-primary hover:text-white transition-colors duration-200 px-4 py-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`;

        return (
            <>
                <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/find-jobs">Find Jobs</NavLink></li>
                <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/employers">Employers</NavLink></li>
                <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/candidates">Candidates</NavLink></li>
                <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/blogs">Blogs</NavLink></li>
                <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/jobs">Jobs</NavLink></li>
                <li><Link className={`${linkClasses} bg-primary/10 hover:bg-primary hover:text-white ml-2`} to="/upload-cv">Upload CV</Link></li>
                {!user && <li><NavLink className={({ isActive }) => `${linkClasses} ${isActive ? 'bg-primary text-white' : ''}`} to="/register">Register</NavLink></li>}
            </>
        );
    }, [scrolled, user]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo/Mobile Menu */}
                    <div className="flex items-center">
                        <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                                {renderLinks()}
                            </ul>
                        </div>
                        <Link to="/" className="flex items-center">
                            <img className="w-12 h-12 object-contain" src={logo} alt="Job Portal Logo" />
                            <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>JobPortal</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <ul className="menu menu-horizontal px-1 space-x-1">
                            {renderLinks()}
                        </ul>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                                        {user.email.charAt(0).toUpperCase()}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><button onClick={signOutUser}>Sign Out</button></li>
                                </ul>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className={`btn ${scrolled ? 'btn-primary' : 'btn-outline btn-primary text-white border-white hover:bg-white hover:text-primary'}`}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;