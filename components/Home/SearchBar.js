import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Calendar from './Calendar'
import format from 'date-fns/format'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    const router = useRouter()
    
    const { location, startDate, endDate, guests } = router.query

    const formattedStartDate = startDate && format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = endDate && format(new Date(endDate), 'dd MMMM yy')

    const placeholder = (location && startDate && endDate && guests) ? `${location} | ${formattedStartDate} | ${formattedEndDate} | ${guests} guests` : false 

    const handleInputChange = e => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const resetInput = () => {
        setSearchInput('')
    }

  return (
    <section className='w-82 md:w-96'>
        <div className='flex border-2 rounded-full w:82 md:w-96 shadow-sm'>
            <input
                value={searchInput}
                onChange={e => handleInputChange(e)}
                placeholder={placeholder || 'Start your search'}
                type='text'
                className='flex-grow focus:outline-none pl-4 rounded-full text-gray-600 placeholder:text-gray-400'
            />
            <SearchIcon 
                className="hidden md:inline-flex text-white h-8 bg-red-400 rounded-full p-2 cursor-pointer m-1 hover:bg-red-300"
            />
        </div>
        { searchInput && <Calendar location={searchInput} resetInput={resetInput} />}
    </section>
  )
}

export default SearchBar