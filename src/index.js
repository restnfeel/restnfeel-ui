import React, { Component, Fragment } from "react";
import { Button, Select } from "./components";

/**
 * @author restnfeel
 **/
class Index extends Component {
  state = {
    secondData: []
  };

  handleChange = data => {
    console.log("[select data]  ", data);

    const a = [
      {
        value: "go",
        text: "Go"
      },
      {
        value: "python",
        text: "Python"
      },
      {
        value: "swift",
        text: "Swift"
      }
    ];

    const b = [
      {
        value: "android",
        text: "Android"
      },
      {
        value: "ios",
        text: "IOS"
      }
    ];

    const c = [
      {
        value: "java",
        text: "JAVA"
      },
      {
        value: "csharp",
        text: "C#"
      }
    ];

    if (data.value === "react") {
      this.setState({
        ...this.state,
        secondData: a
      });
    } else if (data.value === "vue") {
      this.setState({
        ...this.state,
        secondData: b
      });
    } else if (data.value === "angular") {
      this.setState({
        ...this.state,
        secondData: c
      });
    }
  };

  render() {
    const { secondData, hasChild } = this.state;

    return (
      <Fragment>
        <Button>Yes</Button>

        <Select
          options={[
            { value: "react", text: "React" },
            { value: "vue", text: "Vue" },
            { value: "angular", text: "Angular" }
          ]}
          onChange={this.handleChange}
          selectedValue="vue"
        />
        <Select options={secondData} />
      </Fragment>
    );
  }
}

export default Index;
