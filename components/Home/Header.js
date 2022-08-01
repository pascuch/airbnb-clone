import React from 'react'
import Image from 'next/image'
import Logo from '../../images/Airbnb_Logo.png'
import { 
    SearchIcon ,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UserIcon
 } from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
        <div className='relative flex items-center h-10 w-24 '>
            
            <Image 
                className='cursor-pointer justify-items-start '
                src='http://links.papareact.com/qd3'
                layout='fill'
                objectFit='contain'
                // objectPosition='left'
                alt='image'
            />
        </div>
        <div className='flex border-2 rounded-full w:82 md:w-96 shadow-sm'>
            <input 
                placeholder='Start your search'
                type='text'
                className='flex-grow focus:outline-none pl-4 rounded-full text-gray-600 placeholder:text-gray-400'
            />
            <SearchIcon 
                className="hidden md:inline-flex text-white h-8 bg-red-400 rounded-full p-2 cursor-pointer m-1 hover:bg-red-300"
            />
        </div>
        <div className='flex items-center justify-end gap-x-4 text-gray-500'>
            <p className='hidden md:inline cursor-pointer hover:text-gray-400'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer hover:text-gray-400'/>
            <div className='flex border-2 rounded-full items-center h-9 shadow-sm px-2 gap-1'>
                <MenuIcon className='h-6 cursor-pointer hover:text-gray-400'/>
                <UserCircleIcon className='h-6 cursor-pointer hover:text-gray-400'/>
            </div>
        </div>
    </header>
  )
}

export default Header