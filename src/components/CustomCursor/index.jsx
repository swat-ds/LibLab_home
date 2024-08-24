import React from 'react';
import './style.css';

export const CustomCursor = () => {
    const cursorRef = React.useRef(null);

    React.useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const handleMouseOverLink = () => {
            cursorRef.current.style.backgroundColor = 'red'; // Change the color when hovering over a link
        };

        const handleMouseOutLink = () => {
            cursorRef.current.style.backgroundColor = 'white'; // Revert to the original color when not hovering over a link
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseover', handleMouseOverLink);
            link.addEventListener('mouseout', handleMouseOutLink);
        });

        // Cleanup event listeners when the component is unmounted
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a').forEach(link => {
                link.removeEventListener('mouseover', handleMouseOverLink);
                link.removeEventListener('mouseout', handleMouseOutLink);
            });
        };
    }, []);

    return <div className="app-cursor" ref={cursorRef} />;
};