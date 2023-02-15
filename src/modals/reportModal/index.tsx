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

interface Props {
    showModal: boolean,
    setShowModal: (value:boolean) => void,
    type: 'user' | 'project' | 'spot',
    projectId:string,
    name:string 
}

const projectOptions = [
    'Dane samochodu nie są prawidłowe',
    'Zdjęcia nie przedstawiają niczego związanego z motoryzacją',
    'Projekt łamie regulamin'
]

export const ReportModal:FC<Props> = ({ setShowModal, showModal, type, projectId, name }) => {
    const dispatch = useDispatch()
    const [selectedOptions, setSelectedOptions] = useState({0:false, 1:false, 2:false})
    const [reportText, setReportText] = useState('')
    const typeReportDisplay = type==='project'?'projekt':type==='user'?'użytkownika':'spotkanie'
    const validForm = selectedOptions[0] || selectedOptions[1] || selectedOptions[2] || reportText.length > 4
    const sendReport = () => {
        dispatch(setLoading(true))
        const reportRef = doc(db, `Reports/${projectId}`)

        setDoc(reportRef, {
            type,
            projectId,
            selectedOptions,
            reportText
        })
        .then(()=> {
            dispatch(setLoading(false))
            dispatch(setMessage({  
                show:true, 
                message:'Zgłoszenie zostało wysłane',
                type: 'SUCCESS'
            }))
        })
        .catch(()=> {
            dispatch(setLoading(false))
            dispatch(setMessage({  
                show:true, 
                message:'Coś poszło nie tak, spróbuj później',
                type: 'ERROR'
            }))
        })

        setShowModal(false)
    }

  return (
    <AnimatePresence>
       {showModal &&
         <motion.div 
            className='reportModal' 
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
             <div className='reportModal__container' onClick={(e) => e.stopPropagation()}>
                <nav>
                    <h1>
                        Zgłoś {typeReportDisplay} 
                        <span style={{color:'rgb(210, 30, 30)'}}>
                        {' '+name}
                        </span>
                    </h1>

                    <IoMdClose onClick={()=> setShowModal(false)} size={24} className='close-icon'/>
                </nav>

                Wybierz dlaczego chcesz zgłosić {typeReportDisplay}?

                <div className='reportModal__options'>
                    {
                        projectOptions.map((option, index) => (
                            <div 
                                className='reportModal__options-item' 
                                style={{backgroundColor: selectedOptions[index as keyof typeof selectedOptions]?'rgb(41, 41, 41)':'rgba(38, 38, 38, .5)'}}
                                onClick={() => setSelectedOptions({...selectedOptions,[index as keyof typeof selectedOptions]:!selectedOptions[index as keyof typeof selectedOptions]})}
                            >
                                {option}
                            </div>
                        ))
                    }
                </div>
                <textarea onChange={(text)=> setReportText(text.target.value)} rows={4} className='reportModal__options-message'  placeholder='Jeżeli jest to coś innego, napisz tutaj'/>

                {validForm &&    
                <div 
                    onClick={() => sendReport()} 
                    className='reportModal__container-button'
                    
                >
                    Wyślij
                </div>}

             </div>
         </motion.div>
       }
    </AnimatePresence>
  )
}
