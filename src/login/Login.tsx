import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import {
  TextField,
  Box,
  Link,
  Button,
  InputAdornment,
  IconButton,
  Input,
  FormControl,
  InputLabel,
} from '@mui/material'
import { MailOutline, VpnKey, VisibilityOff, Visibility } from '@mui/icons-material'
import './Login.scss'
import { loginDataValidation } from '../shared/loginDataValidation'
import { validateEmail } from '../shared/validateEmail'

export const Login: React.FC = () => {
  const [state, setState] = React.useState({
    emailError: false,
    passwordError: false,
    showPassword: false,
    canLog: false,
  })
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    console.log('email or password changed')
  }, [userData.email, userData.password])

  const hidePassword = (): void => {
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }))
  }
  const hadnleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }))
    setState((prevState) => ({
      ...prevState,
      emailError: false,
    }))
  }
  const hadnlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prevState) => ({
      ...prevState,
      password: event.target.value,
    }))
    setState((prevState) => ({
      ...prevState,
      passwordError: false,
    }))
  }

  const handleLogin = (): void => {
    console.log(loginDataValidation(userData))
  }

  return (
    <motion.div
      className="Login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Login__Container">
        <div className="Login__Container__Header">Authorization</div>
        <form autoComplete="off">
          <Box
            className="Container__email"
            sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}
          >
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="standard-basic"
              label="E-mail"
              variant="standard"
              sx={{ width: '100%' }}
              onChange={hadnleEmailChange}
            />
          </Box>
          <Box
            className="Container__password"
            sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}
          >
            <VpnKey sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={state.showPassword ? 'text' : 'password'}
                onChange={hadnlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={hidePassword}
                    >
                      {state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </form>
        <Button
          className="Container__button"
          variant="contained"
          color={'info'}
          // disabled={!state.canLog}
          sx={{ mt: 4 }}
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </div>
      <div className="Login__Register">
        Don't have an account?{' '}
        <Link href="/login" color="inherit">
          Registration
        </Link>
      </div>
    </motion.div>
  )
}

