import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      inputValue: "",
      responseMessage: "",
    };
  }

  async componentDidMount() {const response = await fetch("http://localhost:5000/api/hello");
    const data = await response.text();
    this.setState({ message: data });
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { inputValue } = this.state;


    const response = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputValue }),
    });

    const data = await response.text();
    this.setState({ responseMessage: data, inputValue: "" });
  };

  render() {
    const { message, inputValue, responseMessage } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter message"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>} 
      </div>
    );
  }
}

export default App;
