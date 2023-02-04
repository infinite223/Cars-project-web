import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { add, formatRelative } from 'date-fns';
import './styles.scss'
import { Place } from '../../utils/types';

const libraries:("places" | "drawing" | "geometry" | "localContext" | "visualization")[]= ['places']
const center = {lat: 44, lng:-90}
const newlocate = {lat: -34, lng: 151}

export const MapView:React.FC<{place:Place, setPlace: (value:Place) => void}> = ({place, setPlace}) => {
    const [mapInstance, setMapInstance] = useState<any>()
    const [marker, setMarker] = useState({lat:0, lng: 0});
    const { isLoaded, loadError } =  useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API?process.env.REACT_APP_GOOGLE_MAPS_API:'',
            libraries
        })

    const onMapClick = useCallback((event:any)=> {
        if(event.latLng){
            console.log(event.latLng?.lat())
            setMarker({lat:event.latLng?.lat(), lng: event.latLng?.lng()})
        }
    },[])

    const mapRef = useRef<any>()
    const onMapLoad = useCallback((lat:number, lng:number)=> {
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(14)
    }, [])

    const panTo = useCallback((map:any)=> {
        mapRef.current = map
    }, [])

  return (
    <>
     <Search setPlace={setPlace} panTo={panTo}/>
     <GoogleMap
       // ref={mapRef}
        zoom={10}
        center={{
            lat: place.latitude?place.latitude:0,
            lng:place.longitude?place.longitude:0
        }}
        mapContainerClassName='mapView'
        onClick={onMapClick}
        // onLoad={onMapLoad}
        onLoad={(map) =>setMapInstance(map)}
    >
        {mapInstance &&<Marker
            position={{
                lat: place.latitude?place.latitude:0,
                lng:place.longitude?place.longitude:0
            }}
        />}
   </GoogleMap>
    </>
   
  )
}

const Search:React.FC<{setPlace: (value: Place) => void, panTo:(value: {lat:number, lng:number}) => void}> = ({setPlace, panTo}) => {
    const { ready, value, suggestions: { status, data, loading }, setValue, clearSuggestions} = usePlacesAutocomplete()

    return (
        <div className='search-place'>
            <Combobox onSelect={async (address) => {
               try {
                    const results = await getGeocode({address})
                    const { lat, lng } = await getLatLng(results[0])
                    setPlace({city: address, latitude:lat, longitude:lng})
  
               } catch (error) {
                
               }
            }}>
                <ComboboxInput className='searchInput' value={value} onChange={(text)=> {
                    setValue(text.target.value)
                }}
                    placeholder="Enter your address"
                />
                <ComboboxPopover>
                    {status === 'OK' && data.map(({description}, id) => (
                        <ComboboxOption className='option' key={id} value={description}/>
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
