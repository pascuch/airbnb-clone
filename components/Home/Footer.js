import React from 'react'

function Footer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-4 bg-gray-100 px-32 py-14 gap-y-10 gap-x-4'>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>News room</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Combating discrimination</p>
            <p>Safety information</p>
            <p>Supporting people with disabilities</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>HOSTING</h5>
            <p>Try hosting</p>
            <p>AirCover for Hosts</p>
            <p>Explore hosting resourcesors</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>AIRBNB</h5>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Gift cards</p>
            <p>Help Center</p>
        </div>
    </section>
  )
}

export default Footer