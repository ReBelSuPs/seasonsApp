import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errMessage) {
      return <h1>Error: {this.state.errMessage} </h1>;
    } else if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner message='Please accept the location request!' />;
    }
  }
  render() {
    {
      this.renderContent();
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
