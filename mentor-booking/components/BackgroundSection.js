import React from "react";

export default function BackgroundSection() {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mt-6">
        {/* Section Header */}
        <h2 className="text-lg font-bold mb-4">Background</h2>
  
        {/* Skills Row */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Skills</span>
          <span className="bg-red-100 text-red-500 text-sm font-semibold px-3 py-1 rounded-lg">
            Full stack
          </span>
        </div>
  
        {/* Fluent In Row */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Fluent In</span>
          <div className="flex space-x-2">
            <span className="border border-gray-300 text-gray-600 text-sm px-3 py-1 rounded-lg">
              Bengali
            </span>
            <span className="border border-gray-300 text-gray-600 text-sm px-3 py-1 rounded-lg">
              English
            </span>
          </div>
        </div>
      </div>
    );
  }
  
