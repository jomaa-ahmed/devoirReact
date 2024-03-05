import React, { useState, useEffect } from 'react';

function Home() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isVisible && <p>Welcome to our Competition world </p>}
        </>
    );
}

export default Home;
