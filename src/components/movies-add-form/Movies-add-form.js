import "./Movies-add-form.scss";
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

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({ name: this.state.name, viewers: this.state.views});
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Add new movies</h3>
        <form className="add-form d-flex gap-2" onSubmit={this.addFormHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Which movie?"
            name="name"
            onChange={this.changeHandlerInput}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="How many times has it viewed?"
            name="views"
            onChange={this.changeHandlerInput}
            value={views}
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
