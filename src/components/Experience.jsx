import React from 'react';
import { BiLogoHtml5, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoCss3, BiLogoNodejs } from 'react-icons/bi';
import { SiRubyonrails } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';

const Experience = () => {

  const experienceLogos = [
    {
      logo: <BiLogoHtml5 />,
      name: 'HTML',
      alt: '',
      link: '',
      color: 'hover:text-html',
    },
    {
      logo: <BiLogoJavascript />,
      name: 'JavaScript',
      alt: '',
      link: '',
      color: 'hover:text-javascript',
    },
    {
      logo: <BiLogoReact />,
      name: 'React',
      alt: '',
      link: '',
      color: 'hover:text-react',
    },
    {
      logo: <BiLogoNodejs />,
      name: 'Node.js',
      alt: '',
      link: '',
      color: 'hover:text-node',
    },
    {
      logo: <SiRubyonrails />,
      name: 'Rails',
      alt: '',
      link: '',
      color: 'hover:text-rails',
    },
    {
      logo: <DiRuby />,
      name: 'Ruby',
      alt: '',
      link: '',
      color: 'hover:text-ruby',
    },
    {
      logo: <BiLogoCss3 />,
      name: 'CSS 3',
      alt: '',
      link: '',
      color: 'hover:text-css',
    },
    {
      logo: <BiLogoTailwindCss />,
      name: 'TailWind CSS',
      alt: '',
      link: '',
      color: 'hover:text-tailwind',
    }
  ];

  return (
    <div name='experience' className='w-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline p-2 border-b-4 border-gray-500'>Experience</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {experienceLogos.map(({logo, name, alt, link, color}) => (
            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer duration-300 ${color} `}>
              <a href='' className='w-20 mx-auto text-5xl'>{logo}</a>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience;