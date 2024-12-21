import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="mt-6">
      <div className="flex border-b-2 space-x-4">
        <button
          className={`pb-2 ${activeTab === "Overview" ? "border-purple-600 border-b-2 text-purple-600" : ""}`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>
        <button
          className={`pb-2 ${activeTab === "Reviews" ? "border-purple-600 border-b-2 text-purple-600" : ""}`}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </button>
      </div>
      {activeTab === "Overview" ? (
        <div className="mt-4 text-black font-bold">5+ years of experience in Software Engineering</div>
      ) : (
        <div className="mt-4">No reviews available yet.</div>
      )}
    </div>
  );
}
