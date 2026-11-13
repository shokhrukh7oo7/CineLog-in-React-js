import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviewAddForm from "../movies-add-form/Movies-add-form";

class App extends React.Component {
  // const data = [
  //   { name: "Empire of Osman", viewers: 988, id: 1, favourite: false },
  //   { name: "Ertugrul", viewers: 890, id: 2, favourite: false },
  //   { name: "Omar ibn Hattab", viewers: 999, id: 3, favourite: true },
  // ];
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Empire of Osman", viewers: 988, id: 1, favourite: false, like: false },
        { name: "Ertugrul", viewers: 890, id: 2, favourite: false, like: false },
        { name: "Omar ibn Hattab", viewers: 999, id: 3, favourite: false, like: false },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      // 1. Вариант
      const newArr = data.filter((item) => {
        return item.id !== id;
      });

      return {
        data: newArr,
      };

      // 2. Вариант
      // return {
      //   data: data.filter((item) => item.id !== id),
      // };
    });
  };

  addForm = (item) => {
    const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => {
      return item.name.toLowerCase().indexOf(term) > -1;
    });
  };

  updateTermHandler = (term) => {
    this.setState({ term });
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.viewers > 800);
      default:
        return arr;
    }
  };

  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favouriteMovieCount = data.filter((c) => c.favourite).length;
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter);

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
          </div>
          <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
          <MoviewAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
