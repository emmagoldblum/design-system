import React, { useState } from 'react'
import Button from './atoms/Button/Button'
import logo from './logo.svg'
import './themes/App.scss'
import { ButtonWithLoading } from './molecules/ButtonWithLoading'

export const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const mockApiResponse = () => setTimeout(() => setIsLoading(false), 2000)
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonWithLoading
          color="primary"
          isLoading={isLoading}
          title="Envoyer"
          variant="contained"
          onClick={() => {
            setIsLoading(true)
            mockApiResponse()
          }}
        />
        <Button color="secondary" title="annuler" />
        <Button disabled color="primary" title="disabled" variant="contained" />
      </header>
    </div>
  )
}

export default App
