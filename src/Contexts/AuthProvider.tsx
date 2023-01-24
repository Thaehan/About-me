import { ReactElement, createContext, useState } from 'react'

interface IAuthContext {
  userId: string
  role: string
  isLogin: boolean
  token: string
  setIsLogin: (value: boolean) => void
  setUserId: (value: string) => void
  setRole: (value: string) => void
  setToken: (value: string) => void
}

const initialValue = {
  userId: '',
  role: '',
  isLogin: false,
  token: '',
  setIsLogin: () => {},
  setRole: () => {},
  setUserId: () => {},
  setToken: () => {},
}

export const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [userId, setUserId] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [isLogin, setIsLogin] = useState<boolean>(false)

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userId,
        setUserId,
        role,
        setRole,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
