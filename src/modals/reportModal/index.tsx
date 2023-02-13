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

interface Props {
    showModal: boolean,
    setShowModal: (value:boolean) => void,
    type: 'user' | 'project' | 'spot',
    projectId:string
}

const projectOptions = [
    'Dane samochodu nie są prawidłowe',
    'Zdjęcia nie przedstawiają niczego związanego z motoryzacją',
    'Projekt łamie regulamin'
]

export const ReportModal:FC<Props> = ({ setShowModal, showModal, type, projectId }) => {
    const dispatch = useDispatch()
    const [selectedOptions, setSelectedOptions] = useState({0:false, 1:false, 2:false})
    const [reportText, setReportText] = useState('')
    const typeReportDisplay = type==='project'?'projekt':type==='user'?'użytkownika':'spotkanie'
    
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
                <h1>
                   Zgłoś {typeReportDisplay}
                </h1>

                Zaznacz dlaczego chcesz głosić {typeReportDisplay}?

                <div className='reportModal__options'>
                    {
                        projectOptions.map((option, index) => (
                            <div 
                                className='reportModal__options-item' 
                                style={{backgroundColor: selectedOptions[index as keyof typeof selectedOptions]?'#273':'rgba(38, 38, 38, .5)'}}
                                onClick={() => setSelectedOptions({...selectedOptions,[index as keyof typeof selectedOptions]:!selectedOptions[index as keyof typeof selectedOptions]})}
                            >
                                {option}
                            </div>
                        ))
                    }
                </div>
                <textarea onChange={(text)=> setReportText(text.target.value)} rows={4} className='reportModal__options-message'  placeholder='Jeżeli jest to coś innego, napisz tutaj'/>

                <div 
                    onClick={() => sendReport()} 
                    className='reportModal__container-button'
                >
                    Wyślij
                </div>

             </div>
         </motion.div>
       }
    </AnimatePresence>
  )
}
