'use client';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const WindyMap = ({ lat, lon }) => {
    const mapRef = useRef(null);
    const [mapInstance, setMapInstance] = useState(null);

    useEffect(() => {
        const options = {
            key: 'WDPw7fLbaGeR3RBVpGQhpNnhR3auU3tC', // Replace with your Windy API key
            verbose: true,
            lat: lat || 35.1731,
            lon: lon || 129.0714,
            zoom: 7,
            overlay: 'wind',
            noUI: true,
        };

        const initWindy = async () => {
            try {
                if (typeof windyInit !== 'undefined') {
                    windyInit(options, windyAPI => {
                        const { map, colors } = windyAPI;

                        map.dragging.disable();
                        map.touchZoom.disable();
                        map.doubleClickZoom.disable();
                        map.scrollWheelZoom.disable();
                        map.boxZoom.disable();
                        map.keyboard.disable();
                        map.tap?.disable();

                        const tileLayer = map.getPane('tilePane');
                        tileLayer.style.filter = 'saturate(0.3)';

                        const mapContainer = map.getContainer();
                        mapContainer.style.pointerEvents = 'none';

                        colors.wind.changeColor(
                            [[0,[16,119,176,255]],
                            [1,[16,119,176,255]]]
                        );

                        setMapInstance(map);
                    });
                }
            } catch (error) {
                console.error("Error initializing Windy map:", error);
            }
        };

        const checkWindy = setInterval(() => {
            if (typeof windyInit !== 'undefined') {
                clearInterval(checkWindy);
                initWindy();
            }
        }, 100);

        return () => clearInterval(checkWindy);
    }, []);

    useEffect(() => {
        if (mapInstance && lat && lon) {
            mapInstance.setView([lat, lon], 7);
        }
    }, [lat, lon, mapInstance]);

    return (
        <>
            <Script
                src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
                strategy="lazyOnload"
            />
            <Script
                src="https://api.windy.com/assets/map-forecast/libBoot.js"
                strategy="lazyOnload"
            />

            <div
                id="windy"
                ref={mapRef}
                style={{
                    width: '100%',
                    height: '85%'
                }}
                className='mt-2'
            ></div>
        </>
    );
};

export default WindyMap;