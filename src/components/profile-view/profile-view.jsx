import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";
import { useState, useEffect } from "react";

export const ProfileView = ({ profiles }) => {
  const { userID } = useParams();
  const profile = profiles.find((b) => b._id === userID);
  const [user, setUser] = useState({
    Username: "",
    Email: "",
    FavoriteMovies: []
  })
  const favoriteMovieList = profile.FavoriteMovies.filter((movies) => {
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

  /*
  <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate}/>
  */

  return (
    <div>
      <UserInfo name={profile.Username} email={profile.Email}/>
      <FavoriteMovies favoriteMovieList={profile.FavoriteMovies}/>
      
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
