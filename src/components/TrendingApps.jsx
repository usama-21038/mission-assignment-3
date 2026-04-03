import React, { useEffect, useState } from "react";
import Application from "./Application";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by ratingAvg descending, then take top 8
        const sorted = data
          .slice()
          .sort((a, b) => b.ratingAvg - a.ratingAvg)
          .slice(0, 8);
        setApps(sorted);
      });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {apps.map((app) => (
        <Application key={app.id} app={app} />
      ))}
    </div>
  );
};

export default TrendingApps;
