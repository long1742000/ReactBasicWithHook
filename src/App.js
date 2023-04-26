import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

import React, { useState } from 'react';

function App() {

  // state
  let [name, setName] = useState("Long");
  let [data, setData] = useState("");

  const change = (event) => {
    setData(event.target.value);
  }

  const clicked = (event) => {
    setName(data);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}
        </p>
        <input type='text' onChange={(event) => { change(event) }}></input>
        <button onClick={(event) => { clicked(event) }}>Send data</button>
      </header>
    </div>
  );
}

export default App;
