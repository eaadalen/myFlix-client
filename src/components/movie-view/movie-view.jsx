import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Row className="justify-content-md-center">
      <Col md={12}>
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
          <div>
            <span>Genre: </span>
            <span>{movie.Genre.Name}</span>
          </div>
          <div>
            <span>Description: </span>
            <span>{movie.Description}</span>
          </div>
          <button
            onClick={onBackClick}
            className="back-button"
            style={{ cursor: "pointer" }}
          >
            Back
          </button>
        </div>
      </Col>
    </Row>
  );
};
