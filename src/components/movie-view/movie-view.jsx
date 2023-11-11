import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);
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
  const { movieId } = useParams();
  const movie = movies.find((b) => b._id === movieId);

  return (
    <div>
      <div>
        <img src={movie.ImagePath} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
      <Button onClick={addFavorite}>Add to Favorites</Button>
      <Button onClick={removeFavorite}>Remove from Favorites</Button>
    </div>
  );
};
