import Image from "next/image"

function SmallCard({ img, location, distance }) {
  return (
    <div className='flex items-center m-2 hover:bg-gray-100 rounded-lg cursor-pointer hover:scale-105 transition transform duration-300 '>
        <div className='relative w-16 h-16'>
            <Image 
              className='rounded-lg'
              src={img}
              layout='fill'
              alt='image'
            />
        </div>
        <div className='px-3 flex flex-col font-normal'>
            <h2>{location}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard