import React, { useState } from 'react';
import { NavLink } from 'react-router';

// Example available apps (simulate data.json)
const availableApps = [
    {
        id: 1,
        title: 'Chat App',
        company: 'TechSoft',
        downloads: '0.1M',
        rating: 4.5,
        size: '25 MB',
        image: '',
        reviews: '1.2K',
        installed: false,
        description: 'Real-time messaging app with group chat and media sharing.'
    },
    {
        id: 2,
        title: 'Forest: Focus For Productivity',
        company: 'Forest Inc.',
        downloads: '9M',
        rating: 5,
        size: '258 MB',
        image: '',
        reviews: '5K',
        installed: true,
        description: 'Focus and be productive with Forest.'
    }
];

const Installation = () => {
    const [apps, setApps] = useState(availableApps);

    const handleInstall = (id) => {
        setApps((prev) => prev.map(app => app.id === id ? { ...app, installed: true } : app));
    };
    const handleUninstall = (id) => {
        setApps((prev) => prev.filter(app => app.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-2">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Your Installed Apps</h1>
                <p className="text-center text-gray-500 mb-10">Explore All Trending Apps on the Market developed by us</p>

                <div className="flex items-center justify-between mb-4 max-w-3xl mx-auto">
                    <span className="font-semibold text-lg">{apps.filter(a => a.installed).length} Apps Found</span>
                    <div>
                        <select className="border rounded px-3 py-1 text-gray-600 bg-white shadow-sm focus:outline-none">
                            <option>Sort By Size</option>
                            <option>Sort By Name</option>
                            <option>Sort By Rating</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {/* Installed apps details */}
                    {apps.filter(app => app.installed).length === 0 ? (
                        <div className="text-center text-gray-500 text-lg py-10 font-semibold">No app installed</div>
                    ) : (
                        apps.filter(app => app.installed).map((app) => (
                            <div key={app.id} className="flex items-center bg-white rounded-lg shadow-[0_2px_8px_#e9e9e9] px-4 py-4 justify-between border-b">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{app.title}</div>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                            <span className="flex items-center gap-1 text-green-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M12 21V3m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {app.downloads}
                                            </span>
                                            <span className="flex items-center gap-1 text-orange-500">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                                </svg>
                                                {app.rating}
                                            </span>
                                            <span>{app.size}</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">{app.description}</div>
                                    </div>
                                </div>
                                <button onClick={() => handleUninstall(app.id)} className="bg-[#19e27c] hover:bg-[#13c46a] text-white font-semibold px-6 py-2 rounded transition">Uninstall</button>
                            </div>
                        ))
                    )}

                    {/* Not installed apps with install button */}
                    {apps.filter(app => !app.installed).map((app) => (
                        <div key={app.id} className="flex items-center bg-white rounded-lg shadow-[0_2px_8px_#e9e9e9] px-4 py-4 gap-6 max-w-2xl">
                            <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xl font-bold text-gray-300 mb-1">{app.title}</div>
                                <div className="text-sm mb-1">Developed by <span className="text-purple-500 font-semibold">{app.company}</span></div>
                                <div className="flex items-center gap-4 mb-2 text-base">
                                    <span className="flex items-center gap-1 text-green-600 font-semibold">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M12 21V3m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {app.downloads} Downloads
                                    </span>
                                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                                        ★ {app.rating}
                                    </span>
                                    <span className="text-purple-600 font-semibold">{app.reviews} Reviews</span>
                                </div>
                                <button onClick={() => handleInstall(app.id)} className="bg-[#19e27c] hover:bg-[#13c46a] text-white font-semibold px-6 py-2 rounded transition">Install Now ({app.size})</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mx-auto items-center text-center'>
                <NavLink to="/apps" className='btn gradient-bg border-none px-10 my-5'>Apps</NavLink>
            </div>
        </div>
    );
};

export default Installation;