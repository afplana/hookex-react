import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('First Title')
  const handleTitles = () => {
    setTitle(title === 'Mutated Title' ? 'First Title': 'Mutated Title');
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleTitles}>change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
