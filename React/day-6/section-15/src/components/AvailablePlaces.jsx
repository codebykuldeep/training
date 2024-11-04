import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces,SetAvailablePlaces] =useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]= useState();

  useEffect(()=>{
    async function  fetchPlaces() {
      try {
        const response = await fetch('http://localhost:3000/places');
        const {places} = await response.json();

        if(!response.ok){
          throw new Error('Failed to fetch Places');
        }

        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          )
          SetAvailablePlaces(sortedPlaces);
        })
       

      } catch (error) {
        setError({message: error.message || 
          'Could not fetch places.Please try again later'
        });
      }

      
      setIsLoading(false);
    }
    fetchPlaces();
  },[])

  if(error){
    return <Error title={'An error occurred'} message={error.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}







// fetch('http://localhost:3000/places')
    // .then(response=>{
    //   return response.json();
    // })
    // .then(data=>SetAvailablePlaces(data.places));