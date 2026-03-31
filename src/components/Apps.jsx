// Apps.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";
import Application from "./Application";

const Apps = () => {
  const data = useLoaderData();

  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-red-500 p-4">No app data found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Apps</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((app) => (
          <Application key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;