import React from 'react'
import Button from './atoms/Button/Button'
import logo from './logo.svg'
import './themes/App.scss'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img alt="logo" className="App-logo" src={logo} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button color="primary" title="Envoyer" onClick={() => console.log('yeah')} />
    </header>
  </div>
)

export default App
