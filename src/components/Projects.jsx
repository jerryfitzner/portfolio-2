import React from 'react';
import SFPic from '../assets/SF.coverimage.png';
import ICAPic from '../assets/ICA.coverimage.png';

const Projects = () => {
  // const [numOfProj, setNumOfProj] = useState(0);

  const projects = [
    {
      id: 0,
      name: 'Incident Command App',
      imgsrc: ICAPic,
      alt: 'Incident Command Project Photo',
      code: 'https://github.com/jerryfitzner/incident-command',
      demo: 'https://youtu.be/A_xAV2Jx0zs'
    },
    {
      id: 1,
      name: 'Student Fundraising App',
      imgsrc: SFPic,
      alt: 'Student Fundraising Project Photo',
      code: 'https://github.com/jerryfitzner/phase-3-project-frontend',
      demo: 'https://youtu.be/kVg8fz3EWW8'
    },
  ]

  // const num 

  const linkClick = (link) => {
    window.open(link, '_blank', 'noreferrer')
  }

  return (
    <div name='projects' className='w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
        {projects.map(({id, name, alt, imgsrc, code, demo}) => (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={imgsrc} alt={alt} className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button onClick={() => linkClick(demo)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button onClick={() => linkClick(code)} href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;