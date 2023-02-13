import './styles.scss'
import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaRegShareSquare } from 'react-icons/fa'
import { BiCopy } from 'react-icons/bi'
import { MdReportGmailerrorred } from 'react-icons/md'
import { ReportModal } from '../../../modals/reportModal'
import { useState } from 'react';

interface Props {
    showOptions: boolean,
    setShowOptions: (value:boolean) => void,
    projectId:string
}

export const OptionsProject:FC<Props> = ({setShowOptions, showOptions, projectId}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <AnimatePresence>
            <ReportModal setShowModal={setShowModal} showModal={showModal} type={'project'} projectId={projectId}/>
            {showOptions &&
                <motion.div 
                    onClick={()=>setShowOptions(false)} 
                    className='optionsProject'  
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        key="modal"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }} 
                        onClick={(e)=>e.stopPropagation()}
                        className='optionsProject__container'
                    >
                        <div className='optionsProject__container-option'>          
                            <FaRegShareSquare size={18}/>
                            <div>Udostępnij w aplikacji</div>
                        </div>
                        <div className='optionsProject__container-option'>
                            <BiCopy size={20}/>
                            <div>Kopiuj link</div>
                        </div>
                        <div className='optionsProject__container-option red' onClick={() => {setShowModal(true); setShowOptions(false)}}>
                            <MdReportGmailerrorred size={20}/>
                            <div>Zgłoś projekt</div>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>

    )
}