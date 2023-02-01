import React from 'react'
import './styles.scss'
import { motion } from 'framer-motion'

export const RulesLink = () => {
  return (
    <motion.div className='rules' animate={{opacity: [.5, 1]}}>
        <h1 className='links_content-header'>Regulamin</h1>
    </motion.div>
  )
}
