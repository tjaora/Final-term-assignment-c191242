import React from "react";

export default function SessionSection() {
  const handleBookNow = () => {
    alert("Your booking has been placed!");
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6 text-black">
      <h3 className="text-lg font-bold mb-4 ">Sessions</h3>
      <div className="flex flex-col justify-between place-items-end">
        <div className="flex flex-row border-gray-300 border-2 rounded-xl mb-2 p-2">
          <div className="mr-20 ">
            <p className="text-sm font-semibold">
              Full Stack Developer Mock Interview
            </p>
            <p className="text-sm">45 minutes</p>
          </div>
          <div>
            <p className="text-lg font-bold">4500.00৳</p>
          </div>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
