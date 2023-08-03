import React from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Scroll = () => {
  return (
    <div>
      <Link to='header' smooth duration={500} className="fixed bottom-5 right-5 text-4xl cursor-pointer duration-300 hover:text-rose-600 hover:scale-105">
        {<BsFillArrowUpSquareFill />}
      </Link>
    </div>
  )
}

export default Scroll