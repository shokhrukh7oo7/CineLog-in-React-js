import "./Movies-add-form.css";

const MoviewAddForm = () => {
  return (
    <div className="movies-add-form">
      <h3>Add new movies</h3>
      <form className="add-form d-flex gap-2">
        <input type="text" className="form-control new-post-label" placeholder="Which movie?" />
        <input type="number" className="form-control new-post-label" placeholder="How many times has it viewed?" />
        <button type="submit" className="btn btn-outline-dark">
          Add
        </button>
      </form>
    </div>
  );
};

export default MoviewAddForm;
