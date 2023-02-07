import React, { useState } from 'react'
import { getColorsCircle } from '../../../../utils/functions/colorsCircle'
import { CarprojectData } from '../../../../utils/types'
import './styles.scss'
import { BsFillShareFill, BsHeart, BsThreeDotsVertical } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { ProjectOptions } from './options/ProjectOptions'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collectionGroup, getDocs, limit, onSnapshot, orderBy, query, startAfter } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux';
import { setProjectsState } from '../../../../reducers/projectsSlice'
import { selectProjects } from './../../../../reducers/projectsSlice';
import { db } from '../../../../firebase/config'

interface Props {
    projectsCount:number,
    project:CarprojectData, 
    idInApp:number,
    lastVisible:any,
    setLastVisible: (value:any) => void
}

export const Project:React.FC<Props> = ({project: {car, author, id, createdAt, place} ,idInApp, projectsCount, setLastVisible, lastVisible}) => {
    const colors = car.performance && getColorsCircle(car.performance[0].value, car.performance[0].type)
    const [showOptions, setShowOptions] = useState(false)
    const projectsRef = collectionGroup(db, 'projects')
    const projectsQuery = query(projectsRef,  limit(3), orderBy('createdAt', 'desc'),)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const projects:any = useSelector(selectProjects)


    const updateProjects = async () => {
        if(projectsCount==idInApp+1){

            if(projects.projects?.length){
                console.log('tuu')

                const next = query(projectsRef, orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(2))
    
                onSnapshot(next, async (snapchot) => {   
                    if(snapchot.docs[0]){
    
                        const nextProjects = snapchot.docs.map((doc, i)=> {
                            return doc.data()
                        })
                        console.log(nextProjects)
                        dispatch(setProjectsState(projects.projects.concat(nextProjects)))
                        const documentSnapshots = await getDocs(next);
                        setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length-1])
                    }    
                })
          
            }
        }
    }

    return (
    <motion.div className='project' 
            // onViewportEnter={}
         onViewportEnter={()=> updateProjects()}>
        <div className='project_author'>Dodany przez: 
            <span style={{color:'white'}}> {author.name}</span>
        </div>
        <div style={{alignItems:'center', display:'flex', flexDirection:'column', gap:'10px'}} onClick={() => navigate(`./../project/${id}`, { state: {car, author, id, createdAt, place}})}> 
            <div className='project_nav' >
                <div className='project_nav-data'>
                {(car.performance && colors ) &&<>
                    <div className='project_nav-data-model' style={{fontSize:17, marginRight:10, color: getColorsCircle(car.performance[0].value, car.performance[0].type)[0]}}>
                        {car.model}
                    </div>
                    <div className='project_nav-data-CarMake'>
                        {car.CarMake}
                    </div>
                    </>}
                </div>

                {(car.performance && colors )&&<div className='project_nav-performance'>
                    <div className='project_nav-performance-gradient'
                        style={{background: `linear-gradient(90deg, 
                            ${colors[0]} 0%, 
                            ${colors[1]} 46%,
                            ${colors[2]} 100%)`}}

                        >
                        {car.history.length===0?'STOCK':'STAGE '+car.history.length}
                    </div>
                
                    <div className='project_nav-performance-data'>
                        <div style={{color: colors[0]}}>
                            {car.performance[0].value}
                        </div>
                        <div className="type">hp</div>
                    </div>
                    <div className='project_nav-performance-data'>
                        <div style={{color: colors[0]}}>
                            {car.performance[1].value}
                        </div>
                        <div className="type">Nm</div>
                    </div>
                </div>}
            </div>

            <img loading='lazy' src={car.imagesCar[0].url} className="project_image"/>
        </div>
        <div className='project_footer'>
            <div className='project_footer-icons'>
                <FiHeart color="white" size={26} className="icon"/>
                <BsFillShareFill color='white' size={24} className="icon"/>
                {/* <div className='likes'>{car.likes.length} polubień</div> */}
            </div>
            <div className='project_footer-options' onClick={() =>setShowOptions(true)}>
                <BsThreeDotsVertical color='white' size={24} className="icon"/>
            </div>
        </div>
        <div className='project_details'>
            <div className='likes'>{car.likes.length} polubień</div>
            <div className='project_footer-date'> 1 day ago </div>
        </div>

        <ProjectOptions showOptions={showOptions} setShowOptions={setShowOptions}/>
    </motion.div>
  )
}
