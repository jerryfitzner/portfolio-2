import React from 'react';
import { BiLogoHtml5, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoCss3, BiLogoNodejs } from 'react-icons/bi';
import { SiRubyonrails } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';

const Skills = () => {

  const experienceLogos = [
    {
      id: 1,
      logo: <BiLogoHtml5 />,
      name: 'HTML',
      alt: '',
      link: 'https://www.w3schools.com/html/',
      color: 'hover:text-html',
    },
    {
      id: 2,
      logo: <BiLogoJavascript />,
      name: 'JavaScript',
      alt: '',
      link: 'https://www.w3schools.com/js/',
      color: 'hover:text-javascript',
    },
    {
      id: 3,
      logo: <BiLogoReact />,
      name: 'React',
      alt: '',
      link: 'https://legacy.reactjs.org/',
      color: 'hover:text-react',
    },
    {
      id: 4,
      logo: <BiLogoNodejs />,
      name: 'Node.js',
      alt: '',
      link: 'https://nodejs.org/en',
      color: 'hover:text-node',
    },
    {
      id: 5,
      logo: <SiRubyonrails />,
      name: 'Rails',
      alt: '',
      link: 'https://rubyonrails.org/',
      color: 'hover:text-rails',
    },
    {
      id: 6,
      logo: <DiRuby />,
      name: 'Ruby',
      alt: '',
      link: 'https://www.ruby-lang.org/en/',
      color: 'hover:text-ruby',
    },
    {
      id: 7,
      logo: <BiLogoCss3 />,
      name: 'CSS 3',
      alt: '',
      link: 'https://www.w3schools.com/css/',
      color: 'hover:text-css',
    },
    {
      id: 8,
      logo: <BiLogoTailwindCss />,
      name: 'TailWind CSS',
      alt: '',
      link: 'https://tailwindcss.com/',
      color: 'sm:hover:text-tailwind',
    }
  ];

  return (
    <div name='skills' className='w-full items-center'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline p-2 border-b-4 border-gray-500 '>Skills</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {experienceLogos.map(({logo, name, id, alt, link, color}) => (
            <div key={id} className={`shadow-md hover:scale-105  py-2 rounded-lg cursor-pointer duration-300 ${color} dark:shadow-white dark:shadow-sm`}>
              <a 
                href={link} 
                target='_blank'
                rel='noopener noreferrer' 
                className='flex justify-center w-20 mx-auto text-7xl pb-3'>
                  {logo}
              </a>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;