import "./App.css";
import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviewAddForm from "../movies-add-form/Movies-add-form";

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList />
        <MoviewAddForm />
      </div>
    </div>
  );
};

export default App;
