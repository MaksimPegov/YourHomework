import { MailOutline, VpnKey } from '@mui/icons-material'
import { Box, FormControl, Input, InputLabel, TextField } from '@mui/material'
import { motion } from 'framer-motion'
// import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Registation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      Registation
      {/* <div className="Registration__Container">
        <div className="Registration__Container__Header">Authorization</div>
        <form autoComplete="off">
          <Box
            className="Container__email"
            sx={{ display: 'flex', alignItems: 'flex-end', mt: 1 }}
          >
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="standard-basic"
              label="E-mail"
              // error={state.emailError}
              variant="standard"
              sx={{ width: '100%' }}
              // onChange={hadnleEmailChange}
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
                // error={state.passwordError}
              >
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                // type={state.showPassword ? 'text' : 'password'}
                error={state.passwordError}
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
          disabled={!state.canLog}
          sx={{ mt: 4 }}
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </div> */}
      <button
        onClick={() => {
          navigate('/login')
        }}
      >
        button
      </button>
    </motion.div>
  )
}

