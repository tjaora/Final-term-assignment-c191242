import React from "react";

export default function BackgroundSection() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Background</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-600">Skills</p>
          <span className="badge badge-outline badge-primary">Full stack</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Fluent in</p>
          <div className="space-x-2">
            <span className="badge badge-primary">Bengali</span>
            <span className="badge badge-primary">English</span>
          </div>
        </div>
      </div>
    </div>
  );
}
