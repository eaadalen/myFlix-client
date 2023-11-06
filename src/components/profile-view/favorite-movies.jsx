import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FavoriteMovies ({ favoriteMovieList }) {
    const storedToken = localStorage.getItem("token");
    const [token, setToken] = useState(storedToken ? storedToken : null);
    function findMovie(movieName) {
        console.log(movieName);
        fetch(
          "https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/movies/" + String(movieName),
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return data;
          });
      }
    return (
        <div>
            <h2>Favorite Movies</h2>
            {favoriteMovieList.map((movies) => {
                let test = findMovie(movies);
                console.log(test);
                return (
                    <div key={movies._id}>
                        <img src={movies.ImagePath}/>
                        <Link to={`/movies/${movies._id}`}>
                            <h4>{movies.Title}</h4>
                        </Link>
                        <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from List</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default FavoriteMovies