import { useRouter } from 'next/router'
import format from 'date-fns/format'
import InfoCard from './InfoCard'
import Map from './Map'

function Results({ searchResults }) {

    const router = useRouter()
    const { location, startDate, endDate, guests } = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

  return (
    <section className='flex-grow pt-14 px-4'>
        <div className=''>
            <p className='text-gray-500'>300+ Stays - {formattedStartDate} to {formattedEndDate} - for {guests} guests</p>
            <h1 className='text-3xl font-semibold mt-2'>Stays in {location.toUpperCase()}</h1>
        </div>
        <div className='hidden md:inline-flex m-5 gap-2'>
            <button className='filter'>Cancellation Fexibility</button>
            <button className='filter'>Type of Place</button>
            <button className='filter'>Price</button>
            <button className='filter'>Rooms and Beds</button>
            <button className='filter'>More filters</button>
        </div>
        <div className='flex'>
            <div className='flex grow flex-col pr-5'>
                {searchResults?.map(({img, location, title, description, star, price, total, long, lat}) => (
                    <InfoCard 
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                        long={long}
                        lat={lat}
                    />
                ))}
            </div>
            <div className='hidden xl:inline-flex xl:w-[550px] 2xl:w-[700px]'>
                <Map searchResults={searchResults} />
            </div>
        </div>
    </section>
  )
}

export default Results