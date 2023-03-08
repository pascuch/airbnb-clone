import { getCenter } from 'geolib'
import Image from "next/image"
import { useState } from 'react'
import ReactMapGL, { Marker, Popup }from 'react-map-gl'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import 'mapbox-gl/dist/mapbox-gl.css'

const key = 'pk.eyJ1IjoicGFzY3VjaCIsImEiOiJjbDJzcjVzOWEwMWhsM2RvOXM4c2x3ZDExIn0.MHtq4GI2KxqTHUqG58MfiQ'
const style = 'mapbox://styles/pascuch/cl6c2b2ci000o15rnmhl8zwqu'

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map(e => ({latitude: e.lat, longitude: e.long})) 

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 10
    })

    console.log({selectedLocation})

  return (
    <ReactMapGL
        mapStyle={style}
        mapboxAccessToken={key}
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
    >
      {searchResults?.map(e => (
        <div key={e.lat}>
          <Marker
            longitude={e.long}
            latitude={e.lat}
          >
            <LocationMarkerIcon onClick={() => setSelectedLocation(e)} className="h-7 cursor-pointer text-red-200" />
          </Marker>
          {selectedLocation.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeButton={true}
              closeOnClick={false}
              latitude={selectedLocation.lat}
              longitude={selectedLocation.long}
            >
              {selectedLocation.title}
            </Popup>
          ) : false }
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map