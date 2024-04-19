import React from 'react';
import '../App.css';

function CustomCursor() {
    const [position, setPosition] = React.useState({ x: -100, y: -100 });

    React.useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="firework-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <div className="spark"></div>
        </div>
    );
}
export default CustomCursor;
