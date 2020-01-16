import React from 'react';
import logo from './logo.svg';
import './themes/App.scss';
import Button from "./atoms/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={() => console.log('yeah')} title="Envoyer"/>
      </header>
    </div>
  );
}

export default App;
