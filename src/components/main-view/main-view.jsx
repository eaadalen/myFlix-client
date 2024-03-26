import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { ProfileView } from "../profile-view/profile-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { UpdateView } from "../profile-view/update-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://desolate-everglades-87695-c2e8310ae46d.herokuapp.com/movies"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  });

  return (
    <BrowserRouter>
      <NavigationBar/>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie._id} md={3}>
                        <MovieCard 
                          movie={movie}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                <Col md={8}>
                  <MovieView movies={movies} />
                </Col>
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
