import React from 'react';
import Colors from './Colors.js';

export default function App() {
  const colorsList = [
    { name: 'Red', rgb: { red: 255, green: 0, blue: 0 } },
    { name: 'White', rgb: { red: 255, green: 255, blue: 255 } },
    { name: 'Black', rgb: { red: 0, green: 0, blue: 0 } },
    { name: 'Blue', rgb: { red: 0, green: 0, blue: 255 } }
  ];
  return (
    <>
      <Colors colors={colorsList} />
    </>
  );
}
