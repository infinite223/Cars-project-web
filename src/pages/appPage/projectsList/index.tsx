import React, { useState, useMemo } from 'react'
import { Project } from './project'
import { CarprojectData } from '../../../utils/types'
import './styles.scss'
import { useProjects } from './../../../hooks/useProjects';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjects, setProjectsState } from '../../../reducers/projectsSlice';
import { collectionGroup, getDocs, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase/config';

export const ProjectsList = () => {
  const dispatch = useDispatch()
  const projects :any = useSelector(selectProjects)
  const [lastVisible, setLastVisible] = useState<any>(null)



  return (
    <div className='projects'>
      {projects&&
        projects?.map((project:any, id:number)=> {
          return (
            <Project key={id} lastVisible={lastVisible} setLastVisible={setLastVisible} project={project} idInApp={id} projectsCount={projects.length}/>
          )
        })
      }
    </div>
  )
}
