import "./App.css";
import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviewAddForm from "../movies-add-form/Movies-add-form";

const App = () => {
  const data = [
    { name: "Empire of Osman", viewers: 988, id: 1, favourite: false },
    { name: "Ertugrul", viewers: 890, id: 2, favourite: false },
    { name: "Omar ibn Hattab", viewers: 999, id: 3, favourite: true },
  ];

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviewAddForm />
      </div>
    </div>
  );
};

export default App;
