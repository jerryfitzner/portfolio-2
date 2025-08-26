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
    <section name='home' className='h-screen w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center lg:h-full px-4 md:flex-row'>

      <div className='flex flex-col justify-center md:h-full'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold'>Jerry Fitzner</h2>
        <h3 className='py-3 text-2xl'>IT Networking <br/> Software <br/> Volunteer</h3>
        <p className='max-w-xl font-light text-gray-500 pb-6'>Proficient in technology, with a strong background in IT/Web Support, software programming, and team leadership. Combining technical skills with experience in law enforcement to excel in teamwork, clear communication, and composure in chaotic environments. Embracing failure as an opportunity for growth, while valuing feedback for self-improvement. Desiring to enhance others' experiences through passion for technology and overcoming its challenges.</p>
      </div>

      <div className='flex flex-col justify-center md:h-full'>
        {/* <div className='justify-center'> */}
        <img 
          src={ProfilePic} 
          alt="Profile" 
          className='rounded-2xl mx-auto w-5/6 md:w-2/3'
        />
        <div className='flex justify-evenly mx-auto py-8 lg:py-16 text-3xl w-full md:w-1/3'>
          {links.map(({id, title, icon, url}) => (
            <a href={url} 
            key={id}
            target='_blank'
            rel='noopener noreferrer' 
            className='cursor-pointer duration-300 hover:text-rose-600'>{icon}</a> 
          ))}
        </div>
        {/* </div> */}
      </div>

      </div>
    </section>
  )
}

export default Profile;