import { dataValidation, onlySpaces, validateEmail } from './dataValodation'

export type UserData = {
  email: string
  password: string
}

export const userDataValidation = (user: UserData) => {
  const response = {
    status: false,
    email: false,
    password: false,
    message: 'User data is not valid',
  }
  const emailCheck = dataValidation(user.email)
  const passwordCheck = dataValidation(user.password)

  if (!emailCheck.status) {
    response.message = emailCheck.message
    response.email = true
  } else if (!passwordCheck.status) {
    response.message = passwordCheck.message
    response.password = true
  } else if (user.email.includes(' ')) {
    response.message = 'You cant use spaces in e-mail'
    response.email = true
  } else if (user.password.includes(' ')) {
    response.message = 'You cant use spaces in password'
    response.password = true
  } else if (!user.email || onlySpaces(user.email)) {
    response.message = 'Email is required'
    response.email = true
  } else if (!user.password || onlySpaces(user.password)) {
    response.message = 'Password is required'
    response.password = true
  } else if (user.password.length < 6) {
    response.message = 'Password must be at least 6 characters'
    response.password = true
  } else if (user.password.length > 30) {
    response.message = 'Password cant be longer 30 characters'
    response.password = true
  } else if (!validateEmail(user.email)) {
    response.message = 'Email is not valid'
    response.email = true
  } else {
    response.status = true
    response.message = 'User data is valid'
  }
  return response
}

