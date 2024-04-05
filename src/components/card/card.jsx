import React from 'react';

const Card = ({ width, height, color, children }) => {
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    padding: '20px 30px',
    boxSizing: 'border-box',
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
