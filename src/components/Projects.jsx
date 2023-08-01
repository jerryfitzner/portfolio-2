import React, { useState } from 'react';
import SFPic from '../assets/SF.coverimage.png';
import ICAPic from '../assets/ICA.coverimage.png';

const Projects = () => {
  // const [numOfProj, setNumOfProj] = useState(0);

  const projects = [
    {
      id: 1,
      name: 'Incident Command App',
      imgsrc: ICAPic,
      alt: 'Incident Command Project Photo',
      code: '',
      demo: ''
    },
    {
      id: 2,
      name: 'Student Fundraising App',
      imgsrc: SFPic,
      alt: 'Student Fundraising Project Photo',
      code: '',
      demo: ''
    },
  ]

  // const num 

  return (
    <div name='projects' className='w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
        {projects.map(({id, name, alt, imgsrc, code, demo}) => (
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={imgsrc} alt={alt} className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;