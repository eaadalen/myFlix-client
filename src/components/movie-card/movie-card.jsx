import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  const addFavorite = () => {
		alert(String(movie.Title) + " added to favorites");
	}
  const removeFavorite = () => {
		alert(String(movie.Title) + " removed from favorites");
	}
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
};
