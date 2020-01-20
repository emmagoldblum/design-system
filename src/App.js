import React, { useState } from 'react'
import Button from './atoms/Button/Button'
import './themes/App.scss'
import { Input } from './atoms/Input/Input'
import { ButtonWithLoading } from './molecules/ButtonWithLoading'

export const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const mockApiResponse = () => setTimeout(() => setIsLoading(false), 2000)
  return (
    <div className="App">
      <div className="grid-item">
        <Input label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid-item">
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="grid-item">
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
      </div>
    </div>
  )
}

export default App
