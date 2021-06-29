import { useState } from 'react'
import LoginScreen from './login'
import RegisterScreen from './register'

export const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  return (
    <div>
      {isRegistered ? <RegisterScreen /> : <LoginScreen />}{' '}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        切换到{isRegistered ? '登录' : '注册'}
      </button>
    </div>
  )
}
