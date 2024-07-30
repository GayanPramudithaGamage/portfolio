import React from 'react'
import github from '../assests/img/github.jpg'

function ProjectCard({project}) {
  return (
    <div>
        <div className='container mx-auto bg-white relative rounded-lg'>
            <div className='w-80 text-center p-4 shadow-lg space-y-5 h-96 '>
                <h1 className='text-2xl font-bold'>{project.name}</h1>
                <img className='border' src={project.image} alt='projectimage'/>
                <div className='grid grid-rows-2 grid-flow-col gap-1 list-none font-mono text-xs'>
                    {(project.technologies).map((tech) => (
                        <li className='p-1 bg-slate-300 rounded-lg mx-1'>{tech}</li>
                    ))}
                </div>
                <div className='flex flex-row space-x-2 text-sm absolute bottom-5 px-6 justify-between'>
                    <a className='bg-green-500 text-white rounded-lg p-2 ' href={project.url}>Live Preview</a>
                    <div className='flex flex-row bg-black text-white rounded-lg p-2'>
                         <a href={project.github}>Check On GitHub </a>
                         <img className='size-6 mx-1' src={github} alt='github'/>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard