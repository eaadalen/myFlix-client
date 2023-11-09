import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ profiles, movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const favMov = user.FavoriteMovies ? movies.filter((movie) => user.FavoriteMovies.includes(movie._id)) : [];
  console.log(favMov)

  return (
    <Container>
      <Row>
        <h2 className="profile-title">Favorite movies</h2>
        {favMov.map((movie) => {
          return (
            <Col className="mb-4" key={movie._id} md={3}>
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
