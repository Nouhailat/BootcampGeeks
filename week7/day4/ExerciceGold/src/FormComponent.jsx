import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { user, email } = this.state;
    const data = { user, email };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data posted:", result);

        alert("Data successfully posted!");

     
        this.setState({ user: "", email: "" });
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        alert("There was an error posting the data.");
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User:</label>
          <input
            type="text"
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComponent;
