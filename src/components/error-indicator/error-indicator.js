import React from 'react';
import './error-indicator.css'
import icon from './images.jpg'

const ErrorIndicator = () => {
    return(
      <div className="error-indicator card text-center">
        <img src={icon} alt="error"/>
        <div className="card-body">
           <p>Oops!!!</p>
           <p>Something went wrong.</p>
           <p>Don't worry, we have already sent drones!!!</p>
        </div>
      </div>
    );
};

export default ErrorIndicator;
