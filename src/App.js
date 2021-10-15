import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  return (
    <>
    <article>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'> Name : </label>
          <input 
            type='text' 
            id='text'
            name='firstName'
            />
        </div>
      </form>
    </article>
    </>
  );
}

export default App;
