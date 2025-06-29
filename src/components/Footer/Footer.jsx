import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="bg-white border-t border-gray-200 py-10  border-t-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="-m-6 flex flex-wrap">
                    {/* Left: Logo and Copyright */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-6">
                                {/* Centered and Enlarged Logo */}
                                <div className="flex items-center">
                                    <Logo width="w-52" /> {/* You can change to w-60 for even larger */}
                                </div>
                                <p className="mt-4 text-base text-gray-600 max-w-md">
                                    ReflectU is your go-to personal blog platform. Share your voice, your thoughts, and your journey with the world.
                                </p>
                            </div>
                            <p className="text-sm text-gray-500">
                                &copy; {new Date().getFullYear()} ReflectU Blog. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <h3 className="text-xs font-semibold uppercase text-gray-600 mb-6">
                            Company
                        </h3>
                        <ul>
                            {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                                <li className="mb-4" key={item}>
                                    <Link to="/" className="text-base text-gray-700 hover:text-teal-600 transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <h3 className="text-xs font-semibold uppercase text-gray-600 mb-6">
                            Support
                        </h3>
                        <ul>
                            {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                                <li className="mb-4" key={item}>
                                    <Link to="/" className="text-base text-gray-700 hover:text-teal-600 transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <h3 className="text-xs font-semibold uppercase text-gray-600 mb-6">
                            Legals
                        </h3>
                        <ul>
                            {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                                <li className="mb-4" key={item}>
                                    <Link to="/" className="text-base text-gray-700 hover:text-teal-600 transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
