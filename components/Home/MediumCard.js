import Image from "next/image"

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 duration-300">
        <div className="relative w-80 h-80">
            <Image 
                className='rounded-lg'
                src={img}
                layout='fill'
                alt='image'
            />
        </div>
        <h3 className="mt-2 text-2xl">{title}</h3>
    </div>
  )
}

export default MediumCard