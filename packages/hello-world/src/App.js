import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input.component';

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const getThird = () => {
    return !(first ^ second);
  };

  const handleOnChange = (event) => {
    const { target } = event;
    if (target.id === 'first') setFirst(!first);
    else if (target.id === 'second') setSecond(!second);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main className="app-main">
        <Input
          type="checkbox"
          id="first"
          labelText="First"
          value={first}
          onChange={handleOnChange}
        ></Input>
        <Input
          type="checkbox"
          id="second"
          labelText="Second"
          value={second}
          onChange={handleOnChange}
        ></Input>
        <Input
          type="checkbox"
          id="third"
          labelText="Third"
          value={getThird()}
          disabled={getThird()}
        ></Input>
      </main>
    </div>
  );
}

export default App;
