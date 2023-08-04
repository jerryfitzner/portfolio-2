import React, { useState } from 'react';
import { AiOutlineRightSquare } from 'react-icons/ai';

const ProjectCard = ({id, name, alt, imgsrc, code, demo, bullets}) => {
  const [detailWindow, setDetailWindow] = useState(false);

  const linkClick = (link) => {
    window.open(link, '_blank', 'noreferrer')
  };

  const square = <AiOutlineRightSquare />;




  return (
    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
      <div 
        className='relative duration-200 hover:scale-105 hover:border-2 hover:rounded-lg'
        onClick={() => setDetailWindow(!detailWindow)}
      >
        
        <img 
          src={imgsrc} 
          alt={alt} 
          // onMouseOver={e => {
          //   setDetailWindow(true)
          //   console.log('Mouse Over')
          // }} 
          // onMouseOut={e => {
          //   setDetailWindow(false)
          //   console.log('Mouse Out')
          // }}
          className='rounded-lg'
        />
        <div 
          className='absolute inset-0 opacity-0 hover:opacity-95 w-full justify-center items-center dark:bg-gray-900 bg-white dark:bg-opacity-95 bg-opacity-95 rounded-lg'
        >
          <p className='text-3xl text-center font-semibold pt-20'>Project Details</p>
        </div>
      </div>
        <p className='text-sm text-center pt-1'>CLICK IMAGE FOR DETAILS</p>
      <div className='flex items-center justify-center'>
        <button onClick={() => linkClick(demo)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded-md  hover:text-rose-600 hover:border-rose-600'>Demo</button>
        <button onClick={() => linkClick(code)} href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded-md  hover:text-rose-600 hover:border-rose-600'>Code</button>
      </div>
      {detailWindow ? (
          <div>
            <ul className='list-disc list-outside py-4 px-8' >
              {bullets.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </ul>
          </div>
        ): null }
    </div>
  )
}

export default ProjectCard;