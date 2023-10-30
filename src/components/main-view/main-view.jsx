import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {"_id":{"$oid":"6525b1ec73a4245ce9d38632"},"Title":"Kingsman","Description":"Eggsy (Taron Egerton), whose late father secretly worked for a spy organization, lives in a South London housing estate and seems headed for a life behind bars.","Genre":{"Name":"Action","Description":"A movie full of combat, violence, and chase scenes"},"Director":{"Name":"Matthew Vaughn","Bio":"Matthew Vaughn is an English filmmaker","Birth":"1971"},"ImagePath":"https://m.media-amazon.com/images/I/71w6msBkC9L.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525b35873a4245ce9d38633"},"Title":"The Adjustment Bureau","Description":"David Norris fights against fate to be with his beloved Elise Sellas","Genre":{"Name":"Thriller","Description":"A suspenseful and fast paced movie"},"Director":{"Name":"George Nolfi","Bio":"George Nolfi is an filmmaker","Birth":"1968"},"ImagePath":"https://m.media-amazon.com/images/I/71N3T9xUVGL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525b41273a4245ce9d38634"},"Title":"The Dark Knight","Description":"With the help of allies Jim Gordon and Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City.","Genre":{"Name":"Action","Description":"A suspenseful and fast paced movie"},"Director":{"Name":"Christopher Nolan","Bio":"Christopher Nolan is a famous British filmmaker","Birth":"1970"},"ImagePath":"https://m.media-amazon.com/images/I/818hyvdVfvL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525b47d73a4245ce9d38635"},"Title":"The Dark Knight Rises","Description":"It has been 8 years since Batman, in collusion with Jim Gordon, vanished into the night","Genre":{"Name":"Action","Description":"A suspenseful and fast paced movie"},"Director":{"Name":"Christopher Nolan","Bio":"Christopher Nolan is a famous British filmmaker","Birth":"1970"},"ImagePath":"https://m.media-amazon.com/images/I/81rC0pNFgLL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525b57273a4245ce9d38636"},"Title":"Now You See Me","Description":"Charistmatic magician Atlas leads a team of talented illusionists called the Four Horsemen","Genre":{"Name":"Mystery","Description":"A suspenseful movie that revolves around the solution of a crime"},"Director":{"Name":"Louis Leterrier","Bio":"Louis Leterrier is a French filmmaker","Birth":"1973"},"ImagePath":"https://m.media-amazon.com/images/I/719dF0Gfa-L.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525b63873a4245ce9d38637"},"Title":"The Social Network","Description":"In 2003, Harvard undergrad and comptuer genius Mark Zuckerberg begins to work on a new concept that eventually turns into Facebook","Genre":{"Name":"Historical Drama","Description":"A historical drama is work set in a past time period, which presents historical events with varying degrees of historical accuracy"},"Director":{"Name":"David Fincher","Bio":"David Fincher is an filmmaker","Birth":"1962"},"ImagePath":"https://m.media-amazon.com/images/I/61lZ1VXs1nL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525ba8a73a4245ce9d38638"},"Title":"Good Will Hunting","Description":"Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT","Genre":{"Name":"Drama","Description":"In film and television, a drama is intended to be more serious than humorous in tone"},"Director":{"Name":"Gus Van Sant","Bio":"Gus Van Sant is an American filmmaker","Birth":"1952"},"ImagePath":"https://m.media-amazon.com/images/I/71o2qX3ooKL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525bb4c73a4245ce9d38639"},"Title":"Donnie Darko","Description":"During the presidential election of 1988, a teenager named Donnie Darko sleepwalks out of his house one night and sees a giant demonic looking rabbit named Frank","Genre":{"Name":"Psychological Thriller","Description":"A psychological thriller is a subgenre of thriller than combines elements of mystery and psychological fiction"},"Director":{"Name":"Richard Kelly","Bio":"Richard Kelly is an American filmmaker","Birth":"1975"},"ImagePath":"https://m.media-amazon.com/images/I/61x0bDD1BSL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525bbf973a4245ce9d3863a"},"Title":"Into the Spiderverse","Description":"Bitten by a radioactive spider in the subway, Miles Morales suddenly develops mysterious powers","Genre":{"Name":"Action","Description":"An action movie is a genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats"},"Director":{"Name":"Peter Ramsey","Bio":"Peter Ramsey is an American filmmaker","Birth":"1962"},"ImagePath":"https://m.media-amazon.com/images/I/71QcRDosnsL.__AC_SX300_SY300_QL70_FMwebp_.jpg","Featured":true},
    {"_id":{"$oid":"6525bccc73a4245ce9d3863b"},"Title":"Yesterday","Description":"Jack Malik is a struggling songwriter who becomes an overnight sensation when he realizes he is one of 3 people on earth who still remember the Beatles","Genre":{"Name":"Romantic Comedy","Description":"A romantic comedy involves elements of both comedy and romance"},"Director":{"Name":"Peter Ramsey","Bio":"Danny Boyle is a British filmmaker","Birth":"1956"},"ImagePath":"https://m.media-amazon.com/images/I/61u+Usc474L._AC_SY300_SX300_.jpg","Featured":true}
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
      />
      ))}
    </div>
  );
};