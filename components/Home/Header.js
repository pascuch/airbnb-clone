import React from 'react'
import Image from 'next/image'
import {
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
 } from '@heroicons/react/solid'
import SearchBar from './SearchBar'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()

  return (
    <header className='relative sticky top-0 z-40 grid grid-cols-3 bg-white shadow-md p-5'>
        <div onClick={() => router.push('/')} className='relative flex items-center h-10 w-24 '>
            <Image 
                className='cursor-pointer justify-items-start'
                src='http://links.papareact.com/qd3'
                layout='fill'
                objectFit='contain'
                alt='image'
            />
        </div>
        <SearchBar className='absolute top-32'/>
        <div className='flex h-10 items-center justify-end gap-x-4 text-gray-500'>
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