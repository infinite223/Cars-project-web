import './styles.scss'
import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaRegShareSquare } from 'react-icons/fa'
import { BiCopy } from 'react-icons/bi'
import { MdReportGmailerrorred } from 'react-icons/md'

interface Props {
    showOptions: boolean,
    setShowOptions: (value:boolean) => void
}

export const OptionsProject:FC<Props> = ({setShowOptions, showOptions}) => {
    return (
        <AnimatePresence>
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
                        <div className='optionsProject__container-option red'>
                            <MdReportGmailerrorred size={20}/>
                            <div>Zgłoś ten projekt</div>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>

    )
}