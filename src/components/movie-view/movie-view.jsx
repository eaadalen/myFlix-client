import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b._id === movieId);
  const addFavorite = () => {
		fetch(
      "https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/users/" + String(user.Username) + "/movies/" + String(movie._id),
      {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(async(response) => {
			if (response.ok) {
        const data = await response.json();
        setUser(data);
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
		}).then(async(response) => {
			if (response.ok) {
        const data = await response.json();
        setUser(data);
				alert(String(movie.Title) + " removed from favorites");
			} else {
				alert("Failed to remove " + String(movie.Title) + " from favorites");
			}
		})
	}
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
      <button id="add" className="favorites" onClick={addFavorite}>Add to Favorites</button>
      <button id="remove" className="favorites" onClick={removeFavorite}>Remove from Favorites</button>
    </div>
  );
};
