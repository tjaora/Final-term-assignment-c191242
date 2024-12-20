import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow mt-6 py-6">
      <div className="container mx-auto text-center text-sm text-black">
        <p>© 2024 All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-purple-600">Interviews</a>
          <a href="#" className="text-purple-600">Blogs</a>
          <a href="#" className="text-purple-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
