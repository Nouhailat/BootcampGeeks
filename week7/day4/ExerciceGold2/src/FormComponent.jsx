import React, { Component } from "react";
import axios from "axios";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { userId, title, body } = this.state;
    const data = { userId, title, body };

  
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log("Data posted:", response.data);
   
        alert("Data successfully posted!");
    
        this.setState({ userId: "", title: "", body: "" });
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        alert("There was an error posting the data.");
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserId:</label>
          <input
            type="number"
            name="userId"
            placeholder="Enter user ID"
            value={userId}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            name="body"
            placeholder="Enter body content"
            value={body}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComponent;
