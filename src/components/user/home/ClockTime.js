
import React, { useState, useEffect } from 'react';

export default function ClockTime() {
    
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    return (
        <div>
            <p>{formatTime(currentTime)}</p>
        </div>
    );
};
