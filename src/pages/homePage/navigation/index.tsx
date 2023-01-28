import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import './styles.scss'
import { Navigate, useNavigate, Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useAuth from '../../../hooks/useAuth';

const links = [
  { name: "Start", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "News", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 }
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export const Navigation:React.FC<{open:any, cycleOpen: (value:any) => void}> = ({open, cycleOpen}) =>{
  const navigate = useNavigate();

  const { user }:any = useAuth()

  return (
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
                <div className='Navigation_exit-button' onClick={()=>cycleOpen(false)}>
                    <IoCloseSharp size={45} color={'white'}/>
                </div>

                {links.map(({ name, to, id }) => (
                    <motion.a
                        key={id}
                        href={to}
                        whileHover={{ scale: 1.1 }}
                        variants={itemVariants}
                        onClick={() => {
                          user?navigate('app'):navigate('start')
                          console.log('xd')}
                        }
                    >
                      <Link to='/start'>
                      {name}
                      </Link>
                    </motion.a>
                ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
  )
}
