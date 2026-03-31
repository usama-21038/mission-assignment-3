// Application.jsx
import React from "react";

const Application = ({ app }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white p-4 flex flex-col min-h-[180px]">
      <div className="bg-gray-100 rounded w-full h-24 flex items-center justify-center mb-2">
        <img
          src={app.image || "https://via.placeholder.com/80"}
          alt={app.title}
          className="w-16 h-16 object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-gray-800 truncate mb-1">{app.title}</div>
        <div className="text-xs text-gray-500 truncate">{app.companyName}</div>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded border border-green-200">
          {app.downloads ? `${(app.downloads / 1000000).toFixed(1)}M` : ""}
        </span>
        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded border border-orange-200">
          {app.ratingAvg ? `${app.ratingAvg}★` : ""}
        </span>
        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded border border-blue-200">
          {app.reviews ? `${(app.reviews / 1000).toFixed(1)}K` : ""}
        </span>
      </div>
    </div>
  );
};

export default Application;