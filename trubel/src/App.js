/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.post('http://localhost:4000/insert', {
          fullName: name,
          companyRole:role
      })
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
                <p>First Name</p>

                <input
                  className = "Name" 
                  type="text"
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                />

                <p> Company Role</p>

                <input 
                  className = "Role"
                  type="text"
                  placeholder = "Role...." 
                  onChange={(e) => {setRole(e.target.value)}}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
      </header>
    </div>
  );
}

export default App;


