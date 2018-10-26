import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

class Select extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { options } = this.props;
    //console.log("[check] ",  nextProps, nextState);

    if (nextProps.options !== options || options !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  handleChange = e => {
    const { onChange } = this.props;

    const obj = e.target.options[event.target.selectedIndex];
    //console.log(" >> ", );

    let selectObj = {
      value: obj.value,
      text: obj.text
    };

    if (onChange !== undefined) {
      // console.log("## ", this.select, this.select.value);
      onChange(selectObj);
    }
  };

  render() {
    const { options, selectedValue } = this.props;

    return (
      <Fragment>
        <CnpSelect onChange={this.handleChange} value={selectedValue}>
          {Array.isArray(options)
            ? options.map((item, idx) => {
                return (
                  <CnpOption key={idx} value={item.value}>
                    {item.text}
                  </CnpOption>
                );
              })
            : null}
        </CnpSelect>
      </Fragment>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  selectedValue: PropTypes.string
};

const CnpSelect = styled.select`
  box-sizing: border-box;
  font-family: Arial, "돋움", "돋움체", dotum, sans-serif;
  position: relative;
  cursor: pointer;
  display: inline-block;
  min-width: 90px;
  padding: 4px 8px 5px;
  font-size: 12px;
  color: #303030;
  text-align: left;
  border: 1px solid #afb3b8;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
`;

const CnpOption = styled.option`
  color: #2d3436;
`;

export default Select;
