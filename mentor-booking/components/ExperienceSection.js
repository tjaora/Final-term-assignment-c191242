import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "SharpInfo Ltd",
      date: "Dec 2020 - Dec 2024",
      description: "Played key role in developing SharpInfo ERP Portal",
    },
    {
      role: "Software Engineer",
      company: "Fido Nation",
      date: "Dec 2018 - Dec 2020",
      description: "Platform Operations team",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Experiences</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <h4 className="text-md font-semibold">{exp.role}</h4>
          <p className="text-sm text-gray-600">{exp.company} | {exp.date}</p>
          <p className="text-sm">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
