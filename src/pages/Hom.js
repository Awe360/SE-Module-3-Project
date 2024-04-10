import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentColor, setCurrentColor] = useState("#ff0000");
  const [colors, setColors] = useState(["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00"]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div className="container">
      <div className="hospital">
        <div className="building"></div>
        <div className="roof"></div>
        <div className="sign" style={{ color: currentColor }}>Hospital Management System</div>
        <div className="ambulance"></div>
      </div>
    </div>
  );
};

export default Home;
