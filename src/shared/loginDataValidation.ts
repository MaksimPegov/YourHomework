import { Email } from '@mui/icons-material'
import { validateEmail } from './validateEmail'

export type UserData = {
  email: string
  password: string
}
const onlySpaces = (str: string): boolean => {
  return /^\s*$/.test(str)
}

export const loginDataValidation = (user: UserData) => {
  const response = {
    status: false,
    email: true,
    password: true,
    message: 'User data is not valid',
  }

  if (!user.email || onlySpaces(user.email)) {
    response.message = 'Email is required'
    response.email = false
    return response
  } else if (!user.password || onlySpaces(user.password)) {
    response.message = 'Password is required'
    response.password = false
    return response
  } else if (user.password.length < 6) {
    response.message = 'Password must be at least 6 characters'
    response.password = false
    return response
  } else if (!validateEmail(user.email)) {
    response.message = 'Email is not valid'
    response.email = false
    return response
  } else {
    response.status = true
    response.message = 'User data is valid'
    return response
  }
}

