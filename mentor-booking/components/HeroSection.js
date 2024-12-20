import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Indicate that the component has mounted on the client
    }, []);

    return (
        <div className="relative">
            {isClient && (
                <div
                    className="h-64 w-full bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url("https://mocktrails.com/uploads/big/43e8485bd686c86b6f4b28e7932a9337_big-1280x853.jpeg")`,
                    }}
                />
            )}
            <div className="relative text-left flex -mt-12 ml-10">

                <img
                    src="https://mocktrails.com/uploads/medium/cc257a5a2b10bbc5862717147902b9ad_medium-870x1200.jpg" // Replace with your image path
                    alt="Profile"
                    className="h-24 w-24 rounded-full border-4 border-white"
                />
                <div className="mt-10">
                <h1 className="text-2xl font-bold mt-2 text-gray-900">Abir Khan</h1>
                <p className="text-gray-900">Senior Software Engineer at Growth Garage</p>
                <div className="text-gray-900 flex flex-col">
                    <div>Bangladesh</div>
                    <div>Active 7 days ago</div>
                    <div>Responds in 1 hour</div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

