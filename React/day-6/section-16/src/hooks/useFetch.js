import { useState } from "react";
import { useEffect } from "react";

export function useFetch(fetchFn,initalValue){
    const [isFetching,setIsFetching] =useState(false);
    const [error,setError] =useState();
    const [fetchedData,setFetchedData] = useState(initalValue);
    // const [userPlaces, setUserPlaces] = useState([]);
    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, [fetchFn]);

      return {fetchedData,setFetchedData,isFetching,error};
}