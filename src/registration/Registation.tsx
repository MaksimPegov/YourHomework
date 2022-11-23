import {
  MailOutline,
  PersonAdd,
  Visibility,
  VisibilityOff,
  VpnKey,
} from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Link,
} from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onlySpaces } from '../shared/dataValodation'
import { userDataValidation } from '../shared/userDataValidation'
import './Registration.scss'

export const Registation: React.FC = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    emailError: false,
    passwordError1: false,
    passwordError2: false,
    showPassword1: false,
    showPassword2: false,
    passwordConfirm: false,
    canLog: false,
    errorMessage: '',
  })

  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  })
  const [password2, setPassword2] = React.useState('')

  useEffect(() => {
    if (
      !onlySpaces(userData.email) &&
      userData.email.length > 5 &&
      userData.email.includes('@') &&
      !onlySpaces(userData.password) &&
      userData.password.length > 5 &&
      !onlySpaces(password2) &&
      password2.length > 5
    ) {
      setState((old) => ({ ...old, canLog: true }))
    } else {
      setState((old) => ({ ...old, canLog: false }))
    }

    setState((old) => ({
      ...old,
      errorMessage: '',
    }))
  }, [userData.email, userData.password, password2])

  const hidePassword1 = (): void => {
    setState((prevState) => ({
      ...prevState,
      showPassword1: !prevState.showPassword1,
    }))
  }
  const hidePassword2 = (): void => {
    setState((prevState) => ({
      ...prevState,
      showPassword2: !prevState.showPassword2,
    }))
  }
  const hadnleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prevState) => ({
      ...prevState,
      email: event.target.value.trim(),
    }))
    setState((prevState) => ({
      ...prevState,
      emailError: false,
    }))
  }
  const hadnlePasswordChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prevState) => ({
      ...prevState,
      password: event.target.value.trim(),
    }))
    setState((prevState) => ({
      ...prevState,
      passwordError1: false,
      passwordError2: false,
    }))
  }
  const hadnlePasswordChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword2(event.target.value)
    setState((prevState) => ({
      ...prevState,
      passwordError2: false,
    }))
  }

  const handleLogin = (): void => {
    if (userData.password !== password2) {
      setState((prevState) => ({
        ...prevState,
        passwordError2: true,
        errorMessage: 'Passwords do not match',
      }))
    } else {
      let resp = userDataValidation(userData)

      if (resp.status) {
        console.log(resp.message)
        // navigate('/mainPage')
      } else if (!resp.status && resp.emailError) {
        console.log(resp.message)
        setState((old) => ({
          ...old,
          emailError: resp.emailError,
          errorMessage: resp.message,
        }))
      } else if (!resp.status && resp.passwordError) {
        console.log(resp.message)
        setState((old) => ({
          ...old,
          passwordError: resp.passwordError,
          errorMessage: resp.message,
        }))
      } else {
        console.log('Something went wrong')
      }
    }
  }

  return (
    <motion.div
      className="Registration"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Registration__Container">
        <div className="Registration__Container__Header">
          <PersonAdd sx={{ m: 'auto', pr: 1, fontSize: 30 }} />{' '}
          <div className="Registration__Container__Header__text">Create your account</div>
        </div>
        <form autoComplete="off">
          <Box
            className="Container__email"
            sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}
          >
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="standard-basic"
              label="Your e-mail"
              error={state.emailError}
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
              <InputLabel
                htmlFor="standard-adornment-password"
                error={state.passwordError1}
              >
                Your password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={state.showPassword1 ? 'text' : 'password'}
                error={state.passwordError1}
                onChange={hadnlePasswordChange1}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      tabIndex={-1}
                      aria-label="toggle password visibility"
                      onClick={hidePassword1}
                    >
                      {state.showPassword1 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box
            className="Container__password"
            sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}
          >
            <VpnKey sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                error={state.passwordError2}
              >
                Repeat password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={state.showPassword2 ? 'text' : 'password'}
                error={state.passwordError2}
                onChange={hadnlePasswordChange2}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      tabIndex={-1}
                      aria-label="toggle password visibility"
                      onClick={hidePassword2}
                    >
                      {state.showPassword2 ? <Visibility /> : <VisibilityOff />}
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
          disabled={!state.canLog}
          sx={{ mt: 4 }}
          onClick={handleLogin}
        >
          Registrate
        </Button>

        {state.emailError || state.passwordError2 || state.passwordError1 ? (
          <div className="Login__Container__Error">{state.errorMessage}</div>
        ) : null}
      </div>
      <div className="Registrration__Login">
        If you have an accouunt{' '}
        <Link href="/login" color="inherit" sx={{ fontWeight: 'bold' }}>
          Sign in
        </Link>
      </div>
    </motion.div>
  )
}

