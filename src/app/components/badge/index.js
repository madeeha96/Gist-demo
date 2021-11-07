import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Badge.propTypes = {
  files: PropTypes.object.isRequired,
};

/**
 * @param {object} files - files containing in the gist
 * @description - show badge of the files types (language) including in the gist.
 */
export default function Badge({ files }) {
  const fileArr = [];

  for (let file in files) {
    let language = files[file].language;
    //remove duplicate file types
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  return (
    <ul>
      {fileArr.map((language, index) => {
        return (
          <li className="badge" key={index}>
            {language}
          </li>
        );
      })}
    </ul>
  );
}
