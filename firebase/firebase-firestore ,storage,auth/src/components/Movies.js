import React, { useCallback, useEffect, useState } from 'react'

import { addDoc, collection, getDocs } from 'firebase/firestore';
import {auth, db } from '../config/firebase';
import Movie from './Movie';

function Movies() {
    const [movieList, setMovieList] = useState([]);

    // New Movie States
    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newReleaseDate, setNewReleaseDate] = useState(0);
    const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);
  
    // Update Title State
    
  
  
    const moviesCollectionRef = collection(db, "movies");
  
    const getMovieList = useCallback(async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    },[moviesCollectionRef])
  
    useEffect(() => {
      getMovieList();
    }, [getMovieList]);

    const onSubmitMovie = async () => {
      try {
        await addDoc(moviesCollectionRef, {
          title: newMovieTitle,
          releaseDate: newReleaseDate,
          receivedAnOscar: isNewMovieOscar,
        //   userId: auth?.currentUser?.uid,
        });
        getMovieList();
      } catch (err) {
        console.error(err);
      }
    };
  
  
  return (
    <>
    {auth?.currentUser ? (
        <div className='container'>
        <div className='movie-form'>
         <input
           placeholder="Movie title..."
           onChange={(e) => setNewMovieTitle(e.target.value)}
         />
         <input
           placeholder="Release Date..."
           type="number"
           onChange={(e) => setNewReleaseDate(Number(e.target.value))}
         />
         <input
           type="checkbox"
           checked={isNewMovieOscar}
           onChange={(e) => setIsNewMovieOscar(e.target.checked)}
         />
         <label> Received an Oscar</label>
         <button onClick={onSubmitMovie}> Submit Movie</button>
       </div>
       <div>
         {movieList.map((movie) => (
         <Movie movie={movie} getMovieList={getMovieList}/>
         ))}
       </div>
     </div>
    ) :
    (<div className='container'> Please sign up</div>)}
    </>
  )
}

export default Movies