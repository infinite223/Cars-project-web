import React from 'react'
import './styles.scss'
import { FC } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../reducers/loadingSlice';
import { setMessage } from '../../reducers/messageSlice';
import { Car, User } from '../../utils/types';
import { IoMdClose } from 'react-icons/io';
import useAuth from '../../hooks/useAuth';

interface Props {
    showModal: boolean,
    setShowModal: (value:boolean) => void,
}

export const CreateProjectModal:FC<Props> = ({ setShowModal, showModal}) => {
    const dispatch = useDispatch()
    const { user }:any = useAuth()

  return (
    <AnimatePresence>
       {showModal &&
         <motion.div 
            className='createProjectModal' 
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='createProjectModal_container'>

            </div>
        </motion.div>
       }
    </AnimatePresence>
  )
}
