import React from "react";
import PropTypes from "prop-types";

/**
 * This component is used to display data as object key and value.
 * @example
 * Name: John
 */

function ObjectView(props) {
  const { objs, objStyles = { box: {}, key: {} } } = props;

  return (
    <div style={objStyles.box}>
      {objs.map((elem) => (
        <div className="dsp-flex" key={elem.key}>
          <div style={objStyles.key} className="font-bold">
            {elem.key}:
          </div>
          <div className="mr-l-1r">{elem.value}</div>
        </div>
      ))}
    </div>
  );
}

// Validating the props type
ObjectView.propTypes = {
  objs: PropTypes.array.isRequired,
  objStyles: PropTypes.object,
};

export default ObjectView;
