import React from "react";
import PropTypes from "prop-types";

console.log("PropTypes is defined: ", PropTypes !== undefined);

function ControlHeader({ title }) {
  return <h4 className="font-semibold panel-title">{title ?? null}</h4>;
}

ControlHeader.defaultProps = {
	title: "",
};

ControlHeader.propTypes = {
	title: PropTypes.string,
};

function ControlWrapper({ children, hidePanel, className }) {
  const [headerNode, bodyNode] = children;

  if (hidePanel) {
    return (
      <div className={`${className || ""} mb-4 control-wrapper`}>
        {headerNode}
        {bodyNode}
      </div>
    );
  }

  return (
    <div className={`panel panel-default ${className || ""} control-wrapper`}>
      <div className="panel-heading">{headerNode}</div>
      <div className="panel-body">{bodyNode}</div>
    </div>
  );
}

ControlWrapper.defaultProps = {
	hidePanel: false,
	className: "",
};

ControlWrapper.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
	hidePanel: PropTypes.bool,
	className: PropTypes.string,
};

export { ControlHeader, ControlWrapper };
