import Image from "next/image"
import LargeCard from "./LargeCard"
import MediumCard from "./MediumCard"
import SmallCard from "./SmallCard"

function Main({ smallCardData, mediumCardData}) {

    return (
        <div className="max-w-6xl mx-auto px-8 sm:px-16">
            <section>
                <h2 className="text-4xl font-semibold p-4">Explore Nearby</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {smallCardData?.map(e => (
                        <SmallCard 
                            key={e.location}
                            img={e.img}
                            location={e.location}
                            distance={e.distance}
                        />
                    )) }
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-semibold p-4">Live Anywhere</h2>
                <div className="flex overflow-scroll h-96 scrollbar-hide p-3 -ml-3">
                    {mediumCardData?.map(e => (
                        <MediumCard 
                            key={e.title}
                            img={e.img}
                            title={e.title}
                        />
                    ))}
                </div>
            </section>
            <section>
                <LargeCard 
                    img='http://links.papareact.com/4cj'
                    title='The Greatest Outdoors'
                    description='Wishlists curated by Airbnb.'
                    buttonText='Get Inspired'
                />
            </section>
        </div>
  )
}

export default Main
