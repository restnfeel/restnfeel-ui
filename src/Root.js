import React, { Component } from "react";
import { Button } from "./index";

class Root extends Component {
  handleBtnClick = () => {
    console.log("Btn click >>");
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleBtnClick}
          variant="outlined"
          color="primary"
        >
          Check
        </Button>
      </div>
    );
  }
}

export default Root;
