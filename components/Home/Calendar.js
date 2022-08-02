import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react'
import { UsersIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';

function Calendar({ resetInput, location }) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(startDate)
    const [guests, setGuests] = useState(1)

    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const handleGuestsChange = e => {
        setGuests(e.target.value)
    }

    const handleCancel = e => {
        resetInput()
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests
            }
        })
        resetInput()
    }


  return (
    <section className='flex flex-col items-center'>
        <div className='flex justify-center'>
            <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
                onChange={handleSelect}
                showMonthAndYearPickers={false}
            />
        </div>
        <div className='flex items-center justify-between w-80 border-b mb-3 bg-gray-100 px-3 py-2 rounded-md shadow-sm'>
            <h2 className='text-l font-semibold pl-2'>Number of guests</h2>
            <div  className='flex'>
                <UsersIcon 
                    className='h-6'
                />
                <input 
                    type='number'
                    value={guests}
                    min={1}
                    onChange={handleGuestsChange}
                    className='w-12 pl-3 ml-3 bg-gray-100 flex-none focus:outline-none text-bold text-l'
                />
            </div>
        </div>
        <div className='flex w-80 justify-evenly'>
            <button 
                className='border border-solid border-gray-400 bg-gray-50 text-gray-500 px-3 py-1 rounded-full hover:scale-105 active:scale-100 ease-out duration-150'
                onClick={handleCancel}    
            >Cancel</button>
            <button onClick={handleSearch} className='bg-red-400 text-white px-3 py-1 rounded-full hover:scale-105 active:scale-100 ease-out duration-150'>Search</button>
        </div>
    </section>
  )
}

export default Calendar