import React from 'react';
import ITILPIC from '../assets/ITIL4Foundation.png';
import LinPic from '../assets/linux-essentials-certificate.png';
import CompAPic from '../assets/comptiaA.png';
import CCNAPic from '../assets/ccna.png';


const Certs = () => {

  const certItems = [
    {
      id: 1,
      logo: CCNAPic,
      name: 'CCNA',
      alt: 'Cisco Certified Network Associate',
      link: 'https://www.credly.com/badges/a962597f-0c73-4988-b865-4a99c0f4c8c9/public_url',
      color: 'hover:text-ccna',
    },
    {
      id: 2,
      logo: CompAPic,
      name: 'CompTIA A+',
      alt: 'CompTIA A+',
      link: 'https://www.credly.com/badges/bb40c61d-8e8e-4f54-872b-b46d441b5b33',
      color: 'hover:text-comptia',
    },
    {
      id: 3,
      logo: LinPic,
      name: 'Linux Foundations',
      alt: 'Linux Foundations',
      link: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000657460/3tq7l2v8uh',
      color: 'hover:text-linux',
    },
    {
      id: 4,
      logo: ITILPIC,
      name: 'ITIL 4 Foundation',
      alt: 'ITIL 4 Foundation',
      link: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565',
      color: 'hover:text-itil',
    }
  ];

  return (
    <div name='certifications' className='w-full items-center'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline p-2 border-b-4 border-gray-500 '>Certifications</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {certItems.map(({logo, name, id, alt, link, color}) => (
            <div key={id} className={`shadow-md hover:scale-105  py-8 rounded-lg cursor-pointer duration-300 ${color} dark:shadow-white dark:shadow-sm`}>
              <a 
                href={link} 
                target='_blank'
                rel='noopener noreferrer' 
                className='flex justify-center w-20 mx-auto text-7xl pb-3'>
                  <img alt={alt} src={logo} />
              </a>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certs;