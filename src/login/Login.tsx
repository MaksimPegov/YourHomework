import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Box, Link, Button } from '@mui/material'
import { MailOutline, VpnKey } from '@mui/icons-material'
import './Login.scss'

export const Login: React.FC = () => {
  const navigate = useNavigate()
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
            sx={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <MailOutline sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="E-mail" variant="standard" />
          </Box>
          <Box
            className="Container__password"
            sx={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <VpnKey sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Password" variant="standard" />
          </Box>
        </form>
        <Button
          className="Container__button"
          variant="contained"
          color="inherit"
          sx={{ mt: 3 }}
        >
          Sign in
        </Button>
      </div>
      <div className="Login__Register">
        Don't have an account?{' '}
        <Link href="/registration" color="inherit">
          Registration
        </Link>
      </div>
    </motion.div>
  )
}

