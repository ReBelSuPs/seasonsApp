import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (pos) => console.log(pos),
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Hi there!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
