'use client';

import { useState, useEffect, useRef } from 'react';

export default function Grid() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [data, setData] = useState(null);
    const gridRef = useRef(null);

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyAfZbGUWpif8YB63j63UKVbsTplI8ZdvBE', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        location: {
                            latitude: 37.419734,
                            longitude: -122.0827784,
                        },
                        extraComputations: [
                            "HEALTH_RECOMMENDATIONS",
                            "DOMINANT_POLLUTANT_CONCENTRATION",
                            "POLLUTANT_CONCENTRATION",
                            "LOCAL_AQI",
                            "POLLUTANT_ADDITIONAL_INFO"
                        ],
                    }),
                }
            );
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = () => {
        setShowOverlay((prevState) => !prevState);
    };

    const handleOutsideClick = (e) => {
        if (gridRef.current && !gridRef.current.contains(e.target)) {
            setShowOverlay(false);
        }
    };

    useEffect(() => {
        fetchData();
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex min-h-screen items-center">
            <div className="grid grid-cols-3 gap-4" ref={gridRef}>
                <div onClick={handleClick}>1</div>
                <div>2</div>
                <div>3</div>
                <div className="col-span-2">4</div>
                <div>5</div>
                <div>6</div>
                <div className="col-span-2">7</div>
            </div>

            {showOverlay && data && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                    <div className="bg-black/60 text-white p-8 rounded-md max-w-xl overflow-hidden">
                        <h2 className="font-bold">Air Quality</h2>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                </div>
            )}
        </div>
    );
}
