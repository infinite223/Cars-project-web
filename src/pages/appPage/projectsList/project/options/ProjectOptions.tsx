import React, { useEffect } from 'react'
import './styles.scss'
import { FaRegShareSquare } from 'react-icons/fa'
import { BiCopy } from 'react-icons/bi'
import { MdReportGmailerrorred } from 'react-icons/md'
import { motion, AnimatePresence } from "framer-motion"

interface ProjectOptionsProps {
    setShowOptions: (value: boolean) => void
    showOptions: boolean
}

export const ProjectOptions:React.FC<ProjectOptionsProps> = ({showOptions, setShowOptions}) => {

    useEffect(()=> {
        showOptions&&setTimeout(()=>setShowOptions(false), 7000)
    }, [showOptions])

    const lolxD = (e:any) =>  {
        if (!e) var e:any = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) {
            e.stopPropagation();
            setShowOptions(false)
        }
    }

  return (
    <AnimatePresence>
        {showOptions &&

            <motion.div className='project_background' 
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => setShowOptions(false)}
            >         
             <motion.div onClick={(e)=> e.stopPropagation()} className='project_options'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale:1 }}
                    exit={{ scale: 0, opacity: 0  }}
                >
                    <div className='option'>
                        <FaRegShareSquare size={20}/>
                        <div>Udostępnij w aplikacji</div>
                    </div>
                    <div className='option'>
                        <BiCopy size={20}/>
                        <div>Kopiuj link</div>
                    </div>
                    <div className='option red'>
                        <MdReportGmailerrorred size={20}/>
                        <div>Zgłoś projekt</div>
                    </div>
                </motion.div>       
            </motion.div>
           
        }
    </AnimatePresence>
  )
}
