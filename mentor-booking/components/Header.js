import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-purple-600">MockTrails</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Interviews</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Blogs</a>
        </nav>
        <div className="flex gap-2">
        <button className="btn bg-gray-200 hover:bg-slate-300 border-none">Sign In</button>
        <button className="btn btn-primary">Get Started</button>
        </div>
        
      </div>
    </header>
  );
}
