import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const ProfileView = ({ profiles }) => {
  const { userID } = useParams();
  const profile = profiles.find((b) => b._id === userID);

  return (
    <div>
      <div>
        <span>Username: </span>
        <span>{profile.Username}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{profile.Email}</span>
      </div>
      <div>
        <span>Favorite Movies: </span>
        <span>{profile.FavoriteMovies}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
