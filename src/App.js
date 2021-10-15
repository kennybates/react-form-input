//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  // state variables
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email){
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty value');
    }
  };

  

  return (
    <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'> Name : </label>
          <input 
            type='text' 
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            />
        </div>

        <div className='form-control'>
          <label htmlFor='email'> email : </label>
          <input 
            type='text' 
            id='email'
            name='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <button type='submit'> 
          Submit
        </button>
      </form>
      {
        //Map people array to create list of people onSubmit
        people.map((person, index) => {
          const {id, firstName, email} = person; //destructor object
          return <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
    </>
  );
}

export default App;
