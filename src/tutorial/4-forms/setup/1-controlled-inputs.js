import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    id: new Date().getTime().toString(),
    firstName: "",
    email: "",
  });

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      setPeople((people) => [...people, person]);
      setPerson({
        id: new Date().getTime().toString(),
        firstName: "",
        email: "",
      });
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={(e) => {
                const fn = e.target.value;
                setPerson({ ...person, firstName: fn });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Name: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={(e) => {
                const email = e.target.value;
                setPerson({ ...person, email: email });
              }}
            />
          </div>
          <button type="submit">Add person </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
