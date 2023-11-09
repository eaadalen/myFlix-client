import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MovieCard } from "../movie-card/movie-card";
import Button from "react-bootstrap/Button";

export const ProfileView = ({ movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const favMov = movies.filter((movie) => user.FavoriteMovies.includes(movie._id));
  const handleDelete = () => {
		fetch(
      "https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/users/" + String(user.Username),
      {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				setUser(null);
        setToken(null);
        localStorage.clear();
				alert("Your account has been deleted");
			} else {
				alert("Account deletion failed")
			}
		})
	}
  return (
    <Container>
      <Row>
        <h3 className="profile-title">User Info</h3>
        <span>Username: {user.Username}</span>
        <span>Email: {user.Email}</span>
      </Row>
      <Row>
        <Col className="mb-2" md={3}>
          <Link to={"/profile/" + String(user._id) + "/updateinfo"}>
            <button className="update-button">Update User Info</button>
          </Link>
        </Col>
        <Col>
          <Link to={"/login"}>
            <Button className="delete" onClick={handleDelete}>Delete Account</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <h3 className="profile-title">Favorite movies</h3>
        {favMov.map((movie) => {
          return (
            <Col className="mb-3" key={movie._id} md={4}>
              <MovieCard movie={movie}/>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </Row>
    </Container>
  );
};
