import Image from "next/image"
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function InfoCard({img, location, title, description, star, price, total, long, lat}) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg duration-300 first:border-t">
        <div className="relative w-40 h-24 md:w-80 md:h-52 flex-shrink-0">
            <Image 
                className="rounded-2xl"
                src={img}
                layout='fill'
                objectFit="cover"
                alt='image'
            />
        </div>
        <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
                <h2>{location}</h2>
                <HeartIcon className="h-7 cursor-pointer"/>
            </div>
            <h4 className="text-xl">{title}</h4>
            <div className="border-b w-12 pt-2"/>
            <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
            <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400" />
                    {star}
                </p>
                <div>
                    <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                    <p className="text-right font-light">{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard