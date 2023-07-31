import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import { ProfilePic } from "../assets/JerrySmaller.jpg";

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
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
      <h2 className='text-5xl text-rose-600 uppercase font-bold'>Jerry Fitzner</h2>
      <h3>Software Engineer</h3>
      <p>With a background in technical problem-solving, I collaborate well on a team, communicate clearly, and remain calm in chaotic situations. I learn from failure, thrive on feedback, and am self-driven. My love of software development stems from the challenges it brings to create accessible and easy to use software for all.</p>
    </section>
  )
}

export default Profile;