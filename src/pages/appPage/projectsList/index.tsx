import React, { useState } from 'react'
import { Project } from './project'
import { CarprojectData } from '../../../utils/types'
import './styles.scss'
import { useProjects } from './../../../hooks/useProjects';

export const ProjectsList = () => {
  // const [projects, setProejcts] = useState<CarprojectData[] | null>(null)
  const user = {name: 'Dawid'}
  const projects = useProjects(user ,3)
  console.log(projects)
  return (
    <div className='projects'>
      {
        projects.projects?.map((project)=> {
          return (
            <Project {...project} />
          )
        })
      }
    </div>
  )
}
