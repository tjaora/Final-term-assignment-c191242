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
                    className="h-64 w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("https://mocktrails.com/uploads/big/43e8485bd686c86b6f4b28e7932a9337_big-1280x853.jpeg")`,
                    }}
                />
            )}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
                <img
                    src="https://mocktrails.com/uploads/medium/cc257a5a2b10bbc5862717147902b9ad_medium-870x1200.jpg" // Replace with your image path
                    alt="Profile"
                    className="h-24 w-24 rounded-full border-4 border-white"
                />
                <h1 className="text-2xl font-bold mt-2 ">Abir Khan</h1>
                <p>Senior Software Engineer at Growth Garage</p>
                <p>Bangladesh | Active 7 days ago | Responds in 1 hour</p>
            </div>
        </div>
    );
}

