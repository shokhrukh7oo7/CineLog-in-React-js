import "./Movies-add-form.css";
import React from "react";

class MoviewAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="movies-add-form">
        <h3>Add new movies</h3>
        <form className="add-form d-flex gap-2">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Which movie?"
            name="name"
            onChange={this.changeHandlerInput}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="How many times has it viewed?"
            name="views"
            onChange={this.changeHandlerInput}
          />
          <button type="submit" className="btn btn-outline-dark">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default MoviewAddForm;
