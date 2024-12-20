import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-purple-600">MockTrails</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Interviews</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Blogs</a>
        </nav>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </header>
  );
}
