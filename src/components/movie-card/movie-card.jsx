import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);
  /*var present = false;
  const toggleFavorite = () => {
    for (let i = 0; i < (user.FavoriteMovies.length); i++) {
      if (movie._id == user.FavoriteMovies[i]) {
        present = true;
      }
    }
	}
  toggleFavorite();*/
  const addFavorite = () => {
		fetch(
      "https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/users/" + String(user.Username) + "/movies/" + String(movie._id),
      {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				alert(String(movie.Title) + " added to favorites");
			} else {
				alert("Failed to add " + String(movie.Title) + " to favorites");
			}
		})
	}
  const removeFavorite = () => {
		fetch(
      "https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/users/" + String(user.Username) + "/favorites/" + String(movie._id),
      {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				alert(String(movie.Title) + " removed from favorites");
			} else {
				alert("Failed to remove " + String(movie.Title) + " from favorites");
			}
		})
	}
  //if (present == true) {
    return (
      <Card className="h-100">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Director.Name}</Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
            <Button variant="link">Open</Button>
          </Link>
          <button id="add" className="favorites" onClick={addFavorite}>Add to Favorites</button>
          <button id="remove" className="favorites" onClick={removeFavorite}>Remove from Favorites</button>
        </Card.Body>
      </Card>
    );
  }
  /*else {
    return (
      <Card className="h-100">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Director.Name}</Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
            <Button variant="link">Open</Button>
          </Link>
          <button id="add" className="favorites" onClick={addFavorite}>Add to Favorites</button>
        </Card.Body>
      </Card>
    );
  }
}*/

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
};
