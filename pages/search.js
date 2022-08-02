import React from 'react'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import Results from '../components/Search/Results'

function Search({ searchResults }) {


  return (
    <div>
        <Header />
        <Results searchResults={searchResults}/>
        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://jsonkeeper.com/b/5NPS')
                                .then(r => r.json())

    return {
        props: {
            searchResults
        }
    }
}