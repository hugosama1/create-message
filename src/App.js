import React, { Component } from "react";
import "./App.css";
import "whatwg-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value || "" });
  }

  sendMessage(event) {
    event.preventDefault();
    if (!this.state.message) return;
    var data = {
      message: this.state.message
    };
    fetch("http://hugosama.com:8080/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="txtMessage"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.sendMessage}>Send Message</button>
      </div>
    );
  }
}

export default App;
