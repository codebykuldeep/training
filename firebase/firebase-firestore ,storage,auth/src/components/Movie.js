import React, { useState } from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

function Movie({ movie, getMovieList }) {
  const [updatedTitle, setUpdatedTitle] = useState(movie.title);

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    console.log(movieDoc);

    await deleteDoc(movieDoc);
    getMovieList();
  };

  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: updatedTitle });
    getMovieList();
  };
  return (
    <div className="movie">
      <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
        {movie.title}
      </h1>
      <p> Date: {movie.releaseDate} </p>

      

      <input
        placeholder="new title..."
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button className="btn-md" onClick={() => updateMovieTitle(movie.id)}>Update Title</button>
      <button className="btn-md" onClick={() => deleteMovie(movie.id)}> Delete Movie</button>
    </div>
  );
}

export default Movie;
