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
  // const [projects, setProejcts] = useState<CarprojectData[] | null>(null)
  const user = {name: 'Dawid'}
  const dispatch = useDispatch()
  const _projects:any = useSelector(selectProjects)
  const [lastVisible, setLastVisible] = useState<any>(null)
  //const projects = useProjects(user ,3, dispatch)
  const projectsRef = collectionGroup(db, 'projects')
  const projectsQuery = query(projectsRef,  limit(3), orderBy('createdAt', 'desc'),)


  useEffect(()=> {
    const getProjects = async () => {
        onSnapshot(projectsQuery, (snapchot) => {  
          console.log('se') 
            dispatch(setProjectsState(snapchot.docs.map((doc, i)=> {
                return doc.data()
            })))  
        })

        const documentSnapshots = await getDocs(projectsQuery);
        setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length-1])
    } 

    getProjects()
  }, [])

  return (
    <div className='projects'>
      {_projects&&
        _projects.projects?.map((project:any, id:number)=> {
          return (
            <Project lastVisible={lastVisible} setLastVisible={setLastVisible} project={project} idInApp={id} projectsCount={_projects.projects.length}/>
          )
        })
      }
    </div>
  )
}
