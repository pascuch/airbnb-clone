import Image from "next/image"

function LargeCard({ img, title, description, buttonText}) {
  return (
    <section className="relative py-16">
        <div className="relative min-w-[300px] h-96">
            <Image 
                className="rounded-2xl"
                src={img}
                objectFit='cover'
                layout="fill"
                alt='image'
            />
        </div>
        <div className="absolute top-32 left-16">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard