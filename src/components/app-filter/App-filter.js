import "./App-filter.css";

const AppFilter = (updateFilterHandler) => {
  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button key={btn.name} className="btn btn-dark" type="button" onClick={() => updateFilterHandler(btn.name)}>
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "All movies" },
  { name: "popular", label: "Famous movies" },
  { name: "mostViewers", label: "Most watched movies" },
];

export default AppFilter;
