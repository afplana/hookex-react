import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removePeople = (idx) => {
    setPeople(people.filter(person => person.id !== idx))
  }

  return(
    <>
      <h2>useState array example</h2>
      {
        people.map((person) => {
          const {id, name} = person;
          console.log(person);
          return <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePeople(id)}>x</button>
          </div>
        })
      }
      <button className='btn' onClick={() => setPeople([])}>Clear</button>
    </>
  )
};

export default UseStateArray;
