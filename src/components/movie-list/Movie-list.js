import "./Movie-list.css";
import MovieListItem from "../movie-list-item/Movie-list-item";

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {/* 1. Вариант для начинающим передаем свойства через item */}
      {data.map((item) => {
        return (
          <MovieListItem
            name={item.name}
            viewers={item.viewers}
            key={item.id}
            favourite={item.favourite}
            like={item.like}
            onDelete={() => onDelete(item.id)}
            onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}
          />
        );
      })}

      {/* 2. Вариант (это профиссиональный подход) Деструктурируем id, через свойства передаем через spread operator или напрямую */}
      {/* {data.map((item) => {
        const { id, ...otherProps } = item;
        return <MovieListItem key={id} {...otherProps} />;
      })} */}
    </ul>
  );
};

export default MovieList;
