import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <div name='contact' className='w-full py-[20%] '>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Contact</p>
          
        </div>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex justify-center items-center mx-auto w-1/2'>
            <form action="https://getform.io/f/6470ac1d-7bed-4d03-a10e-a5ca422e7487" method='POST' className='flex flex-col w-full'>
            <p className='py-6 text-center font-light text-lg'>Please feel free to send me a message! </p>
              <input 
                type="text" 
                name='name' 
                placeholder='Name' 
                className='p-2 bg-transparent border-2 rounded-md focus:outline-none hover:border-rose-600' 
              />
              <input 
                type="text" 
                name='email' 
                placeholder='Email' 
                className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none hover:border-rose-600' 
              />
              <textarea 
                name="message" 
                rows="10"
                className='p-2 bg-transparent border-2 rounded-md focus:outline-none  hover:border-rose-600'
                placeholder='Message'
                >
                
                </textarea>
                <button className='px-6 py-3 my-8 border-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300  hover:text-rose-600 hover:border-rose-600'>Send</button>
            </form>
          </div>
          <div className='flex flex-col justify-center items-center mx-auto w-1/2 '>
            <a
            href='https://www.linkedin.com/in/jerryfitzner/'
            target='_blank'
            rel='noopener noreferrer' 
            className='flex flex-col justify-center items-center cursor-pointer duration-300 hover:text-rose-600 hover:scale-110 '
            >
              <p className='py-6 font-light text-lg '>I'd love to connect on LinkedIn!</p>
              <div className='text-9xl'>
              {<AiOutlineLinkedin />}
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;