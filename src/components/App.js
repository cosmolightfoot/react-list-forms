import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'going home',
    about: 'yadayadayada me again',
    blog: 'still working on it',
    contact: 'NONE!'
  };

  return (
    <section>
      <Sidebar>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );  
}
