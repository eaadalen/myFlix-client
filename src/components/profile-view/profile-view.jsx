import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";
import { useState, useEffect } from "react";

export const ProfileView = ({ profiles }) => {
  const { profileId } = useParams();
  const profile = profiles.find((b) => b._id === profileId);
  const [user, setUser] = useState({
    Username: "",
    Email: "",
    FavoriteMovies: []
  })
  const favoriteMovieList = movies.filter((movies) => {
    return user.FavoriteMovies.includes(movies._id);
  })
  const getUser = () => {

  }
  const handleSubmit = (e) => {

  }
  const removeFav = (id) => {

  }
  const handleUpdate = (e) => {

  }
  useEffect(() => {
    let isMounted = true;
    isMounted && getUser();
    return () => {
      isMounted = false;
    }
  }, [])

  return (
    <div>
      <UserInfo name={profile.Username} email={profile.Email}/>
      <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate}/>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
