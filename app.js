import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicValue: props.stars,
      value: 0,
      social: "This is using React.js. Hover Over the Icons to get more info"
    };
    this._colors = {
      1: "#f44336",
      2: "#FF5722",
      3: "#FF9800",
      4: "#FFC107",
      5: "#FFEB3B"
    };
    this._meanings = {
      0: "No Rating 🚫",
      1: "Terrible 🤮",
      2: "Mediocre 😒",
      3: "Average 😐",
      4: "Solid 🙂",
      5: "Fantastic 🔥"
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleMouseEnter(newValue) {
    this.setState({ dynamicValue: newValue });
  }

  render() {
    return (
      <div>
        <h3 className="contact__headline">{this.state.social}</h3>
        <i
          className="fa fa-github contact__icon"
          aria-hidden="true"
          onMouseEnter={() => {
            this.setState({ social: "github" });
          }}
        ></i>
        <i
          className="fa fa-linkedin-square contact__icon"
          aria-hidden="true"
          onMouseEnter={() => {
            this.setState({ social: "linkedin" });
          }}
        ></i>
        <i className="fa fa-envelope-o contact__icon" aria-hidden="true"></i>
        <p>this works</p>
      </div>
    );
  }
}
ReactDOM.render(<Greeting />, document.getElementById("icons"));
