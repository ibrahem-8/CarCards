
import React from 'react';
import './CarCard.css';


const CarCard = ({ car }) => {
  return (
    <div className="card" style={{borderColor:car.color,borderWidth:'20px'}}>
      <img src={car.image} alt={car.model} />
      <h2>{car.model}</h2>
      <p>{car.description}</p>
    </div>
  );
};

export default CarCard;
