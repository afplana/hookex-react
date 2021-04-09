import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'Ingri', age: 27, message: 'Dentist in Germany'});
  const changeMessage = () => {
    setPerson({...person, message: 'zahnarztin in deutschland'})
  };

  return (<>
      <h2>useState object example</h2>
      <h3>Person: [name: {person.name} || age: {person.age} || message: {person.message}]</h3>
      <button className='btn' onClick={changeMessage}>Update message</button>
  </>)
};

export default UseStateObject;
