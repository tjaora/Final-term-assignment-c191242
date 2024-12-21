import React, { useState, useEffect } from "react";
import Image from 'next/image'

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
            <div className="relative text-left flex flex-row -mt-12 ml-10">
                <picture>
                <img
                    src="https://mocktrails.com/uploads/medium/cc257a5a2b10bbc5862717147902b9ad_medium-870x1200.jpg" // Replace with your image path
                    alt="Profile"
                    className="h-28 w-28 rounded-full border-4 border-white"
                />
                </picture>
                
                <div className="mt-10 space-x-2 ">
                <h1 className="text-3xl font-bold mt-2 text-gray-900">Abir Khan</h1>
                <p className="text-gray-900 text-xl">Senior Software Engineer at <strong>Growth Garage</strong></p>
                <div className="text-gray-900 flex flex-col">
                    <div>Bangladesh</div>
                    <div>Active 7 days ago</div>
                    <div>Responds in 1 hour</div>
                    </div>
                </div>
                
                <picture className="relative flex flex-row mt-14 ml-40 gap-4 -right-80">
                <img src="../public/chat-icon.jpeg" alt="chat" className="h-10 w-10 rounded-2xl shadow-md"/>
                <img src="../public/favorite-icon.png" alt="Mark favorite" className="h-10 w-10 rounded-2xl shadow-md"/>
               </picture>   
               
               
            </div>
        </div>
    );
}

