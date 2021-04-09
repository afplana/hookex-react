import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);
  const complexIncrease = () => { 
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return <>
    <h2>useState counter example</h2>
    <section style={{margin: '4rem 0'}}></section>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
    <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
    <button className='btn' onClick={() => setValue(0)}>reset</button>
    
    <h2>complex counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={complexIncrease}>Increase Later</button>
  </>;
};

export default UseStateCounter;
