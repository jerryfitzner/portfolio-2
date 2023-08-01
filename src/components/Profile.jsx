import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import ProfilePic from "../assets/JerrySmaller.jpg";

const Profile = () => {

  const links = [{
    id: 1,
    title: "LinkedIn",
    icon: <AiOutlineLinkedin />,
    url: 'https://www.linkedin.com/in/jerryfitzner/'
  },{
    id: 2,
    title: "GitHub",
    icon: <AiOutlineGithub />,
    url: 'https://github.com/jerryfitzner'
  },{
    id: 3,
    title: "Blog",
    icon: <SiHashnode />,
    url: 'https://blogs.jerryfitzner.dev'
  }];

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col items-center justify center h-full p-4 md:flex-row'>

      <div className='flex flex-col justify-center h-full'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold'>Jerry Fitzner</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>With a background in technical problem-solving, I collaborate well on a team, communicate clearly, and remain calm in chaotic situations. I learn from failure, thrive on feedback, and am self-driven. My love of software development stems from the challenges it brings to create accessible and easy to use software for all.</p>
      </div>

      <div className='flex flex-col justify-center items-center h-full'>
        <img 
          src={ProfilePic} 
          alt="Profile" 
          className='rounded-2xl mx-auto w-full md:w-2/3'
        />
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
          {links.map(({id, title, icon, url}) => (
            <a href={url} 
            key={id}
            target='_blank'
            rel='noopener noreferrer' 
            className='cursor-pointer duration-300 hover:text-rose-600'>{icon}</a> 
          ))}
        </div>
      </div>

    </section>
  )
}

export default Profile;