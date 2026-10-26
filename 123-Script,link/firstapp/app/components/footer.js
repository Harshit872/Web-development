import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer  className="flex justify-around  bg-slate-800 text-white py-4">
            <div className='text-center'>Copyright 0 Facebook | All rights reserved
            </div>
            <ul className='flex gap-2'>
                <a href='/'> <li className='text-xs'>home</li></a>
                <a href='/about'><li className='text-xs'>about</li></a>
                <a href='/contact'><li className='text-xs'>contact</li></a>
            </ul>

        </footer>
    )
}

export default Footer
