
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CardDetails = () => {
  const app = useLoaderData();
  const navigate = useNavigate();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Check install status from localStorage
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalled(installedApps.includes(app.id));
  }, [app.id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
    }
    setInstalled(true);
    navigate('/installation');
  };

  const handleUninstall = () => {
    let installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    installedApps = installedApps.filter(id => id !== app.id);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setInstalled(false);
  };

  if (!app) return <div className="p-8 text-red-500">App not found.</div>;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50  shadow-md rounded-lg">
      {/* Top section: Image and basic info */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-gray-100 flex items-center justify-center rounded-lg">
          <img
            src={app.image || "https://via.placeholder.com/150"}
            alt={app.title}
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold mb-1">{app.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            Developed by <span className="text-purple-600">{app.companyName}</span>
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-1 text-green-600 font-semibold">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 10a1 1 0 012 0v5a1 1 0 102 0v-5a1 1 0 112 0v5a1 1 0 102 0v-5a1 1 0 012 0v5a1 1 0 102 0v-5a1 1 0 012 0v5a1 1 0 11-2 0v-5a1 1 0 10-2 0v5a1 1 0 11-2 0v-5a1 1 0 10-2 0v5a1 1 0 11-2 0v-5z" />
              </svg>
              {app.downloads ? `${(app.downloads / 1000000).toFixed(1)}M Downloads` : ""}
            </div>
            <div className="flex items-center gap-1 text-yellow-500 font-semibold">
              ★ {app.ratingAvg || "-"}
            </div>
            <div className="flex items-center gap-1 text-purple-600 font-semibold">
              {app.reviews ? `${(app.reviews / 1000).toFixed(1)}K Reviews` : ""}
            </div>
          </div>
          {installed ? (
            <button
              className="mt-4 border-none px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleUninstall}
            >
              Uninstall
            </button>
          ) : (
            <button
              className="mt-4 border-none px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleInstall}
            >
              Install Now {app.size ? `(${app.size} MB)` : ""}
            </button>
          )}
        </div>
      </div>

      {/* Ratings bar */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-black">Ratings</h2>
        <div className="space-y-2 text-black">
          {app.ratings && app.ratings.slice().reverse().map((rate) => {
            const total = app.ratings.reduce((acc, r) => acc + r.count, 0);
            const width = total ? (rate.count / total) * 100 : 0;
            return (
              <div key={rate.name} className="flex items-center gap-2">
                <span className="w-12 text-sm">{rate.name}</span>
                <div className="flex-1 bg-gray-200 h-3 rounded">
                  <div
                    className="bg-orange-500 h-3 rounded"
                    style={{ width: `${width}%` }}
                  />
                </div>
                <span className="w-12 text-sm text-gray-600">{rate.count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700 text-sm whitespace-pre-line">{app.description}</p>
      </div>
    </div>
    );
};

export default CardDetails;