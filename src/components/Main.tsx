import React from 'react';

const Main: React.FC = () => {
  return (
    <div 
      className="container" 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh' 
      }}>
      <img 
        src='/favicon-icon.png'
        alt='изображение'
      /> 
    </div>
  )
}

export default Main;