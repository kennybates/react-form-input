//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {

  // state variables
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email){
      const person = {firstName, email};
      console.log(person);
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
            id='text'
            name='firstName'
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            />
        </div>

        <div className='form-control'>
          <label htmlFor='email'> email : </label>
          <input 
            type='text' 
            id='text'
            name='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <button type='submit' className='btn'> 
          Submit
        </button>
      </form>
    </article>
    </>
  );
}

export default App;
