import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

SearchHeader.propTypes = {
  children: PropTypes.element.isRequired,
};
/**
 * @param {element} children - element to render inside fixed search header
 * @description - Search header renders the child wrapped inside itself.
 */
export default function SearchHeader({ children }) {
  return (
    <div className="header fixed-top">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child);
      })}
    </div>
  );
}
