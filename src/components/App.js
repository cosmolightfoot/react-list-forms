import React from 'react';
import CreateColor from './CreateColor.js';
import Color from './Color.js';


export default function App() {
  return (
    <>
      <CreateColor />
      <Color name="black" hex="#000000" />
    </>
  );
}
