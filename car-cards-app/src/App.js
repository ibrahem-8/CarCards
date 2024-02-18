
import React from 'react';
import CarList from './CarList';
import logo from './camry.webp';
import logo1 from './dodge_challenger.jpg';
import logo2 from './Ferrari.jpeg';
import logo3 from './Ford Mustang.jpg';

const cars = [
  {
    model: 'Toyota Camry',
    image: './camry.webp',
    description: 'A reliable and fuel-efficient sedan.',
    color:"blue"
  },
  {
    model: 'Dodge Challenger',
    image: './dodge_challenger.jpg',
    description: 'A reliable and fuel-efficient sedan.',
    color:"red"
  },
  {
    model: 'Ferrari',
    image: './Ferrari.jpeg',
    description: 'A reliable and fuel-efficient sedan.',
    color:"black"
  },
  {
    model: 'Ford Mustang',
    image: './Ford Mustang.jpg ',
    description: 'A reliable and fuel-efficient sedan.',
    color:"yellow"
  },
  
];

function App() {
  return (
    <div className="App">
      <h1>Car Cards App</h1>
      <CarList cars={cars} />
    </div>
  );
}

export default App;
