import React from "react";

export default function StatisticsSection() {
  const statistics = [
    { label: "Completed Sessions", value: 0 },
    { label: "Total Mentoring Time", value: "0 Minutes" },
    { label: "Average Attendance", value: "3%" },
    { label: "Experience", value: "5 Years" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Community Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-gray-300 p-4 rounded-lg text-left flex flex-col">
            <p className="text-xl text-black">{stat.value}</p>
            <p className="text-sm text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
