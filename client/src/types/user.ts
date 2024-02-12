export interface userRegisterProps {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface userLoginProps {
  email: string
  password: string
}

export interface verifyTokenProps {
  success: boolean
  data?: any
  error: string
}
