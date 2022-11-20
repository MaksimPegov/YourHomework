import { motion } from 'framer-motion'
// import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Registation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      Registation
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

