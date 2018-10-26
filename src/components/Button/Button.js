import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

class Button extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    if (onClick !== undefined) {
      onClick();
    }
  };

  render() {
    return (
      <Fragment>
        <CnpButton onClick={this.handleClick}>{this.props.children}</CnpButton>
      </Fragment>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func
};

const CnpButton = styled.button`
  border-radius: 25px;
  background-color: ${props =>
    props.color === "danger" ? "#c0392b" : "#3498db"};
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 100px;
  -webkit-apperence: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default Button;
