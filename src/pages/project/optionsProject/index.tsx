import './styles.scss'
import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    showOptions: boolean,
    setShowOptions: (value:boolean) => void
}

export const OptionsProject:FC<Props> = ({setShowOptions, showOptions}) => {
    return (
        <AnimatePresence>
            <motion.div onClick={()=>setShowOptions(false)} className='optionsProject'  key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} style={{display:showOptions?'flex':'none'}}>
                dasdsa
            </motion.div>
        </AnimatePresence>

    )
}