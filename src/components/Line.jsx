import React from 'react';

const Line = ({ width = '100%', thickness = '2px', color = 'gray' }) => {
  return (
    <hr 
      style={{
        width: width,
        height: thickness,
        backgroundColor: color,
        border: 'none'
      }} 
    />
  );
};

export default Line;