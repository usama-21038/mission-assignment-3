// Apps.jsx
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Application from "./Application";

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-red-500 p-4">No app data found.</div>;
  }

  // Filter apps by search
  const filtered = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-1 mt-2 text-black">
        Our All Applications
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto mb-4">
        <span className="font-semibold text-black mb-2 md:mb-0">
          ({filtered.length}) Apps Found
        </span>
        <input
          type="text"
          className="border text-black bg-gray-100 rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="🔍 search app"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((app) => (
          <Application key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;