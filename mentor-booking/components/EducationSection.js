import React from "react";

export default function EducationSection() {
  const educations = [
    {
      institution: "International Islamic University Chittagong",
      degree: "Bachelor of Computer Science and Engineering",
      date: "2020 - 2024",
    },
    {
      institution: "United International University",
      degree: "Masters in CS & Data Science",
      date: "2024 - 2026",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Educations</h3>
      {educations.map((edu, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <h4 className="text-md font-semibold">{edu.institution}</h4>
          <p className="text-sm text-gray-600">{edu.degree}</p>
          <p className="text-sm">{edu.date}</p>
        </div>
      ))}
    </div>
  );
}
