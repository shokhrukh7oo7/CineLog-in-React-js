import "./App-info.css";

export const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Total number of movies {allMoviesCount} </p>
      <p className="fs-4 text-uppercase">Favourite movies {favouriteMovieCount}</p>
    </div>
  );
};

export default AppInfo;
