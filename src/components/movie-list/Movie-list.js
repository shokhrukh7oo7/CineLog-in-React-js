import "./Movie-list.css";
import MovieListItem from "../movie-list-item/Movie-list-item";

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieListItem name="Empire of Osman" viewers={811} />
      <MovieListItem name="Ertugrul" viewers={890} />
      <MovieListItem name="Omar Ibn Xattab" viewers={999} />
    </div>
  );
};

export default MovieList;
