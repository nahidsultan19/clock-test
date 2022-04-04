import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setClock(new Date())
        }, 1000)


    }, [])
    return (
        <div style={{ backgroundColor: 'lightblue', width: '400px', margin: 'auto', padding: '10px', marginTop: '10px', borderRadius: '20px' }}>
            <h1>Digital Clock</h1>
            <h3>{clock.toLocaleTimeString()}</h3>
            <p>{clock.toLocaleDateString()}</p>
        </div>
    );
};

export default Clock;