import React from "react";
import PropTypes from "prop-types";
import { ControlHeader, ControlWrapper } from "./ControlHeader";

console.log("PropTypes is defined: ", PropTypes !== undefined);

function Component({ name }) {
  return <div>Hello {name || "World"}</div>;
}

Component.defaultProps = {
  name: "",
};

Component.propTypes = {
  name: PropTypes.string,
};

export default Component;
