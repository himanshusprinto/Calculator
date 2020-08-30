import React, { Component } from "react";
class Keys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
    };
  }
  clickHandler = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  render() {
    return (
      <div>
        <div className="space text-right">{this.state.result}</div>
        <div className="mt-3  bg-dark ">
          <button
            type="button"
            value="1"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            1
          </button>
          <button
            type="button"
            value="2"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            2
          </button>
          <button
            type="button"
            value="3"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            3
          </button>
          <button
            type="button"
            value="C"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            C
          </button>
          <button
            type="button"
            value="CE"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            CE
          </button>
          <button
            type="button"
            value="4"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            4
          </button>
          <button
            type="button"
            value="5"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            5
          </button>
          <button
            type="button"
            value="6"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            6
          </button>
          <button
            type="button"
            value="+"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            +
          </button>
          <button
            type="button"
            value="-"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            -
          </button>
          <button
            type="button"
            value="7"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            7
          </button>
          <button
            type="button"
            value="8"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            8
          </button>
          <button
            type="button"
            value="9"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            9
          </button>
          <button
            type="button"
            value="*"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            *
          </button>
          <button
            type="button"
            value="/"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            /
          </button>
          <button
            type="button"
            value="."
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            .
          </button>
          <button
            type="button"
            value="0"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            0
          </button>
          <button
            type="button"
            value="%"
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            %
          </button>
          <button
            type="button"
            value="="
            onClick={(e) => this.clickHandler(e.target.value)}
            className="btn btn-primary m-1 btn-lg"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }
}

export default Keys;
