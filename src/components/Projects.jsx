import React from 'react';
import SFPic from '../assets/SF.coverimage.png';
import ICAPic from '../assets/ICA.coverimage.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // const [numOfProj, setNumOfProj] = useState(0);
  

  const projects = [
    {
      id: 0,
      name: 'Incident Command App',
      imgsrc: ICAPic,
      alt: 'Incident Command Project Photo',
      code: 'https://github.com/jerryfitzner/incident-command',
      demo: 'https://youtu.be/A_xAV2Jx0zs',
      bullets: [
        'Implemented encrypted password storage through the ‘bcrypt’ gem in rails.',
        'Maintained state utilizing Redux.',
        'Developed a full stack application utilizing REACT on the front end and Rails on the backend.',
        'Utilized Rails to create a functioning API with custom and RESTful routes.'
      ],
    },
    {
      id: 1,
      name: 'Student Fundraising App',
      imgsrc: SFPic,
      alt: 'Student Fundraising Project Photo',
      code: 'https://github.com/jerryfitzner/phase-3-project-frontend',
      demo: 'https://youtu.be/kVg8fz3EWW8',
      bullets: [
        'Utilized REACT with Sinatra to build a full stack web-based application.',
        'Created custom routes to implement full C.R.U.D. on the backend.',
        'Implemented state to maintain various functionality of the application.'
      ],
    },
  ]

  // const num 

  

  return (
    <div name='projects' className='w-full justify-center p-5 items-center '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 items-center justify-center'>
        {projects.map(({id, name, alt, imgsrc, code, demo, bullets}) => (
          <ProjectCard key={id} id={id} name={name} alt={alt} imgsrc={imgsrc} code={code} demo={demo} bullets={bullets} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;