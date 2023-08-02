import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full py-[14%] '>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Contact</p>
          <p className='py-6'>Please connect with me on LinkedIn!</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/6470ac1d-7bed-4d03-a10e-a5ca422e7487" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input 
              type="text" 
              name='name' 
              placeholder='Name' 
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none' 
            />
            <input 
              type="text" 
              name='email' 
              placeholder='Email' 
              className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none' 
            />
            <textarea 
              name="message" 
              rows="10"
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
              placeholder='Message'
              >
              
              </textarea>
              <button className='px-6 py-3 my-8 border-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300  hover:text-rose-600 hover:border-rose-600'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;