import React, { Component } from "react";
import { Button, MultiSelect } from "./index";

class Root extends Component {
  state = {
    options: [],
    selected: []
  };

  handleBtnClick = () => {
    console.log("Btn click >>");
    this.setState({
      options: [
        {
          label: "React",
          value: "react"
        },
        {
          label: "Go",
          value: "go"
        },
        {
          label: "TypeScript",
          value: "typescript"
        }
      ]
    });
  };

  handleSelectedChanged = selected => {
    this.setState({ selected });
  };
  render() {
    const { options, selected } = this.state;

    return (
      <div>
        <Button
          onClick={this.handleBtnClick}
          variant="outlined"
          color="primary"
        >
          Check
        </Button>

        <MultiSelect
          options={options}
          onSelectedChanged={this.handleSelectedChanged}
          selected={selected}
        />
      </div>
    );
  }
}

export default Root;
