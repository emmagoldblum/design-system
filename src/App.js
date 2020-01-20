import { faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { ButtonWithLoading } from './molecules/ButtonWithLoading/ButtonWithLoading'
import FormInput from './molecules/FormInput/FormInput'
import './themes/App.scss'

export const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const mockApiResponse = () => setTimeout(() => setIsLoading(false), 2000)
  const emailError = '' === email ? 'Ce champ est obligatoire' : undefined
  const passwordError = '' === password ? 'Ce champ est obligatoire' : undefined
  return (
    <div className="App">
      <div className="grid-item">
        <FormInput
          required
          error={emailError}
          icon={faUserCircle}
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid-item">
        <FormInput
          required
          error={passwordError}
          icon={faLock}
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
          disabled={emailError || passwordError}
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
