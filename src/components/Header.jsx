import React, { useState} from 'react';
// https://react-icons.github.io/react-icons/
import { MdNightsStay, MdWbSunny } from 'react-icons/md';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Header = ({darkMode, setDarkMode}) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'projects'
    },
    {
      id: 3,
      link: 'experience'
    },
    {
      id: 4,
      link: 'contact'
    },
  ];

  return (
    <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-lg'>Jerry Fitzner</h1>
        <ul className='hidden md:flex'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200'
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
              <MdWbSunny className='text-2xl cursor-pointer'/>
            ):(
              <MdNightsStay className='text-2xl cursor-pointer'/>
          )}
        </div>
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-4 z-10 md:hidden'
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>
      </nav>
    </header>
  )
}

export default Header;